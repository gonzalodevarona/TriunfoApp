import mongoose from 'mongoose';


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
        type: String,
        required: true
    }
})

const Update = mongoose.model('Update', updateSchema)

export default Update;
