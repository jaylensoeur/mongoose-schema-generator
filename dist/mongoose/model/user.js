'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DO NOT ADD CODE - THIS IS A GENERATED FILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _userSchema = require('../schema/user-schema.js');

var _userSchema2 = _interopRequireDefault(_userSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
    function User() {
        _classCallCheck(this, User);

        this.model = new _userSchema2.default();
    }

    /**
     * @param { String } email
     * @return { User }
     **/


    _createClass(User, [{
        key: 'setEmail',
        value: function setEmail(email) {
            this.model.email = email;
            return this;
        }

        /**
         * @param { String } firstName
         * @return { User }
         **/

    }, {
        key: 'setFirstName',
        value: function setFirstName(firstName) {
            this.model.first_name = firstName;
            return this;
        }

        /**
         * @param { String } lastName
         * @return { User }
         **/

    }, {
        key: 'setLastName',
        value: function setLastName(lastName) {
            this.model.last_name = lastName;
            return this;
        }

        /**
         * @param { Buffer } password
         * @return { User }
         **/

    }, {
        key: 'setPassword',
        value: function setPassword(password) {
            this.model.password = password;
            return this;
        }

        /**
         * @return { String }
         **/

    }, {
        key: 'getEmail',
        value: function getEmail() {
            return this.model.email;
        }

        /**
         * @return { String }
         **/

    }, {
        key: 'getFirstName',
        value: function getFirstName() {
            return this.model.first_name;
        }

        /**
         * @return { String }
         **/

    }, {
        key: 'getLastName',
        value: function getLastName() {
            return this.model.last_name;
        }

        /**
         * @return { Buffer }
         **/

    }, {
        key: 'getPassword',
        value: function getPassword() {
            return this.model.password;
        }
    }]);

    return User;
}();

exports.default = User;