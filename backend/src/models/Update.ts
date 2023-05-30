import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const updateSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    batchId: {
        type: Schema.Types.ObjectId,
        ref: "BatchId",
        required: true
    },
    supplyChainUserId: {
        type: Schema.Types.ObjectId,
        ref: "SupplyChainUserId",
        required: true
    },
})

const Update = mongoose.model('Update', updateSchema)

export default Update;
