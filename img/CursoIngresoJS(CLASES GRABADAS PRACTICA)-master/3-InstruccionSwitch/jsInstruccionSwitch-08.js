function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch (destino){
		case "Ushuaia":
		case "Bariloche":
			alert("Hace frio");
			break;
			
		case "Mar del plata":
		case "Cataratas":
				alert("Hace calor");
				break;

}
}//FIN DE LA FUNCIÓN