const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScratchCard_Schema = new Schema({
    operatorName: {
        type: String,
        required: true
    },
    transactionDate: {
        type: String,
        required: true
    },
    licNumber: {
        type: String,
        required: true
    },
    venName: {
        type: String,
        required: true
    },
    venPhotoURL: {
        type: String,
        required: true
    },
    foodGroup: {
        type: String,
        required: true
    },
    cardsQuantity: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true
    },
    cardCost: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    totalCost: {
        type: String,
        required: true
    }
});

const ScratchCard = mongoose.model('scratchCards', ScratchCard_Schema);

module.exports = ScratchCard;