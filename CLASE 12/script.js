function saludar(){
    console.log("Hola")
} //declaracion de una funcion

//las funciones tienen que hacer 1 funcion
function sumar(num1,num2){
    console.log(num1+num2)
}

function restar(num1,num2){
    return num1-num2
}




saludar() //invocacion de una funcion
//parametros= datos
sumar(1,2)
restar(10,5)

function mostrarPorConsola(string,dato){
    console.log(string + dato)
}

mostrarPorConsola("",restar(10,5))
mostrarPorConsola("el resultado es ",restar(18,5)) //callback invocar a otra funcion

function multiplicar(a,b){
    return `el resultado de la multiplicacion entre ${a} y ${b} es ${a*b}`
    //template literal
}

mostrarPorConsola(multiplicar(2,2))
