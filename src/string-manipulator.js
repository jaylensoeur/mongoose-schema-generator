import _ from 'lodash';

class StringManipulator {

    pascalCase(name) {
        return name[0].toUpperCase() + name.substring(1);
    }

    camelCase(name) {
        return name[0].toLowerCase() + name.substring(1);
    }

    pascalFromUnderscore(name) {
        const args = name.split('_');
        let variableName = '';
        _.forEach(args, arg => {
            variableName += this.pascalCase(arg);
        });

        return variableName;
    }

    camelFromUnderscore(name) {
        const args = name.split('_');
        let variableName = '';

        variableName += this.camelCase(args[0]);

        args.shift();
        _.forEach(args, arg => {
            variableName += this.pascalCase(arg);
        });

        return variableName;
    }
}

export default StringManipulator;
