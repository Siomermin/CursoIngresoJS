/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(prompt("Ingrese un numero entre 0 y 9"));

	while(!(numero >= 0 && numero <= 9)){

		numero = parseInt(prompt("Numero incorrecto, ingrese el numero otra vez."));
	}
	
	document.getElementById("txtIdNumero").value = numero;
}//FIN DE LA FUNCIÓN