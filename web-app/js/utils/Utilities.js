Ext.ns('Ext.util.data');
Ext.ns('Ext.util.renderers.base');

Ext.util.renderers.base.statusRenderer = function(value, meta, record, rowIndex, colIndex, store, field) {
    if (!colIndex || !(record instanceof Ext.data.Record)) {
        return value;
    }

    var message = record.get(Ext.util.constants.FIELDS.MESSAGES);
    var status = record.get(Ext.util.constants.FIELDS.STATUS);
    if(record.isModified(field) && message && !Ext.isEmpty(message[field]) && Ext.util.constants.RECORD_STATUS.ERROR == status){
        meta.css = 'error';
        meta.attr = 'ext:qtip="' + message[field] + '"';
    }
    return value;
}

Ext.util.data.validateRecords = function(store, msg, validator, args) {
    var isValid = true;

    var records = store.getModifiedRecords();
    for(var i=0; i<records.length; i++){
        if(!Ext.util.data.validateRecord(records[i], msg, validator, args)){
            isValid=false;
        }
        if (!isValid && args && args.breakAfterInvalidRecord === true) {
            break;
        }
    }

    return isValid
}

Ext.util.data.validateRecord = function(record, msg, validator, args) {
    var isValid = true;
    if(!validator(record, args)){
        isValid = false;
        record.beginEdit();
        record.set(Ext.util.constants.FIELDS.STATUS, Ext.util.constants.RECORD_STATUS.ERROR);
        Ext.util.data.setFieldMessage(record, msg);
        record.endEdit();
    }

    return isValid
}

Ext.util.data.setFieldMessage = function(r, msg){
    var msgFieldName = Ext.util.constants.FIELDS.MESSAGES;
    var currentMsg = r.get(msgFieldName);
    var isMsgSet = Ext.isEmpty(r.get(msgFieldName));
    if(!isMsgSet){
        for(var p in msg){
            currentMsg[p] = msg[p];
        }
    }
    else{
        currentMsg = msg;
    }
    r.set(msgFieldName, currentMsg);
}