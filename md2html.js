'use strict';

const Path   = require('path');
const Glob   = require('glob');
const Read   = require('read-file');
const Write  = require('write');
const Del    = require('del');
const Marked = require('marked');

const template = Read.sync(Path.resolve(__dirname,'./src/docs/template.html'),'utf8');

console.log('Cleaning directory!');
Del.sync(['./docs/docs/**','!./docs/docs']);

console.log('Starting translation!');
Glob.sync( './src/docs/**/*.md' ).forEach( file => {
  console.log(`translating: ${file}`);
  const filePath = Path.resolve(__dirname,file);
  const writePath = file.replace('./src','./docs').replace('.md','.html');
  const markdown = Read.sync(filePath,'utf8');
  Write.sync(Path.resolve(__dirname,writePath),
             template.replace('{{docs}}',Marked(markdown)));
});
