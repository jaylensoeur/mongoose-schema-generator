'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mongoose2.default.model('user', new _mongoose2.default.Schema({
    email: {
        type: String,
        index: true
    },
    first_name: {
        type: String

    },
    last_name: {
        type: String

    },
    password: {
        type: Buffer

    }
}, {
    collection: 'users',
    _id: true
})); // DO NOT ADD CODE - THIS IS A GENERATED FILE