/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; // Reservo espacio en memoria para guardar el nombre del usuario.

	nombre = prompt("Ingrese su nombre"); // Guardo en la variable nombre el texto que escribio en usuario dentro de la ventana prompt.

	document.getElementById("txtIdNombre").value = nombre; // Copio el nombre que se guardo en la variable dentro de la caja de texto embebida en la pagina HMTML.



}

