function mostrar()
{
	//tomo la edad  
	
	let edadUsuario;
	let estadoCivilUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	estadoCivilUsuario = document.getElementById("estadoCivil").value;

	if ( edadUsuario < 18 && estadoCivilUsuario != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}		



	


}//FIN DE LA FUNCIÓN