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
	let destino;
	let estacion;
	let resultado;

	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				resultado = "Se viaja";
			}
			else 
			{
				resultado = "No se viaja"
			}
		break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				resultado = "Se viaja";
			}
			else
			{
				resultado = "No se viaja";
			}
		break;
		case "Otoño":
			resultado = "Se viaja";
			break;
		
		case "Primavera":
			if(destino != "Bariloche"){
				resultado = "Se viaja";
			}
			else
			{
				resultado = "No se viaja";
			}
	}
	alert(resultado);
}//FIN DE LA FUNCIÓN