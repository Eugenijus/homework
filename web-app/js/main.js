Ext.onReady(function() {
    Ext.QuickTips.init();
    Ext.apply(Ext.QuickTips.getQuickTip(), {
        constrainPosition: true
    });
    
    appContainer = new AppContainer({
        renderTo : Ext.getBody()
    });
    appContainer.show();
});