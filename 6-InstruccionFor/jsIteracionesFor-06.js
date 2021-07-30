/*
Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	let numero;
	let cantidadPares = 0;

	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero)){
		numero = parseInt(prompt("Numero invalido. Ingrese otro numero"));
	}

	for(let i = 1; i <= numero; i++){

		if(i % 2 == 0){
			console.log("Numero par : " + i);
			cantidadPares++;
			console.log("La cantidad de pares es " + cantidadPares);
		}
		
	}


}//FIN DE LA FUNCIÓN