'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _handlebars = require('handlebars');

var _handlebars2 = _interopRequireDefault(_handlebars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TODO:
 * - need to add plural functionality
 * country: countries
 *
 */
var Schema = function () {
    function Schema(yaml, fs, stringManipulator) {
        _classCallCheck(this, Schema);

        this.yaml = yaml;
        this.stringManipulator = stringManipulator;
        this.fs = fs;
    }

    _createClass(Schema, [{
        key: 'generate',
        value: function generate(fileName, dir) {
            this.generateModel(fileName, dir);
            this.generateSchema(fileName, dir);
        }
    }, {
        key: 'generateSchema',
        value: function generateSchema(fileName, dir) {
            var schemaJson = this.yaml.read(fileName);
            var fileSchema = schemaJson.schema.name.toLowerCase().replace('_', '-') + '-schema.js';

            var mongoose = dir + '/mongoose/';
            var schemaPath = dir + '/mongoose/schema/';

            if (!this.fs.existsSync(mongoose)) {
                this.fs.mkdir(mongoose);
            }

            if (!this.fs.existsSync(schemaPath)) {
                this.fs.mkdir(schemaPath);
            }

            this.fs.writeFile(schemaPath + fileSchema, this.buildSchemaContent(schemaJson));
        }
    }, {
        key: 'generateModel',
        value: function generateModel(fileName, dir) {
            var schemaJson = this.yaml.read(fileName);
            var file = schemaJson.schema.name.toLowerCase().replace('_', '-') + '.js';

            var mongoose = dir + '/mongoose/';
            var modelPath = dir + '/mongoose/model/';

            if (!this.fs.existsSync(mongoose)) {
                this.fs.mkdir(mongoose);
            }

            if (!this.fs.existsSync(modelPath)) {
                this.fs.mkdir(modelPath);
            }

            this.fs.writeFile(modelPath + file, this.buildContent(schemaJson));
        }
    }, {
        key: 'schemaName',
        value: function schemaName(name) {
            return [name.toLowerCase(), '-', 'schema', '.js'].join('');
        }

        /**
         * build setter methods based on attributes
         * */

    }, {
        key: 'buildMethods',
        value: function buildMethods(attributes) {
            var _this = this;

            var methods = [];

            _lodash2.default.forEach(attributes, function (attribute, key) {
                var attributeType = '';
                var isArray = false;

                if (_typeof(attribute.type) === 'object') {
                    attributeType = _this.stringManipulator.pascalCase(attribute.type[0]);
                    isArray = true;
                } else {
                    attributeType = _this.stringManipulator.pascalCase(attribute.type);
                }

                methods.push({
                    attributeType: attributeType,
                    'nameCamel': _this.stringManipulator.camelFromUnderscore(key),
                    'namePascal': _this.stringManipulator.pascalFromUnderscore(key),
                    'attribute': key,
                    isArray: isArray
                });
            });

            return methods;
        }
    }, {
        key: 'buildContent',
        value: function buildContent(schemaJson) {
            var source = this.fs.readFileSync(__dirname + '/template/class.hbs', 'utf-8');
            var template = _handlebars2.default.compile(source);
            var methods = this.buildMethods(schemaJson.schema.attributes);

            return template({
                className: this.stringManipulator.pascalCase(schemaJson.schema.name),
                schemaName: this.stringManipulator.pascalCase(schemaJson.schema.name) + 'Schema',
                schemaFileName: this.schemaName(schemaJson.schema.name),
                methods: methods
            });
        }
    }, {
        key: 'buildSchemaAttributes',
        value: function buildSchemaAttributes(attributes) {
            var _this2 = this;

            var schemaAttributes = [];

            _lodash2.default.forEach(attributes, function (attribute, key) {
                var attributeType = '';

                if (_typeof(attribute.type) === 'object') {
                    attributeType = '[' + _this2.stringManipulator.pascalCase(attribute.type[0]) + ']';
                } else {
                    attributeType = _this2.stringManipulator.pascalCase(attribute.type);
                }

                schemaAttributes.push({
                    'type': attributeType,
                    'name': key,
                    'isIndexed': attribute.index
                });
            });

            return schemaAttributes;
        }
    }, {
        key: 'buildSchemaContent',
        value: function buildSchemaContent(schemaJson) {
            var source = this.fs.readFileSync(__dirname + '/template/schema.hbs', 'utf-8');
            var template = _handlebars2.default.compile(source);
            var attributes = this.buildSchemaAttributes(schemaJson.schema.attributes);

            return template({
                collection: schemaJson.schema.name,
                isIndexed: schemaJson.schema.auto_index,
                attributes: attributes
            });
        }
    }]);

    return Schema;
}();

exports.default = Schema;