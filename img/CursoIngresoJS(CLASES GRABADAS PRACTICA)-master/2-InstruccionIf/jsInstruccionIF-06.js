function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);
	if(edadUsuario >= 65){
		alert("Sos anciano")
	}
	else if(edadUsuario >= 18){
		alert("Sos mayor de edad");
	}
	else if (edadUsuario >= 13 && edadUsuario <= 17){
		alert("Sos adolescente");
	}
	else { 
		alert("Sos un niño");
	}

	


}//FIN DE LA FUNCIÓN