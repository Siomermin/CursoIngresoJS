function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if( edadUsuario >= 18) {
		alert("Usted es mayor de edad");
	} else {
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN