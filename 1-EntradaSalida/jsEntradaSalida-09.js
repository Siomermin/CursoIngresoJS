/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldoUsuario
	let aumento;
	let sueldoFinal;

	sueldoUsuario = parseInt(document.getElementById("txtIdSueldo").value);

	aumento = sueldoUsuario * .1;

	sueldoFinal = sueldoUsuario + aumento;

	document.getElementById("txtIdResultado").value = sueldoFinal;

	
}
