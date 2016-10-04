#!/usr/bin/env node
'use strict';

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _yamlWithImport = require('yaml-with-import');

var _yamlWithImport2 = _interopRequireDefault(_yamlWithImport);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _stringManipulator = require('./string-manipulator');

var _stringManipulator2 = _interopRequireDefault(_stringManipulator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = process.argv[2];
var commandArray = command.split(':');

var controller = commandArray[0];
var action = commandArray[1];

var directory = process.argv[3];
console.log(directory);
var generateModel = function generateModel() {
    var yamlWithImport = new _yamlWithImport2.default();
    var stringManipulator = new _stringManipulator2.default();
    var schema = new _schema2.default(yamlWithImport, _fs2.default, stringManipulator);
    _fs2.default.readdir(directory, function (err, files) {
        _lodash2.default.forEach(files, function (file) {
            schema.generateModel(directory + file);
        });
    });
};

var generateSchema = function generateSchema() {
    var yamlWithImport = new _yamlWithImport2.default();
    var stringManipulator = new _stringManipulator2.default();
    var schema = new _schema2.default(yamlWithImport, _fs2.default, stringManipulator);
    _fs2.default.readdir(directory, function (err, files) {
        _lodash2.default.forEach(files, function (file) {
            schema.generateSchema(directory + file);
        });
    });
};

switch (controller) {
    case 'schema':
        switch (action) {
            case 'all':
                generateModel();
                generateSchema();
                break;
            case 'schema':
                generateSchema();
                break;
            case 'model':
                generateModel();
                break;
            default:
                break;
        }
        break;
    default:
        break;
}