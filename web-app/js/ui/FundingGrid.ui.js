FundingGridUi = Ext.extend(Ext.grid.EditorGridPanel, {
	store: 'FundingStore',
    flex: 1,
    
    initComponent: function() {
    	this.selModel = new Ext.grid.RowSelectionModel({
            singleSelect: true
        });
    	
    	this.tbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    ref: 'addButton',
                    iconCls: 'add-button-icon',
                    text: 'New Agreement'
                },
                {
                    xtype: 'button',
                    ref: 'saveButton',
                    iconCls: 'save-button-icon',
                    text: 'Save'
                }
            ]
        };
            
        this.columns = [
            {
                xtype: 'gridcolumn',
                id: 'actionColumn',
                dataIndex : '',
                header: '&nbsp;',
                renderer: function() {
                    return '<img class="delete-icon">';
                },
                hideable : false,
                menuDisabled : true,
                sortable : false,
                resizable : false,
                width: 30
            },
            /**/
            {
                xtype: 'gridcolumn',
                id: 'fundingNumber',
                dataIndex: 'fundingNumber',
                header: 'Funding Number',
                sortable: true,
                width: 100,
                editor: {
                    xtype: 'numberfield'
                }
            },            
            {
                xtype: 'gridcolumn',
                id: 'purpose',
                dataIndex: 'purpose',
                header: 'Purpose',
                sortable: true,
                width: 200,
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                xtype: 'gridcolumn',
                id: 'amount',
                dataIndex: 'amount',
                header: 'Amount',
                sortable: true,
                width: 100,
                editor: {
                    xtype: 'numberfield'
                }
            },
            {
                xtype: 'gridcolumn',
                id: 'startDate',
                dataIndex: 'startDate',
                header: 'Start Date',
                sortable: true,
                width: 300,
                editor: {
                	xtype: 'textfield'
                	/*
                    xtype: 'datefield',
                    format: 'Y-m-d'
                    */
                }
            }
        ];
        
        FundingGridUi.superclass.initComponent.call(this);
    }
});