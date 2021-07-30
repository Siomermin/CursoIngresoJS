/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	let respuesta;
	let numero;
	let acumulador = 0;
	let contador = 0;
	let suma;
	let promedio;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Entrada invalida, ingrese un numero porfavor"));
		}
		acumulador = acumulador + numero;
		contador++;
		respuesta = prompt("Quiere ingresar otro numero? 's' o 'n' ").toLowerCase();

}while(respuesta == 's');

	suma = acumulador;
	promedio = suma / contador;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN