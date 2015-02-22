AppContainerUi = Ext.extend(Ext.Viewport, {
    layout : {
        align: 'stretch',
        pack: 'start',
        type: 'vbox'
    },

    initComponent : function() {
        this.items = [
            {
                xtype: 'agreementgrid',
                ref: 'agreementGrid',
                title: 'Agreements'
                
                /* removing height to meet R1. */
                /* height: 200*/
            },
            {
                xtype: 'fundinggrid',
                ref: 'fundingGrid',
                title: 'Fundings'
            }
            
        ];
        
        AppContainerUi.superclass.initComponent.call(this);
    }
});