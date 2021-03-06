#!/usr/bin/env node
import _ from 'lodash';
import fs from 'fs';
import YamlWithImport from 'yaml-with-import';

import Schema from './schema';
import StringManipulator from './string-manipulator';

const command = process.argv[2];
const commandArray = command.split(':');

const controller = commandArray[0];
const action = commandArray[1];

const directory = process.argv[3];

const generateModel = () => {
    const yamlWithImport = new YamlWithImport();
    const stringManipulator = new StringManipulator();
    const schema = new Schema(yamlWithImport, fs, stringManipulator);
    fs.readdir(directory, (err, files) => {
        _.forEach(files, (file) => {
            schema.generateModel(directory + file, directory);
        });
    });
};

const generateSchema = () => {
    const yamlWithImport = new YamlWithImport();
    const stringManipulator = new StringManipulator();
    const schema = new Schema(yamlWithImport, fs, stringManipulator);
    fs.readdir(directory, (err, files) => {
        _.forEach(files, (file) => {
            schema.generateSchema(directory + file, directory);
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

