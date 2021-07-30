/*
Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	let estacion;
	let destino;
	let seViaja = "Se viaja";
	let noSeViaja = "No se viaja";

	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	if(estacion == "Invierno"){
		switch(destino){
			case "Bariloche":
				alert(seViaja);
				break;
			case "Cataratas":
			case "Cordoba":
			case "Mar del plata":
				alert(noSeViaja);
				break;
		}
	}

	if(estacion == "Verano"){
		switch(destino){
			case "Bariloche":
			case "Cordoba":
				alert(noSeViaja);
				break;
			case "Cataratas":
			case "Mar del plata":
				alert(seViaja);
				break;
		}
	}

	if(estacion == "Otoño"){ 
		switch(destino){
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
				alert(seViaja);
				break;
		}
	}
	
	if(estacion == "Primavera"){ 
		switch(destino){
			case "Bariloche":
				alert(seViaja);
				break;
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":
				alert(noSeViaja);
				break;
		}
	}



}//FIN DE LA FUNCIÓN