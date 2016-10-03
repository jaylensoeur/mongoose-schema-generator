// DO NOT ADD CODE - THIS IS A GENERATED FILE

import mongoose from 'mongoose';
export default mongoose.model('user', new mongoose.Schema({
    email: {
        type: String
        ,index: true
    },
    first_name: {
        type: String
        
    },
    last_name: {
        type: String
        
    },
    password: {
        type: Buffer
        
    },
 }, {
        collection: 'users',
        _id: true
    }
));