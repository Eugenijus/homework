AgreementStore = Ext.extend(Ext.data.JsonStore, {
    constructor : function(cfg) {
        cfg = cfg || {};
        AgreementStore.superclass.constructor.call(this, Ext.apply({
            autoLoad : true,
            storeId : 'AgreementStore',
            root: 'data',
            autoSave: false,
            api : {
                read : 'agreement/getAgreements',
                create  : 'agreement/createAgreements',
                update  : 'agreement/updateAgreements',
                destroy : 'agreement/deleteAgreements'
            },
            idProperty : 'id',
            fields : [ {
                name : 'id',
                type : 'number'
            }, {
                name : 'agreementNumber',
                type : 'number'
            }, {
                name : 'customer',
                type : 'string'
            }, {
                name : 'unallocatedAmount',
                type : 'number'
            }, {
                name : 'totalAmount',
                type : 'number'
            }, {
                name : 'totalAppliedFunds',
                type : 'number'
            }, {
                name : 'currency',
                type : 'string'
            }],
            writer: new Ext.data.JsonWriter()
        }, cfg));
    }
});
new AgreementStore();