Ext.ns('Ext.plugin.GridPlugin');
Ext.plugin.GridPlugin = Ext.extend(Object, {
    
    init : function(grid) {
        this.grid = grid;
        grid.validate = this.validate;
        grid.clearMessages = this.doClearMessages;
        this.initColumns(grid);
    },

    initColumns : function(grid) {
        this.setStatusRenderers(grid.colModel, Ext.util.renderers.base.statusRenderer);
    },
    
    /**
     * Given a column model, the method adds a status renderer for each
     */
    setStatusRenderers: function(cols, statusRenderer) {
        Ext.each(cols.config, function(col) {
            if (!Ext.isEmpty(col.dataIndex)) {
                var originalRenderer = col.renderer;
                col.renderer = function(value, meta, record, rowIndex, colIndex, store) {
                    statusRenderer.call(this, value, meta, record, rowIndex, colIndex, store, col.dataIndex);
                    return originalRenderer.call(this, value, meta, record, rowIndex, colIndex, store);
                }
            }
        });
    },

    validate : function(msg, validator, args) {
        return Ext.util.data.validateRecords(this.store, msg, validator, args);
    },
    
    doClearMessages : function() {
        var records = this.store.getModifiedRecords();
        Ext.each(records, function(r) {
            r.beginEdit();
            r.data[Ext.util.constants.FIELDS.STATUS] = '';
            r.data[Ext.util.constants.FIELDS.MESSAGES] = {};
            r.endEdit();
        });
    },
});
Ext.preg('GridPlugin', Ext.plugin.GridPlugin);