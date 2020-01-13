const fs = require('fs');
const colors = require('colors');

let data = '';


let listarTabla = (base, limite) => {

  console.log("=======================".green);
  console.log(`=======tabla de ${base}`.rainbow);
  console.log("=======================".trap);

  for (let i = 1; i <= limite; i++) {
    console.log((`${base} * ${i} = ${base * i}`));
  }

}


let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`EL valor introducido ${base} no es un numero`);
    } else {
      for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
      }
      fs.writeFile(`tablas/tabla=${base}-${limite}.txt`, data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(`El archivo tabla-${base} hasta ${limite} ha sido creado`);
        }
      });
    }
  });
}
let saludo = (nombre) => {
  return new Promise((resolve, reject) => {
    if (nombre === 'diablito') {
      resolve(nombre);
    } else {
      reject("vos no sos el diablito loquito");
    }
  })
}

//PUEDO EXPORTAR ASI 

module.exports = {
  crearArchivo,
  saludo,
  listarTabla
}

// O ASI 

// module.exports = {
//   funcion1: crearArchivo,
//   funcion2: saludo
// }