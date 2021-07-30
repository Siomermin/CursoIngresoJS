/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{  
    let cantidadLamparas;
    let precioLamparas = 35;
    let precioBase;
    let precioFinal;
    let marca;
    let descuento;
    let impuesto;

    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);

    marca = document.getElementById("Marca").value;

    precioBase = cantidadLamparas * precioLamparas;

    if(cantidadLamparas >= 6){
        switch(marca){       
            default:
                descuento = precioBase * 0.50;
                
        }    
    }else if(cantidadLamparas == 5){
        switch(marca){
            case "ArgentinaLuz":
                descuento = precioBase * 0.40;
                
            break;

            default:
                descuento = precioBase * 0.30;
               
        }
    } 
    else if(cantidadLamparas == 4){
        switch(marca){
            case "ArgentinaLuz":
            case "FelipeLamparas":
                descuento = precioBase * 0.25;
                
            break;

            default:
                descuento = precioBase * 0.20;
               
        }
    }
    else if(cantidadLamparas == 3){
        switch(marca){
            case "ArgentinaLuz":
                descuento = precioBase * 0.15;
                
            break;

            case "FelipeLamparas":
                descuento = precioBase * 0.10;
                
            break;

            default:
                descuento = precioBase * 0.05;
                

        }
    }
    else{
        document.getElementById("txtIdprecioDescuento").value = precioBase;
    }

    precioFinal = precioBase - descuento;
    
    if(precioFinal > 120){
        impuesto = precioFinal * 0.10;
        precioFinal = precioFinal + impuesto;
        alert("Usted pago " + impuesto +  " pesos de IIBB.");
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }


    
}
