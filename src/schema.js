import _ from 'lodash';
import Handlebars from 'handlebars';

/**
 * TODO:
 * - need to add plural functionality
 * country: countries
 *
 */
export default class Schema {
    constructor(yaml, fs, stringManipulator) {
        this.yaml = yaml;
        this.stringManipulator = stringManipulator;
        this.fs = fs;
    }

    generate(fileName, dir) {
        this.generateModel(fileName, dir);
        this.generateSchema(fileName, dir);
    }

    generateSchema(fileName, dir) {
        const schemaJson = this.yaml.read(fileName);
        const fileSchema = schemaJson.schema.name.toLowerCase().replace('_', '-') + '-schema.js';

        const mongoose = dir + '/mongoose/';
        const schemaPath = dir + '/mongoose/schema/';

        if (!this.fs.existsSync(mongoose)) {
            this.fs.mkdir(mongoose);
        }

        if (!this.fs.existsSync(schemaPath)) {
            this.fs.mkdir(schemaPath);
        }

        this.fs.writeFile(schemaPath + fileSchema, this.buildSchemaContent(schemaJson));
    }

    generateModel(fileName, dir) {
        const schemaJson = this.yaml.read(fileName);
        const file = schemaJson.schema.name.toLowerCase().replace('_', '-') + '.js';

        const mongoose = dir + '/mongoose/';
        const modelPath = dir + '/mongoose/model/';

        if (!this.fs.existsSync(mongoose)) {
            this.fs.mkdir(mongoose);
        }

        if (!this.fs.existsSync(modelPath)) {
            this.fs.mkdir(modelPath);
        }

        this.fs.writeFile(modelPath + file, this.buildContent(schemaJson));
    }

    schemaName(name) {
        return [
            name.toLowerCase(),
            '-',
            'schema',
            '.js',
        ].join('');
    }

    /**
     * build setter methods based on attributes
     * */
    buildMethods(attributes) {
        const methods = [];

        _.forEach(attributes, (attribute, key) => {
            let attributeType = '';
            let isArray = false;

            if (typeof attribute.type === 'object') {
                attributeType = this.stringManipulator.pascalCase(attribute.type[0]);
                isArray = true;
            } else {
                attributeType = this.stringManipulator.pascalCase(attribute.type);
            }

            methods.push({
                attributeType,
                'nameCamel': this.stringManipulator.camelFromUnderscore(key),
                'namePascal': this.stringManipulator.pascalFromUnderscore(key),
                'attribute': key,
                isArray,
            });
        });


        return methods;
    }


    buildContent(schemaJson) {
        const source = this.fs.readFileSync(__dirname + '/template/class.hbs', 'utf-8');
        const template = Handlebars.compile(source);
        const methods = this.buildMethods(schemaJson.schema.attributes);

        return template({
            className: this.stringManipulator.pascalCase(schemaJson.schema.name),
            schemaName: this.stringManipulator.pascalCase(schemaJson.schema.name) + 'Schema',
            schemaFileName: this.schemaName(schemaJson.schema.name),
            methods,
        });
    }


    buildSchemaAttributes(attributes) {
        const schemaAttributes = [];

        _.forEach(attributes, (attribute, key) => {
            let attributeType = '';

            if (typeof attribute.type === 'object') {
                attributeType = '[' + this.stringManipulator.pascalCase(attribute.type[0]) + ']';
            } else {
                attributeType = this.stringManipulator.pascalCase(attribute.type);
            }

            schemaAttributes.push({
                'type': attributeType,
                'name': key,
                'isIndexed': attribute.index,
            });
        });

        return schemaAttributes;
    }

    buildSchemaContent(schemaJson) {
        const source = this.fs.readFileSync(__dirname + '/template/schema.hbs', 'utf-8');
        const template = Handlebars.compile(source);
        const attributes = this.buildSchemaAttributes(schemaJson.schema.attributes);

        return template({
            collection: schemaJson.schema.name,
            isIndexed: schemaJson.schema.auto_index,
            attributes,
        });
    }
}
