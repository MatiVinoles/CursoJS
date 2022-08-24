let color= "";
while (color !="rojo"){
    color=prompt ("Escribe un color (rojo para salir)","");
}

let instrumento = prompt ("Ingresa un instrumento de los siguientes: guitarra, bajo o bateria");
do {
    if (instrumento==="guitarra"){
    alert ("Me gusta la "+instrumento);
    instrumento = prompt ("Ingresa un instrumento de los siguientes: guitarra, bajo o bateria");
    }
    else if (instrumento==="bajo"){
    alert ("Me gusta el "+instrumento);
    instrumento = prompt ("Ingresa un instrumento de los siguientes: guitarra, bajo o bateria");
    }
    else {
        alert ("Tienes que seleccionar correctamente");
    }
} while (instrumento !== "bateria");
alert ("No me gusta la "+instrumento);
    
