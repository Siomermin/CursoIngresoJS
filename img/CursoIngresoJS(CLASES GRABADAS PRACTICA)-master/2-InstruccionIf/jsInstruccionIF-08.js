function mostrar()
{
	//tomo la edad  
	
	let edadUsuario;
	let estadoCivilUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	estadoCivilUsuario = document.getElementById("estadoCivil").value;
 
	if ( edadUsuario >= 18 && estadoCivilUsuario == "Soltero"){ 
		alert("Es soltero y no es menor.");
	}
/*
	if ( !(edadUsuario <= 17 || estadoCivilUsuario != "Soltero") ){
		alert("Es soltero y no es menor");
	}
*/
}//FIN DE LA FUNCIÓN