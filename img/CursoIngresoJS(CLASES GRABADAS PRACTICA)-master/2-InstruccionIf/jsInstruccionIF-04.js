function mostrar()
{
	//tomo la edad  
	let edadUsuario;

	edadUsuario = parseInt(document.getElementById("txtIdEdad").value);

	if(edadUsuario >= 13 && edadUsuario <= 17){
		alert("Es adolescente");

	}
		
	// Si no estoy afuera del rango

	if( !(edadUsuario < 13 || edadUsuario > 17) ){
		alert("Es adolescente")
	}
	


}//FIN DE LA FUNCIÓN