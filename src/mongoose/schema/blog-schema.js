// DO NOT ADD CODE - THIS IS A GENERATED FILE

import mongoose from 'mongoose';
export default mongoose.model('blog', new mongoose.Schema({
    title: {
        type: String
        ,index: true
    },
    description: {
        type: String
        
    },
    content: {
        type: Buffer
        
    },
    tags: {
        type: [String]
        
    },
 }, {
        collection: 'blogs',
        _id: true
    }
));