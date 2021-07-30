function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value)

	if ( !(edadUsuario >= 13 && edadUsuario <= 17) ){ // Si estoy dentro del rango
		alert("No sos adolescente");
	}

	if(edadUsuario < 13 || edadUsuario > 17){ // Si no estoy fuera del rango
		alert("Sos adolescente");
	}

}//FIN DE LA FUNCIÓN