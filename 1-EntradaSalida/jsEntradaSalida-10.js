/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importeUsuario;
	let descuento;
	let importeFinal;

	importeUsuario = parseInt(document.getElementById("txtIdImporte").value);

	descuento = importeUsuario * .25;

	importeFinal = importeUsuario - descuento;

	document.getElementById("txtIdResultado").value = importeFinal;	
}
