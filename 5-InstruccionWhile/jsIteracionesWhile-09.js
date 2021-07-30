/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
let numero;
let seguir;
let maximo;
let minimo;
let flag = 1;

do{
    numero = parseInt(prompt("Ingrese un numero porfavor"));

    if(isNaN(numero)){
        numero = parseInt(prompt("Dato invalido, ingrese un numero porfavor")); 
    }

    if(flag){
        maximo = numero;
        minimo = numero;
        flag = 0;
    } 
    else 
    {
    if(numero > maximo){
        maximo = numero;
    }
    else if(numero < minimo){
        minimo = numero;
    }
    }
    seguir = prompt("Quiere seguir ingresando numero? 's' o 'n' ").toLowerCase();
    
}while(seguir == 's');

document.getElementById("txtIdMaximo").value = maximo; 
document.getElementById("txtIdMinimo").value = minimo; 


}//FIN DE LA FUNCIÓN

// ESTRATEGIA DE RESOLUCION.
// 1- Declaracion de variables --> numero/maximo/minimo/seguir.
// 2- Generar un bucle del tipo mientras el usuario quiera (do-while).
// Cosas que tengo que hacer dentro del bucle (mas de una vez).
// 2.1- Pido un numero.
// 2.2- Valido el dato (que sea un numero).
// 2.3- Me fijo si es la primera vez.
// 2.3.1- Si es la primera vez --> asigno el numero a las variables maximo y minimo.
// 2.3.2- Si no es la primera vez  --> comparo
// 2.3.3- Me fijo si el numero si el nuevo maximo o nuevo minimo
//  de ser asi actualizo la variable maximo o minimo segun corresponda.
// ----------------------------------------------------------------------------------
// Despues del bucle
// 3- Muestro los resultados.

/* Otra forma de usar flag.

if (flag || numero > maximo){
    maximo = numero;
}
if(flag || numero < minimo){
    minimo = numero;
    flag = 0;
}

*/