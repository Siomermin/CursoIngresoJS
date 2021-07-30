/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function mostrar()
{
	let numero;
	let contadorPrimos = 0;

	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero)){
		numero = parseInt(prompt("Numero invalido. Ingrese otro numero"));
	}

	for(let i = 1; i <= numero; i++){

		if(numero % i == 0 ){
			contadorPrimos++;
			
		}
	
	} 
	if(contadorPrimos == 2){
		console.log(numero + " es primo");
	}
	else {
		console.log(numero + " no es primo");
	}
	

}//FIN DE LA FUNCIÓN