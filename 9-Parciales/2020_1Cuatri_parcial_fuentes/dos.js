/*
  Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
a)Tipo validad("arena";"cal";"cemento")
b)Cantidad de bolsas,
c)Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/

function mostrar()
{
  // Le pido al usuario dentro del bucle.
  let tipo;
  let cantidad;
  let precio;
  let seguir;

  
  let importeBruto = 0; // a)
  let importe; // a) Lo uso para calcular el importe bruto.

  let importeNeto; // b)
  let descuento; // b)

  let acumBolsas = 0; // a) b) Lo uso para calcular el importe y despues para ver si corresponde descuento.

  let mayorPrecio; // f)
  let mayorTipo;   // f)

  let acumuladorArena = 0; // d)
  let acumuladorCemento = 0; // d)
  let acumuladorCal = 0; // d)
  let tipoMaxBolsas; // d)
  let cantMaxBolsas; // d)

  let flag = 1;


do{ // Bucle do - while ( Hasta que el usuario quiera ).

   // a) Pido y valido tipo de producto.
  tipo = prompt("Ingrese el tipo de producto. 'arena' , 'cal' o 'cemento' ").toLowerCase();
    while(!(tipo == "arena" || tipo == "cal" || tipo == "cemento")){
      tipo = prompt("Tipo de producto invalido. Ingrese 'arena' , 'cal' o 'cemento' ").toLowerCase();
    }
   // b) Pido y valido cantidad de productos.
  cantidad = parseInt(prompt("Ingrese la cantidad de productos, minimo 1"));
    while(isNaN(cantidad) || cantidad <= 0){
      cantidad = parseInt(prompt("Cantidad invalida.Ingrese la cantidad de productos, minimo 1"));
    }
    // c) Pido y valido precio de los productos.
    precio = parseInt(prompt("Ingrese el precio del producto, minimo 1"));
    while(isNaN(precio) || precio <= 0){
      cantidad = parseInt(prompt("Precio invalido.Ingrese el precio del producto, minimo 1"));
    }

  importe = cantidad * precio; // calculo cantidad de bolsas * precio de cada una para saber el importe total bruto.
  importeBruto += importe; 
  acumBolsas += cantidad;      // acumulador de bolsas.
   
    if( tipo == "arena"){      //  d) Identifico el tipo de producto , asi se cual es el que tiene mas bolsas y las acumulo.
      acumuladorArena += cantidad;
    } else if(tipo == "cal"){ 
      acumuladorCal += cantidad;
    } else {
      acumuladorCemento += cantidad;
    }


 if(flag == 1 || precio > mayorPrecio){ // f) Para saber el tipo mas caro, uso la solucion del maximo. guardo con un flag el primer ingreso y despues comparo.
  mayorPrecio = precio;
  mayorTipo = tipo;
  flag = 0;
 }

  seguir = prompt("Quiere seguir ingresando productos? Responda 's' o 'n' ").toLowerCase(); //  pregunto si quiere que siga el bucle.
}while(seguir == 's'); 

// --------------------------------------------------------------------------------------------------------------
// Fin del bucle.


if( acumBolsas > 10){                // Calculo el descuento segun cantidad de bolsas que acumule.
  descuento = importeBruto * .10;

}
else if( acumBolsas > 30){
  descuento = importeBruto * .25;
}
else{
  descuento = 0;
}


importeNeto = importeBruto - descuento; //  importe NETO es cuando ya le aplique el descuento al importe bruto.


if(acumuladorArena > acumuladorCemento && acumuladorArena > acumuladorCal){  // Forma correcta de saber cual es el tipo con mas bolsas.
  tipoMaxBolsas = "arena";
  cantMaxBolsas = acumuladorArena;
} 
else if(acumuladorCal >= acumuladorArena && acumuladorCal > acumuladorCemento){
  tipoMaxBolsas = "cal";
  cantMaxBolsas = acumuladorCal;
} else {
  tipoMaxBolsas = "cemento";
  cantMaxBolsas = acumuladorCemento;
}

// MOSTRAR AL USUARIO.
document.write("a) El importe total a pagar es $" + importeBruto + " pesos <br>");
if(descuento > 0){ 
document.write("b) El importe total a pagar con descuento es $" + importeNeto + " pesos <br>");
}
document.write("c) Tipo con mas cantidad de bolsas es " + tipoMaxBolsas + " con " + cantMaxBolsas + " bolsas<br>");
document.write("d) Tipo mas caro es " + mayorTipo + " Precio: $" + mayorPrecio + " pesos <br>");

}
/*
1- Declarar variables. 
 cosas que le pedimos al usuario --> tipo / cantidad / precio / seguir.
 descuento / imprteBruto / importeNeto / acumBolsas / mayorPrecio / mayorTipo
 acumuladorBC / acumuladorBA / acumuladorBC / tipoMasBolsas / cantBolsas

 2- Genero un bucle del tipo mientras el usuario quiera.

 3- Dentro del bucle. (cosas que se repiten por cada producto comprado).

 3.1 - Pido y valido el tipo.
 3.2 - Pido y valido cantidad ( numero positivo).
 3.3 - Pido y valido precio ( numero positivo).

 3.4 - Acumular cantidad de bolsas.
 3.5 - Acumular importeBruto.

 3.6 - Me fijo el tipo de producto y acumulo la cantidad de bolsas de cada uno.

 3.7 - Para el primer producto guardo el tipo y precio.

 ---------------------------------------------------

 Despues del bucle.

 Me fijo que descuento corresponde ( de acuerdo al acumulador de bolsas).
 Calculo el descuento.

 Calculo el importe neto.

 Me fijo cual es el mayor acumulador de bolsas.




*/