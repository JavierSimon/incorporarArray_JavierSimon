// Piedra papel o tijera
alert("bienvenido al juego piedra papel o tijera, Eija una opcion: ")

let arrayEleccion = [
    {piedra: "piedra"},
    {papel: "papel"},
    {tijera: "tijera"}
]

let largoArray = arrayEleccion.length
let cpu = Math.round(Math.random()*(largoArray-1))
let jugar = "si"
let eleccion = ""

//funciones

let rivalCpu = () => {
    
    if (cpu === 0) {
        cpu = arrayEleccion[0]["piedra"]
    } 
    else if (cpu === 1) {
        cpu = arrayEleccion[1]["papel"]
    } 
    else if (cpu === 2){
        cpu = arrayEleccion[2]["tijera"]
    }

    return cpu
}


let usuario = () => {
    
    eleccion = prompt("Piedra, Papel o Tijera").toLowerCase()
        
        if (eleccion === "piedra") {
            eleccion = arrayEleccion[0]["piedra"]
        } 
        else if (eleccion === "papel") {
            eleccion = arrayEleccion[1]["papel"]
        } 
        else if (eleccion === "tijera") {
            eleccion = arrayEleccion[2]["tijera"]
        } 
        else {
            eleccion = prompt("no elejiste ninguna opción, vuelve a jugar")
        }

        return eleccion
    }


let versus = () => {

    if (cpu==eleccion) {
        alert (`Es un empate, tu elegiste ${eleccion} y la cpu ${cpu}`)
    } 
    else if (cpu === "piedra" && eleccion === "papel"){
        alert (`Has ganado tu elegiste ${eleccion} y la cpu ${cpu}`)
    } 
    else if (cpu === "papel" && eleccion === "tijera") {
        alert (`Has ganado tu elegiste ${eleccion} y la cpu ${cpu}`)
    } 
    else if (cpu === "tijera" && eleccion === "piedra") {
        alert (`Has ganado tu elegiste ${eleccion} y la cpu ${cpu}`)
    } 
    else if (cpu === "piedra" && eleccion === "tijera" ) {
        alert (`Has perdido tu elegiste ${eleccion} y la cpu ${cpu}`)
    } 
    else if (cpu === "papel" && eleccion === "piedra" ) {
        alert (`Has perdido tu elegiste ${eleccion} y la cpu ${cpu}`)
    } 
    else if (cpu === "tijera" && eleccion === "papel" ) {
        alert (`Has perdido tu elegiste ${eleccion} y la cpu ${cpu}`)
    }
}

//Juego

while(jugar === "si") {

    rivalCpu()
    usuario()
    versus()

    jugar = prompt("¿Quiere volver a jugar: Si/No o ingrese cualquier tecla").toLowerCase()
}


