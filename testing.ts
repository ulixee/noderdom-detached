// import { DOMParser } from './src';
// // tslint:disable-next-line:no-var-requires variable-name
// const DOMException = require('domexception');
// // tslint:disable-next-line:no-var-requires
// const nwsapi = require('nwsapi');
//
// const parser = new DOMParser({});
//
// const document = parser.parseFromString(`<html><head></head><body><h1>Testing</h1></body></html>`, 'text/html');
// const matcher = nwsapi({
//   document: document.documentElement.ownerDocument,
//   DOMException,
// });
// matcher.configure({
//   LOGERRORS: false,
//   IDS_DUPES: true,
//   MIXEDCASE: true,
// });
//
// const h1 = matcher.first('h1', document.documentElement);
//
// // tslint:disable-next-line:no-console
// // console.log(document.documentElement.outerHTML);
//
// // tslint:disable-next-line:no-console
// console.log(h1.outerHTML);
