import mongoose from 'mongoose';

const kittySchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('schemaMongo',kittySchema);