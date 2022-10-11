//objetos literales

let profesor1={
    nombre:"Mateo",
    apellido: "Ambroggio",
    rol: "Alumno",
    Edad: 18,
    enActividad:true,

    //par clave:valor,
}

console.log(profesor1.nombre)


let usuarioInstagram={
    mail:"",
    contraseña:"",
    usuario:"",
    telefono:"",
    nombre:"",
    id:"",
}

console.table(profesor1)


//Arrays

//arrays es con const

const NOMBRES=["Esteban","Mateo", "Lucas", "Pedro"]

console.log(NOMBRES)
console.log(NOMBRES[1])
console.log(NOMBRES[0])

const CARRITO=[]
console.log(CARRITO)
CARRITO.push("hola")
console.log(CARRITO)
CARRITO.push("chau")
console.log(CARRITO)
CARRITO.pop() //elimina el ultimo que entro
console.log(CARRITO) //LAST IN- FIRST OUT

CARRITO.unshift("Unshift") //agrega al principio
console.log(CARRITO)

CARRITO.shift() //elimina el primer elemento
console.log(CARRITO) //FIRST IN- FIRST OUT

const ARRAYDEVARIASCOSAS=["Esteban", 29, true]
console.log(ARRAYDEVARIASCOSAS)

//si veo un -1 es que no existe

let EQUIPOS=["BOQUITA","RIVER","BOCA"]
console.log(EQUIPOS.indexOf("BOQUITA"))//muestra el primer index de boquita

// push-pop
// shift-unshift
// splice-slice
// join - toString
// indexOf- lastIndexOf - includes