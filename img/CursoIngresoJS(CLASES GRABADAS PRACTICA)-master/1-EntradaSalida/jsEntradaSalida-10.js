/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;

	let nuevoImporte;

	let aumento;
	// Para calcular el nuevo importe deberia sumarle el sueldo original al aumento
	// El calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y luego lo divido por 100.

	importe = parseFloat(document.getElementById("txtIdImporte").value);

	aumento = importe * 25 / 100;

	nuevoImporte = importe + aumento;
	
	document.getElementById("txtIdResultado").value = nuevoImporte;

}
