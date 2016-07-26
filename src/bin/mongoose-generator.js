#!/bin/node
import _ from 'lodash';
import fs from 'fs';
import Schema from '../schema';
import YamlWithImport from 'yaml-with-import';
import StringManipulator from '../string-manipulator';

const command = process.argv[2];
const commandArray = command.split(':');

const controller = commandArray[0];
const action = commandArray[1];

const directory = process.argv[3];
console.log(directory);
const generateModel = () => {
    const yamlWithImport = new YamlWithImport();
    const stringManipulator = new StringManipulator();
    const schema = new Schema(yamlWithImport, fs, stringManipulator);
    fs.readdir(directory, (err, files) => {
        _.forEach(files, (file) => {
            schema.generateModel(directory + file);
        });
    });
};

const generateSchema = () => {
    const yamlWithImport = new YamlWithImport();
    const stringManipulator = new StringManipulator();
    const schema = new Schema(yamlWithImport, fs, stringManipulator);
    fs.readdir(directory, (err, files) => {
        _.forEach(files, (file) => {
            schema.generateSchema(directory + file);
        });
    });
};


switch (controller) {
    case 'schema':
        switch(action) {
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

