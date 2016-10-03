/**
 * DO NOT ADD CODE - THIS IS A GENERATED FILE
 **/
import mongoose from 'mongoose';
import BlogSchema from '../schema/blog-schema.js';

class Blog {

    constructor() {
        this.model = new BlogSchema();
    }

    /**
     * @param { String } title
     * @return { Blog }
     **/
    setTitle(title) {
        this.model.title = title;
        return this;
    }

    /**
     * @param { String } description
     * @return { Blog }
     **/
    setDescription(description) {
        this.model.description = description;
        return this;
    }

    /**
     * @param { Buffer } content
     * @return { Blog }
     **/
    setContent(content) {
        this.model.content = content;
        return this;
    }

    /**
     * @param { String[] } tags
     * @return { Blog }
     **/
    setTags(tags) {
        this.model.tags = tags;
        return this;
    }


    /**
     * @return { String }
     **/
    getTitle() {
        return this.model.title;
    }

    /**
     * @return { String }
     **/
    getDescription() {
        return this.model.description;
    }

    /**
     * @return { Buffer }
     **/
    getContent() {
        return this.model.content;
    }

    /**
     * @return { String[] }
     **/
    getTags() {
        return this.model.tags;
    }

}

export default Blog;
