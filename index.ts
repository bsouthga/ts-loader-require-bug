import { log } from './ts-import';

declare var require: (mod: string) => any;

// this results in error
const { default: jsImport } = require('./import');

// // this does not
// import jsImport from './import';

log();
jsImport.test();