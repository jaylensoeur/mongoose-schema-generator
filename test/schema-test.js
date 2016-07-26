import Schema from '../src/schema';
import Yaml from 'yaml-with-import';
import StringManipulator from './../src/string-manipulator';
import fs from 'fs';

describe('', () => {
    const yaml = new Yaml();
    before(done => {
       done();
    });

    after(done => {
        done();
    });

    it('schema generate', done => {
        const schema = new Schema(yaml, fs, new StringManipulator());
        schema.generate(__dirname + '/fixtures/blog.yml');
        schema.generate(__dirname + '/fixtures/user.yml');
        done();
    });
});