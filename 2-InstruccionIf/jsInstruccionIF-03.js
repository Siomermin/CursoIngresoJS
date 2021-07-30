function mostrar()
{
	//tomo la edad  
	
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if( edadUsuario >= 18){ // Si es mayor de edad
		alert("Sos mayor de edad")
	} else {
		alert("Sos menor de edad")
	}

	if( edadUsuario < 18){ // Si es menor de edad
		alert("Sos menor de edad")
	} else {
		alert("Sos mayor de edad")
	}

}//FIN DE LA FUNCIÓN