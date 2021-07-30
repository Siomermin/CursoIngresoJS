/*
Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{

	let repeticiones;
	let mensaje = "Hola UTN FRA";

	repeticiones = parseInt(prompt("Ingrese un numero"));

	while(isNaN(repeticiones) || repeticiones <= 0){
		repeticiones = parseInt(prompt("Numero invalido, Ingrese otro"));
	}
	
	for(let i = 0; i < repeticiones; i++){
		console.log(mensaje);
	}

	




}//FIN DE LA FUNCIÓN