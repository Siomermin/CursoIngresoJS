/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreUsuario;

	let edadUsuario;

	nombreUsuario = document.getElementById("txtIdNombre").value;
	edadUsuario = document.getElementById("txtIdEdad").value;

	alert("Usted se llama " + nombreUsuario + " Y tiene " + edadUsuario +" años");


}

