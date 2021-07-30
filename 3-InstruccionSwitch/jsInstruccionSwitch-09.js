/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	let destino;
	let estacion;
	let precioBase = 15000;
	let precioFinal;
	let diezPorciento = precioBase * 1.10;
	let veintePorciento = precioBase * 1.20;

	estacion = document.getElementById("txtIdEstacion").value;

	destino = document.getElementById("txtIdDestino").value;
/*
	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){ 
				alert("Su viaje a " + destino + " tiene un valor de " + (precioBase + veintePorciento));
				break;
			}
			else if(destino == "Cataratas" || destino == "Cordoba"){
				alert("Su viaje a " + destino + " tiene un valor de " + (precioBase - diezPorciento) + " pesos");
			}
			else
			{
				alert("Su viaje a " + destino + " tiene un valor de " + (precioBase - veintePorciento) + " pesos");
			}
	}
*/


	switch(destino){
		case "Bariloche":
			if(estacion == "Invierno"){
			precioFinal = precioBase + veintePorciento;
			
			else if(estacion == "Verano"){
			precioBase - veintePorciento
			}
			else
			{
			precioBase + diezPorciento
			}
			break;
		case "Cataratas":
			if(estacion == "Invierno"){
				 (precioBase - diezPorciento));
				}
				else if(estacion == "Verano"){
					 (precioBase + diezPorciento));
				}
				else
				{
					 (precioBase + diezPorciento));
				}
			break;
		case "Cordoba":
			if(estacion == "Invierno"){
				 (precioBase - diezPorciento));
				}
				else if(estacion == "Verano"){
					 (precioBase + diezPorciento));
				}
				else
				{
					 precioBase);
				}
			break;
		case "Mar del plata":
			if(estacion == "Invierno"){
				 (precioBase - veintePorciento));
				}
				else if(estacion == "Verano"){
					 (precioBase + veintePorciento));
				}
				else
				{
					 (precioBase + diezPorciento));
				}
			break;

	}
		alert("Su viaje a " + destino + " tiene un valor de $" + precioFinal);
}//FIN DE LA FUNCIÓN