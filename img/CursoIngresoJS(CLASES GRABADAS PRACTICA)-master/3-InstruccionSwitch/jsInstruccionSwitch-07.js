/*
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Ushuaia":
			alert("Se encuentra al sur");
			break;
		case "Cataratas":
			alert("Se encuentra al norte");
			break;
		case "Mar del plata":
			alert("Se encuentra al este");
			break;
		case "Bariloche":
			alert("Se encuentra al oeste");
			break;
	}




}




//FIN DE LA FUNCIÓN