/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio, (for)
de cada una debo obtener los siguientes datos:
a)el tipo (validar "barbijo" , "jabón" o "alcohol") ,
b)el precio (validar entre 100 y 300),
c)la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
d)la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
e) Del más barato de los alcohol, la cantidad de unidades y el fabricante
f) Del tipo con mas unidades, el promedio por compra
g) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
    // Le pido al usuario
 let tipo;
 let precio;
 let cantidad;
 let marca;
 let fabricante;

 // dentro del bucle
 let precioMinAl;
 let acumuladorAlBarato;
 let fabAlBarato;
 let flag = 1;

 let contadorA = 0;
 let contadorB = 0;
 let contadorJ = 0;
 let maxUnidades;
 let acumuladorB = 0;
 let acumuladorA = 0;
 let acumuladorJ = 0;
 let promedio;

 
 // Bucle for
for(let i = 1; i <= 5; i++){

// Pido y valido datos.

    // a) Tipo de producto, si es barbijo, jabon o alcohol.
tipo = prompt("Ingrese el tipo de producto. 'barbijo' , 'jabon' o 'alcohol' ").toLowerCase();
    while(!(tipo == "barbijo" || tipo == "jabon" || tipo == "alcohol")){
        tipo = prompt("Tipo de producto invalido, ingrese otra vez porfavor. 'barbijo' , 'jabon' o 'alcohol' ").toLowerCase();
    }

    // b) El precio del producto, entre 100 y 300.
precio = parseInt(prompt("Ingrese el precio. Entre 100 y 300"));
    while(isNaN(precio) || precio < 100 || precio > 300 ){
        precio = parseInt(prompt("Precio invalido. Ingrese precio entre 100 y 300"));
    }

    // c) Cantidad de productos, entre 1 y 1000.
cantidad = parseInt(prompt("Ingrese la cantidad de productos. Entre 1 y 1000"));
    while(isNaN(cantidad) || cantidad <= 0 || cantidad > 1000){
        cantidad = parseInt(prompt("cantidad de productos invalida.Ingrese cantidad entre 1 y 1000"));
    }

    // d) Marca del producto.
marca = prompt("Ingrese marca").toLowerCase();
    while(marca.length == 0){
        marca = prompt("Marca invalida. Ingrese otra vez porfavor.").toLowerCase();
    }

    // d) Fabricante del producto.
fabricante = prompt("Ingrese fabricante").toLowerCase();
while(fabricante.length == 0){
    fabricante = prompt("Fabricante invalido. Ingrese otra vez porfavor.").toLowerCase();
}

// Identifico que tipo ingresaron y hago lo necesario.
if(tipo == "alcohol"){ 

 acumuladorA += cantidad;                   // f) Acumulo cantidad de unidades y cuento las veces que se ingresaron.
 contadorA++;

 // e) Del mas barato de los alcohol.
 if( precio > precioMinAl || flag == 1){
    precioMinAl = precio;
    acumuladorAlBarato = cantidad;
    fabAlBarato = fabricante;                
    flag = 0;                               // Al hablar del mas barato tengo que poner un minimo. Flag y variantes reemplazadas cuando es la primera vez y las proximas veces solo
                                            // se va cumplir con la otra condicion.

}
}
else if(tipo == "barbijo"){                 // f) Acumulo cantidad de unidades y cuento las veces que se ingresaron.
    acumuladorB += cantidad;
    contadorB++;
}
else{ // "Jabon"
    acumuladorJ += cantidad;                 // f) Acumulo cantidad de unidades y cuento las veces que se ingresaron.
    contadorJ++;
}
}

// f) Forma correcta de comparar que acumulador es el mayor.
if(acumuladorJ > acumuladorA && acumuladorJ > acumuladorB){
    maxUnidades = "Jabon";
    promedio = acumuladorJ / contadorJ;
}else if(acumuladorA >= acumuladorJ && acumuladorA > acumuladorB){
    maxUnidades = "Alcohol";
    promedio = acumuladorA / contadorA;
}else{
    maxUnidades = "Barbijo";
    promedio = acumuladorB / contadorB;
}

// Muestro los resultados.
console.log("a)El alcohol mas barato tiene : " + acumuladorAlBarato + " unidades, su precio es de : "+ precioMinAl+ " ,y su fabricante es : " + fabAlBarato);

console.log("b)El tipo con mas unidades es : " + maxUnidades + " y su promedio de compra es de : " + promedio);

console.log("c)La cantidad de unidades de jabon es : " + acumuladorJ);





}
/*
Estrategia de resolucion.

1- Declarar variables. (tipo / precio/cantidad/marca/fabricante/)  Esto se lo pedimos al usuario.
a) precioMinAl / contadorAlBarato / fabAlBarato
b) acumuladorB / acumuladorA / acumuladorJ / maxUnidades / contadorB / contadorA / contadorJ / promedio.
c) acumuladorJ (ya lo tuve en cuenta).
-----------------------------------------
2- Declarar estructura repetitiva (for) porque ya sabemos las veces que se tiene que repetir (5).
2.1- Cosas que se tiene que hacer 5 veces, dentro del bucle.
2.1.1.- Pido tipo y valido.
2.1.2.- Pido precio y valido.
2.1.3.- Pido cantiodad y valido.
2.1.4.- Pido marca y fabricante y valido.
-----------------------------------------
e) me fijo si el producto es de tipo alcohol y si es asi y es la primera vez
guardo el precio barato y las siguientes veces lo comparo con el precio del alcohol barato y si es mas barato lo actualizo.
Tambien hay que guardad cantidad y fabricante.
f) me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo.
g) si es de tipo jabon acumulo la cantidad ( lo mismo que el punto b )

--------------------------------------------
3.1 cosas que hago una sola vez despues del for.
3.1.1- f) me fijo cual es el mayor acumulador y sacar el promedio para ese tipo


*/
