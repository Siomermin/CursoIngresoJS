/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	nombre = document.getElementById("txtIdNombre").value; // Buena practica

	//nombre = txtIdNombre.value; // Funciona pero no es recomendable

	alert(nombre);

	document.getElementById("txtIdNombre").value = "";
}


