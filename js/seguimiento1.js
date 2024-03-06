// SEGUIMIENTO 1
// crear 3 arrow function
// 1. recibe cero parametro
// 2. recibe 1 parametro
// 3. recibe mas de 2
// usar metodos propios de js, minimo strings y math
// =========================================================================================

// array que no recibe parámetros
const sinParametro = () => {
    console.log("Número aleatorio entre 0 y 1: " + Math.random());
};
sinParametro();

// array que recibe un parámetro
const unParametro = (parametro) => {
    console.log("El cuadrado de " + parametro + " es: " + Math.pow(parametro, 2));
};
unParametro(5);

// array que recibe más de dos parámetros
const MasDe2Parametros = (...parametros) => {
    let suma = 0;
    parametros.forEach(parametro => {
        suma += parametro;
    });
    console.log("La suma de los parámetros es: " + suma);
};
const arrayParametros = [2, 3, 4, 5];
MasDe2Parametros(...arrayParametros);

// ===================================================================================

//FUNCION QUE RECIBE UN SOLO PARAMETRO PARA USARSE CON MATH
const calcularRaizCuadrada = (numero) => {
    return Math.sqrt(numero);
};
const numero = 81;
console.log("La raíz cuadrada de " + numero + " es: " + calcularRaizCuadrada(numero));

//ESTA FUNCION RECIBE UNA CADENA COMO PARAMETRO Y CUENTA SUS LETRAS
const contarLetras = (cadena) => {
    return cadena.length;
};

const mensaje = "JavaScript is Good";
console.log("La cantidad de caracteres en '" + mensaje + "' es: " + contarLetras(mensaje));
