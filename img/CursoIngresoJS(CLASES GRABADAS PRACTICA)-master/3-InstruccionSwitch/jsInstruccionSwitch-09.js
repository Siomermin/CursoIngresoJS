/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let estacion;
	let destino;
	let tarifaBase = 15000;
	let diezPorciento = tarifaBase * 10 / 100;
	let veintePorciento = tarifaBase * 20 / 100;
	let aumento10 = tarifaBase + diezPorciento;
	let descuento10  = tarifaBase - diezPorciento;
	let aumento20 = tarifaBase + veintePorciento;
	let descuento20 = tarifaBase - veintePorciento;


	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;

	if(estacion == "Invierno"){
		switch(destino){
			case "Bariloche":
				alert("Su viaje a " + destino + " Le costara $" + aumento20 + " pesos");
				break;
			case "Cataratas":
			case "Cordoba":
				alert("Su viaje a " + destino + " Le costara $" + descuento10 + " pesos");
				break;
			case "Mar del plata":
				alert("Su viaje a " + destino + " Le costara $" + descuento20 + " pesos");
				break;
		}
	}

	if(estacion == "Verano"){
		switch(destino){
			case "Bariloche":
				alert("Su viaje a " + destino + " Le costara $" + descuento20 + " pesos");
				break;
			case "Cataratas":
			case "Cordoba":
				alert("Su viaje a " + destino + " Le costara $" + aumento10 + " pesos");
				break;
			case "Mar del plata":
				alert("Su viaje a " + destino + " Le costara $" + aumento20 + " pesos");
				break;
		}
	}

	if(estacion == "Otoño" || estacion == "Primavera"){
		switch(destino){
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":
				alert("Su viaje a " + destino + " Le costara $" + aumento10 + " pesos");
				break;
			case "Cordoba":
				alert("Su viaje a " + destino + " Le costara $" + tarifaBase + " pesos");
				break;
		}
	}
	

	


	
}//FIN DE LA FUNCIÓN