// models/dataModel.js
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    dateTime: {
        type: Date
    },
    maskedPan: {
        type: String
    },
    merchantNameLocation:{
        type: String
    },
    merchantId: {
        type: String
    },
    messageType:{
        type:String
    },
    responseCodeDescription: {
        type: String
    },
    retrievalReferenceNumber: {
        type: String
    },
    settlementImpact: {
        type: Number
    },
    settlementImpactDescription: {
        type: String
    },
    stan: {
        type: String
    },
    terminalId: {
        type: String
    },
    transactionId: {
        type: String
    },
    transactionAmountRequest: {
        type: Number
    },
    transactionStatus: {
        type: String
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);
