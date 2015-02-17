FundingStore = Ext.extend(Ext.data.JsonStore, {
    constructor : function(cfg) {
        cfg = cfg || {};
        FundingStore.superclass.constructor.call(this, Ext.apply({
            autoLoad : true,
            storeId : 'FundingStore',
            root: 'data',
            autoSave: false,
            api : {
                read : 'funding/getFundings',
                create  : 'funding/createFundings',
                update  : 'funding/updateFundings',
                destroy : 'funding/deleteFundings'
            },
            idProperty : 'id',
            fields : [ {
                name : 'id',
                type : 'number'
            }, 
            /**/
            {
                name : 'fundingNumber',
                type : 'number'
            }, 
            
            {
                name : 'purpose',
                type : 'string'
            }, {
                name : 'amount',
                type : 'number'
            }, 
            /*
            {
                name : 'startDate',
                type : 'date',
                dateFormat : 'Y-m-d'
            }
            */
            {
                name : 'startDate',
                type : 'string'
            },
            {
                name : 'agreementNumber',
                type : 'number'
            }            
            ],
            writer: new Ext.data.JsonWriter()
        }, cfg));
    }
});
new FundingStore();