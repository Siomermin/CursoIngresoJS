function mostrar()
{
	let numero;
	let contadorDivisores = 0;

	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero)){
		numero = parseInt(prompt("Numero invalido. Ingrese otro numero"));
	}

	for(let i = 1; i <= numero; i++){

		if(numero % i == 0){
			console.log("Divisor : " + i);
			contadorDivisores++;
			
		}
		console.log("La cantidad de divisores es " + contadorDivisores);
	}


}//FIN DE LA FUNCIÓN