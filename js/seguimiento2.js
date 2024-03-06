// crear un array usando funciones tipo flecha, usar metodos de arreglos vistos y mostrar resultados siempre usando CallbackFn
//para cada arreglo minimo un metodo

//.Filter
let nombres = ["Carlos", "camilo", "cejota", "Cejota", "Cristian", "cain"]
let filtroLetras = nombres.filter(letraC=>{
    return letraC.startsWith("c")
})
console.log(filtroLetras)

// .map
let names = ["Cejota", "Estefania", "Messi", "Isaias"]
const Saludo = names.map(namess =>{
    return "Hola " + namess +", Bienvido al mundo de JavaScript";
})
console.log(Saludo);

// .reduce
let numbers = [1,2,3,4,5]
let productoNumeros = numbers.reduce((acumuladorr, vlrAct) =>{
    return acumuladorr * vlrAct;
} )
console.log(productoNumeros)

// .foreach
let elementos = ["Daniela", 2, 10.10, "Barcelona", 19, "Carlos"]
elementos.forEach(element => {
    console.log(element);
});