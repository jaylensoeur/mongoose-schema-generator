/**
 * DO NOT ADD CODE - THIS IS A GENERATED FILE
 **/
import mongoose from 'mongoose';
import UserSchema from '../schema/user-schema.js';

class User {

    constructor() {
        this.model = new UserSchema();
    }

    /**
     * @param { String } email
     * @return { User }
     **/
    setEmail(email) {
        this.model.email = email;
        return this;
    }

    /**
     * @param { String } firstName
     * @return { User }
     **/
    setFirstName(firstName) {
        this.model.first_name = firstName;
        return this;
    }

    /**
     * @param { String } lastName
     * @return { User }
     **/
    setLastName(lastName) {
        this.model.last_name = lastName;
        return this;
    }

    /**
     * @param { Buffer } password
     * @return { User }
     **/
    setPassword(password) {
        this.model.password = password;
        return this;
    }


    /**
     * @return { String }
     **/
    getEmail() {
        return this.model.email;
    }

    /**
     * @return { String }
     **/
    getFirstName() {
        return this.model.first_name;
    }

    /**
     * @return { String }
     **/
    getLastName() {
        return this.model.last_name;
    }

    /**
     * @return { Buffer }
     **/
    getPassword() {
        return this.model.password;
    }

}

export default User;
