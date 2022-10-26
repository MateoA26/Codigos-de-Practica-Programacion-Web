let edad= parseFloat(prompt("ingrese su edad"))
console.log(typeof(edad))

function condicional(edad){
    if (edad>18){
        alert("puede ingresar")
    }else{
        alert("es menor de edad")
    }
}

condicional(edad)

//                    ASI SERIA EN PYTHON
// if parametro>18:
//      print("puede jugar")
//  else:
//      print("no puede jugar")


edad>18 ? console.log("puede pasar"): console.log("no puede pasar")

function IMC(peso,altura){
    let indiceMasaCorporal =peso/(altura**2)
    if(indiceMasaCorporal<18.5){
        console.log("su IMC es menor al normal")
    }else if(indiceMasaCorporal<25){
        console.log("su IMC es normal")
    }else if(indiceMasaCorporal<30){
        console.log("su IMC es mayor al normal")
    }else{
        console.log("Su IMC es de obesidad")
    }

}

IMC(70,189)

function queHagoDias(dia){
    switch(dia){
        case Monday:
            console.log("Party (Lunes)")
            break
        case Tuesday:
            console.log("Party (Martes)")
            break
        case Wednesday:
            console.log("Party (Miercoles)")
            break
        default:
            console.log("error en el ingreso")
    }
}




/*
1) Dados 3 numeros por parametros, determinar cual es el mayor
2) Dado un numero, determinar si es par o impar.
3) Dado un numero determinar si es primo o no.
4) Dada una serie de 6 numeros , mostrar los que son pares y los que son impares 
(deben estar en dos array distintos)
5) MINIJUEGO: Dado un numero aleatorio, pedirle un numero al usuario y decrile si es mayor o menor a dicho numero
let numeroRandom= parseInt (Math.random()*10)

*/