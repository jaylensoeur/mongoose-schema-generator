'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StringManipulator = function () {
    function StringManipulator() {
        _classCallCheck(this, StringManipulator);
    }

    _createClass(StringManipulator, [{
        key: 'pascalCase',
        value: function pascalCase(name) {
            return name[0].toUpperCase() + name.substring(1);
        }
    }, {
        key: 'camelCase',
        value: function camelCase(name) {
            return name[0].toLowerCase() + name.substring(1);
        }
    }, {
        key: 'pascalFromUnderscore',
        value: function pascalFromUnderscore(name) {
            var _this = this;

            var args = name.split('_');
            var variableName = '';
            _lodash2.default.forEach(args, function (arg) {
                variableName += _this.pascalCase(arg);
            });

            return variableName;
        }
    }, {
        key: 'camelFromUnderscore',
        value: function camelFromUnderscore(name) {
            var _this2 = this;

            var args = name.split('_');
            var variableName = '';

            variableName += this.camelCase(args[0]);

            args.shift();
            _lodash2.default.forEach(args, function (arg) {
                variableName += _this2.pascalCase(arg);
            });

            return variableName;
        }
    }]);

    return StringManipulator;
}();

exports.default = StringManipulator;