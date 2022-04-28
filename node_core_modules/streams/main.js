const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF-8');

// readableStream.on('data', (chunck)=>{
//     data += chunck;
// });

// readableStream.on('end', () =>{
//     console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('hola');
// process.stdout.write('hola');

const transform = stream.Transform;

const Mayus = () =>{

}
