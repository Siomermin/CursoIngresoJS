function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);


	// Condicion es verdadera para los valores de edad que estan por debajo o por encima del rango del rango [13,17]
	// Pregunto si estoy fuera del rango
	if(	edadUsuario	< 13 || edadUsuario > 17 ){
		alert("No es adolescente");
	}

	// Pregunto si no estoy dentro del rango
	if( !(edadUsuario >= 13 || edadUsuario <= 17) ){
		alert("No es adolescente");
	}


}//FIN DE LA FUNCIÓN