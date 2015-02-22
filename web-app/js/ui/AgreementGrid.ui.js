AgreementGridUi = Ext.extend(Ext.grid.EditorGridPanel, {
    store: 'AgreementStore',
    flex: 1,
    
    initComponent: function() {       
        
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
            {
                xtype: 'gridcolumn',
                id: 'agreementNumber',
                dataIndex: 'agreementNumber',
                header: 'Agreement Number',
                sortable: true,
                width: 120,
                editor: {
                    xtype: 'numberfield'
                }
            },
            {
                xtype: 'gridcolumn',
                id: 'customer',
                dataIndex: 'customer',
                header: 'Customer',
                sortable: true,
                width: 200,
                editor: {
                    xtype: 'textfield'
                }
            },
            {
                xtype: 'gridcolumn',
                id: 'unallocatedAmount',
                dataIndex: 'unallocatedAmount',
                header: 'Unallocated Amount',
                sortable: true,
                width: 120
            },
            {
                xtype: 'gridcolumn',
                id: 'totalAmount',
                dataIndex: 'totalAmount',
                header: 'Total Amount',
                sortable: true,
                width: 80,
                editor: {
                    xtype: 'numberfield'
                }
            },
            {
                xtype: 'gridcolumn',
                id: 'totalAppliedFunds',
                dataIndex: 'totalAppliedFunds',
                header: 'Total Applied Funds',
                sortable: true,
                width: 150,
                /* R5. TODO numberfield should be removed, so it is not possible to edit this cell after implementing R5 */
                editor: {
                    xtype: 'numberfield'
                }
            },
            {
                xtype: 'gridcolumn',
                dataIndex: 'currency',
                header: 'Currency',
                sortable: true,
                width: 50,
                editor: {
                    xtype: 'textfield'
                }
            }
        ];
        
        AgreementGridUi.superclass.initComponent.call(this);
    }
});