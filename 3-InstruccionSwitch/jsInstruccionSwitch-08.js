/*
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino){   
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio en " + destino);
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor en " + destino);
			break;
	}

}//FIN DE LA FUNCIÓN