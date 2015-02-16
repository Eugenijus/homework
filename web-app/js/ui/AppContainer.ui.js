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
                title: 'Agreements',
                height: 200
            },
            /*
            {
                title: 'Panel',
                html: 'Just a simple panel'
            }
            ,
            {
                title: 'Panel2',
                html: 'Just a simple panel2'
            },
            */
            {
                xtype: 'fundinggrid',
                ref: 'fundingGrid'
            }
            
        ];
        
        AppContainerUi.superclass.initComponent.call(this);
    }
});