/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	// Le pido al usuario.
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;

	let temperaturaMax; // a
	let nombreMasTemp; // a

	let contadorViudosM = 0; // b

	let contadorViudos = 0; // c
	let contadorSolteros = 0; // c // e
	let acumuladorEdadS = 0; // e

	let contadorViejosTemperatura = 0; // d

	let flag = 1;
	let seguir;
	let promedio = 0;


    do{ // bucle do - while ( hasta que el usuario quiera).

		// Pido nombre.
		nombre = prompt("Ingrese el nombre del usuario").toLowerCase();
		 
		// Pido y valido edad. Mayor a 0.
		edad = parseInt(prompt("Ingrese edad del pasajero"));
		 while(isNaN(edad) || edad < 0){
			edad = parseInt(prompt("Ingrese edad del pasajero"));
		 }

		// Pido y valido sexo. 'm' o 'f'.
		sexo = prompt("Ingrese sexo. 'm' o 'f' ").toLowerCase();
		 while(!(sexo == 'm' || sexo == 'f')){
			sexo = prompt("Sexo invalido. Ingrese 'm' o 'f' ").toLowerCase();
		 }

		// Pido y valido estado civil. "soltero" "casado" "viudo".
		 estadoCivil = prompt("Ingrese estado civil. 'Soltero' , 'Casado' o 'Viudo' ").toLowerCase();
		 while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")){ 
		 estadoCivil = prompt("Estado civil invalido. Ingrese 'Soltero' , 'Casado' o 'Viudo' ").toLowerCase();
		 }
		 // Pido y valido temperatura. entre 30 y 45.
		 temperatura = parseFloat(prompt("Ingrese su temperatura corporal , entre 30 y 45 grados"));
		  while(isNaN(temperatura) || temperatura < 30 || temperatura > 45){
			temperatura = parseFloat(prompt("Temperatura invalida.Ingrese su temperatura corporal entre 30 y 45 grados."));
		  }


		  if(flag == 1 || temperatura > temperaturaMax ){ // a) Para saber el maximo de temperatura uso la variable flag para entrar con el primer valor. Despues solo comparo con la otra condicion.
			  temperaturaMax = temperatura;
			  nombreMasTemp = nombre;
			  flag = 0;
		  }

		  if(estadoCivil == "viudo" && edad >= 18){ // b) Identifico el estado civil y la edad y cuento los mayores de edad y viudos.
			  contadorViudosM++;
		  }

		  if(sexo == 'm' && estadoCivil == "viudo"){ // c) identifico si es 'm' y viudo y lo cuento.
			  contadorViudos++;
		  }else if(sexo == 'm' && estadoCivil == "soltero"); // c) Identifico si es 'm' y soltero y lo cuento.
		      contadorSolteros++;

		  if(edad > 60 && temperatura > 38){ // d) Identifico a las personas de mas de 60 anios y mas de 38 de temp y los cuento.
			  contadorViejosTemperatura++;
		  }

		  
		  if(sexo == 'm' && estadoCivil == "soltero"){ // e) para sacar el promedio de edad de 'm' solteros, necesito un contador que ya tengo el punto c) y ahora agrego un acumulador de edad.
			  acumuladorEdadS += edad;
		  }



	seguir = prompt("Quiere ingresar otro pasajero?").toLowerCase(); // pregunto si quiere seguir con el bucle.
	}while(seguir == 's');

	promedio = acumuladorEdadS / contadorSolteros; // Calculo el promedio de edad de los 'm' solteros.


	// Muestro al usuario.
	document.write("a)La persona con mas temperatura se llama " + nombreMasTemp + " y tiene "+ temperaturaMax +" grados de temperatura <br>");
	document.write("b) Mayores de edad viudos : " + contadorViudosM + "<br>");
	document.write("c) La cantidad de hombres solteros es " + contadorSolteros + " y la cantidad de viudos es " + contadorViudos + "<br>");
	document.write("d) La cantidad de hombres mayores a 60 con temperatura +38 es " + contadorViejosT + "<br>");

	// Me fijo si no ingresaron ningun 'm' soltero asi no calculo el promedio de algo invalido.
	if(isNaN(promedio)){
		promedio = 0; // anulo el promedio ya que no ingresaron a nadie.
	}
	document.write("e) El promedio de edad entre los hombres solteros es de " + promedio + " anios <br>");
}
