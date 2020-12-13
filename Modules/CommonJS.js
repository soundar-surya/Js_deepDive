//CommonJS was introduced in node js. It is synchronous.
//The dependecies will be loaded on the initial server startip. Then, it will be cached in the memory

//Module bundlers are introduced to use CommonJs in browser.
//Module Bundlers(browserify, weboack, parcel) bundles all th dependecies and code in a single file.which increases the performance

//Example

const util = require('util')

const func = () => `Hola Amigo!`

module.exports = {
    fn: func
}