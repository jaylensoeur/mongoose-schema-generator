'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * DO NOT ADD CODE - THIS IS A GENERATED FILE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      **/


var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _blogSchema = require('../schema/blog-schema.js');

var _blogSchema2 = _interopRequireDefault(_blogSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Blog = function () {
    function Blog() {
        _classCallCheck(this, Blog);

        this.model = new _blogSchema2.default();
    }

    /**
     * @param { String } title
     * @return { Blog }
     **/


    _createClass(Blog, [{
        key: 'setTitle',
        value: function setTitle(title) {
            this.model.title = title;
            return this;
        }

        /**
         * @param { String } description
         * @return { Blog }
         **/

    }, {
        key: 'setDescription',
        value: function setDescription(description) {
            this.model.description = description;
            return this;
        }

        /**
         * @param { Buffer } content
         * @return { Blog }
         **/

    }, {
        key: 'setContent',
        value: function setContent(content) {
            this.model.content = content;
            return this;
        }

        /**
         * @param { String[] } tags
         * @return { Blog }
         **/

    }, {
        key: 'setTags',
        value: function setTags(tags) {
            this.model.tags = tags;
            return this;
        }

        /**
         * @return { String }
         **/

    }, {
        key: 'getTitle',
        value: function getTitle() {
            return this.model.title;
        }

        /**
         * @return { String }
         **/

    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.model.description;
        }

        /**
         * @return { Buffer }
         **/

    }, {
        key: 'getContent',
        value: function getContent() {
            return this.model.content;
        }

        /**
         * @return { String[] }
         **/

    }, {
        key: 'getTags',
        value: function getTags() {
            return this.model.tags;
        }
    }]);

    return Blog;
}();

exports.default = Blog;