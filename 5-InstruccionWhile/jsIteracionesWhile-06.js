
function mostrar()
{
	let numero;
	let acumulador = 0;
	let suma;
	let promedio;
	let i = 0;

	while(i < 5){ 
	numero = parseInt(prompt("Ingrese un numero"))
	acumulador= acumulador + numero;
	i++;
	}

	suma = acumulador;

	promedio = suma / 5;

	document.getElementById("txtIdSuma").value = suma;

	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN