/*
Enunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;
/*
	switch (destino){
		case "Bariloche":
			alert(destino + " Se encuentra al Oeste del pais");
			break;
		case "Cataratas":
			alert( destino + " Se encuentra al Norte del pais");
			break;
		case "Mar del plata":
			alert( destino + " Se encuentra al Este del pais");
			break;
		case "Ushuaia":
			alert( destino + " Se encuentra al Sur del pais");
	}
*/

	if(destino == "Bariloche"){
		alert(destino + " Se encuentra al Oeste del pais");
	}
	else if(destino == "Cataratas"){
		alert( destino + " Se encuentra al Norte del pais");
	}
	else if(destino == "Mar del plata"){
		alert( destino + " Se encuentra al Este del pais");
	}
	else{ 
		alert( destino + " Se encuentra al Sur del pais");
	}
	
}//FIN DE LA FUNCIÓN