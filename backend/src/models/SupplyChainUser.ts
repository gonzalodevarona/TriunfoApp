import mongoose from 'mongoose';


const supplyChainUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    nameEnterprise: {
        type: String,
        required: true
    },
    idType: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const SupplyChainUser = mongoose.model('SupplyChainUser', supplyChainUserSchema)

export default SupplyChainUser;

