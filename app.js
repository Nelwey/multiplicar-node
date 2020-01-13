//MANERA DE HACER COMO SI FUERA CLASES
// O SEA multiplicar es la clase y luego llamar a
// la propiedad o sea multiplicar.crearArchivo
//que a su vez es una funcion que hay que pasarle
//un argumento y retorna una promesa
//entonces por eso hay que colocar .then 

// const multiplicar = require('./multiplicar/multiplicar');

// let base = 10;
// console.log(multiplicar)

// multiplicar.crearArchivo(base).then(resp => console.log(resp));

// crearArchivo(base).then(resp => console.log(resp));

//----------------------------------------------------------

//ESTA FORMA ES DESTRUCTURANDO EL OBJETO
// const { crearArchivo, saludo } = require('./multiplicar/multiplicar');
// const { funcion1, funcion2 } = require('./multiplicar/multiplicar');


// let base = 10;

// ESTE CATCH DEVUELVE EL ERR QUE DEVUELVA LA PROMESA
// funcion1(base)
//   .then(resp => console.log(resp))
//   .catch(err => console.log(err));



// funcion2("diablito")
//   .then(resp => console.log(resp))
//   .catch(err => console.log(err));


//----------------------------------------------------

// // ARGV

// const { funcion1, funcion2 } = require('./multiplicar/multiplicar');


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// // console.log(base);
// //desde la terminal voy a ingresar el valor de la variable 
// // base y la voy a pasar como argumento de mi funcion1

// funcion1(base)
//   .then(resp => console.log(resp))
//   .catch(err => console.log(err));


//------------------------------------------------

//ARGV CON YARGS
// ARGV

// const argv = require('yargs')
//   .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//       demand: true,
//       alias: 'b'
//     },
//     limite: {
//       alias: 'l',
//       default: 10
//     }
//   })
//   .help()
//   .argv;


//--------------------------------------------------------------------------

//ARGV CON YARGS
// PASANDO EL PRIMER VALOR DEL ARREGLO argv

//const { crearArchivo, saludo, listarTabla } = require('./multiplicar/multiplicar');

// const argv = require('yargs')
//   .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//       demand: true,
//       alias: 'b'
//     },
//     limite: {
//       alias: 'l',
//       default: 10
//     }
//   }).command('crear', 'Crear un archivo loquito', {
//     base: {
//       demand: true,
//       alias: 'b'
//     },
//     limite: {
//       alias: 'l',
//       default: 10
//     }
//   })
//   .help()
//   .argv;

//------------------AHORA EN VES DE USAR ESTO CREAMOS LA CARPETA
//---------------------config y ahi creamos yargs.js y pegamos todo este
//----------------------chorizo asqueroso


// aca mira cual es el prmer objeto del arreglo argv
// console.log(argv);

//guardamos ese objeto en la variable comando
// let comando = argv._[0];

// switch (comando) {
//   case 'listar':
//     listarTabla(argv.base, argv.limite);
//     break;
//   case 'crear':
//     crearArchivo(argv.base, argv.limite)
//       .then(resp => console.log(resp))
//       .catch(err => console.log(err));
//     break;
//   default:
//     console.log('Comando no reconocido');
// }


//----------------------------------------------------------------------------------

//IMPORTAMOS EL yargs.js

// const argv = require("./config/yargs").argv;
// const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let comando = argv._[0];

// switch (comando) {
//   case 'listar':
//     listarTabla(argv.base, argv.limite);
//     break;
//   case 'crear':
//     crearArchivo(argv.base, argv.limite)
//       .then(resp => console.log(resp))
//       .catch(err => console.log(err));
//     break;
//   default:
//     console.log('Comando no reconocido');
// }

//--------------------------------------------------------------------------
//importando colores a la consola
//IMPORTAMOS EL yargs.js

const colors = require('colors');
const argv = require("./config/yargs").argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(resp => console.log('Archivo creado: ', colors.rainbow(resp)))
      .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');
}