function mostrar()
{
	let numero = 0;


	for(; ;){
		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero)){
			numero = parseInt(prompt("Dato invalido. Ingrese otro numero"));
		}

		if(numero == 9){
			break;
		}

		alert("Usted ingreso el numero " + numero);
	}

	


}//FIN DE LA FUNCIÓN