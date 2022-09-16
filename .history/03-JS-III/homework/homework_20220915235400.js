// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
  // Imprime la suma de los números del 1 al 10
  // Pista: usa un acumulador
  // Tu código:
  let suma = 0;
  let n = 10;
  for (let i = 1; i <= n; i++) {
    suma = suma + i;
  }
  return suma;
}

function encuentraPares(array) {
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  let pares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

function elevaAlCuadrado(array) {
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  let arrayAlCuadrado = [];
  for (let i = 0; i < array.length; i++) {
    arrayAlCuadrado.push(array[i] ** 2);
  }
  return arrayAlCuadrado;
}

function sumaArray(array) {
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let sumaElementos = 0;
  for (let i = 0; i < array.length; i++) {
    sumaElementos = sumaElementos + array[i];
  }
  return sumaElementos
}

function numeroDigitos(num) {
  // Devuelve el número de dígitos de un número dado
  // Tu código:
 return 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  imprimirSumaNumeros,
  encuentraPares,
  elevaAlCuadrado,
  sumaArray,
  numeroDigitos,
};
