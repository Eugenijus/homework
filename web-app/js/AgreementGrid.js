AgreementGrid = Ext.extend(AgreementGridUi, {
    
    plugins: [new Ext.plugin.GridPlugin()],
    
    initComponent: function() {
        AgreementGrid.superclass.initComponent.call(this);
        
        this.topToolbar.addButton.on('click', this.onAddAgreementClick, this);
        this.topToolbar.saveButton.on('click', this.onSaveClick, this);
        this.store.on('save', this.onStoreAfterSave, this);
        this.store.on('exception', this.onStoreSaveException, this);
        this.on('cellclick', this.onCellClick, this);
        this.on('afteredit', this.onGridAfterEdit, this);
        
        this.selModel = new Ext.grid.RowSelectionModel({
            singleSelect: true,
            listeners: {
                rowselect: function(sm, row, rec) {
                    console.log('rowselect + ' + row);
                }
            }
        });
        
        //
    },
    
    listeners: {
    	afterrender: function(g) {
    		console.log('afterrender + ' + g.getSelectionModel().singleSelect);
    		var current_grid = g
    		this.on('load', function(){
    			current_grid.getSelectionModel().selectRow(0);
    		})
        } // Allow rows to be rendered.
    	
    },
    
    onAddAgreementClick: function() {
        var record = new this.store.recordType({
            agreementNumber: null,
            customer: null,
            unallocatedAmount: 0,
            totalAmount: null,
            totalAppliedFunds: 0,
            currency: 'LTL'
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
        
        this.validate({agreementNumber: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('agreementNumber');
            }
        );
        
        this.validate({customer: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('customer');
            }
        );
        
        this.validate({unallocatedAmount: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('unallocatedAmount') != null;
            }
        );
        
        this.validate({totalAmount: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('totalAmount') != null;
            }
        );
        
        this.validate({totalAppliedFunds: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('totalAppliedFunds') != null;
            }
        );
        
        this.validate({totalAppliedFunds: Ext.util.constants.VALIDATION_MESSAGES.FUNDS_EXCEED_TOTAL_AMOUNT},
            function(r) {
                return r.get('unallocatedAmount') >= 0;
            }
        );
        
        this.validate({currency: Ext.util.constants.VALIDATION_MESSAGES.FIELD_IS_MANDATORY},
            function(r) {
                return r.get('currency');
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
            case 'totalAmount':
            case 'totalAppliedFunds':
                e.record.set('unallocatedAmount', e.record.data.totalAmount - e.record.data.totalAppliedFunds);
                break;
        }
    }
    
});
Ext.reg('agreementgrid', AgreementGrid);
