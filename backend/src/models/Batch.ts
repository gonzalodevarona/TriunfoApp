import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const batchSchema = new mongoose.Schema({
    dateProduced: {
        type: Date,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    producerName: {
        type: String,
        required: true
    },
    isColdStorage: {
        type: Boolean,
        required: true
    },
    whoAddIt: {
        type: Schema.Types.ObjectId,
        ref: "SupplyChainUserId",
        required: true
    }
})

const Batch = mongoose.model('Batch', batchSchema)

export default Batch;
