/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;

	let nuevoSueldo;

	let aumento;
	// Para calcular el nuevo sueldo deberia sumarle el sueldo original al aumento
	// El calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y luego lo divido por 100.

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;

	
	







}
