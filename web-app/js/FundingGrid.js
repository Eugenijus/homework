FundingGrid = Ext.extend(FundingGridUi, {
    
    plugins: [new Ext.plugin.GridPlugin()],
    
    initComponent: function() {
    	FundingGrid.superclass.initComponent.call(this);
    	
    	this.topToolbar.addButton.on('click', this.onAddFundingClick, this);
        this.topToolbar.saveButton.on('click', this.onSaveClick, this);
        this.store.on('save', this.onStoreAfterSave, this);
        this.store.on('exception', this.onStoreSaveException, this);
        this.on('cellclick', this.onCellClick, this);
        this.on('afteredit', this.onGridAfterEdit, this);
    },

    /* R4. It should be possible to do CRUD operations on Funding Grid */
    
    onAddFundingClick: function() {
    	var today = new Date()
		var record = new this.store.recordType({
            fundingNumber: null,
            pupose: null,
            amount: 0,
            startDate: today.format('Y-m-d'),
            /* startDate: '2015-02-15' */
            agreementNumber: null            
        });
        
        this.store.add(record);
        
        record.markDirty();
	},
    
    onSaveClick: function() {
        if(this.isValid()) {
            this.store.save();
        }
    },
    
    isValid: function() { 
        this.clearMessages();
        /**/
        this.validate({fundingNumber: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('fundingNumber');
            }
        );
        
        this.validate({purpose: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('purpose') != null;
            }
        );
        
        this.validate({amount: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('amount') != null;
            }
        );
        
        this.validate({startDate: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('startDate') != null;
            }
        );
        
		this.validate({startDate: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
		        function(r) {
		            return r.get('agreementNumber') != null;
		    }
		);
        
        return this.store.find(Ext.util.constants.FIELDS.STATUS, Ext.util.constants.RECORD_STATUS.ERROR) == -1;
    },
    
    onStoreAfterSave: function() {
        this.store.reload();
    },
    
    onStoreSaveException: function(proxy, type, action, options, response) {
        if(response.status != 200) {
            Ext.Msg.alert('Error', response.statusText);
        }
    },
    
    onCellClick : function(grid, rowIndex, columnIndex, e) {
        if (columnIndex == 0 && e.getTarget('.delete-icon', 2, true)) {
            grid.store.removeAt(rowIndex);
        }
    },
    
    onGridAfterEdit: function(e) {
    	switch (e.field) {
    	/* Making sure that the Date format is m-d-Y, e.g. 02-14-2015 */
        case 'startDate':
            /* e.record.set('startDate', e.record.data.startDate.format('Y-m-d')); */
            /* console.log('FundingGrid.js:onGridAfterEdit ' + e.record.data.startDate); */
            break;
    	}
    }    
	
});
Ext.reg('fundinggrid', FundingGrid);