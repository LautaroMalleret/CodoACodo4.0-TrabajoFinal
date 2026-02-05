function resumen(){
    var resumen = document.getElementById("resultado");
    var cantidad = document.getElementById("cantidad").value;
    var categoria = document.getElementById("categoria").value;
    var valor = 0;
    if(categoria == 1){
        valor = (200-160)*cantidad;
    }
    else if(categoria == 2){
        valor = (200-100) * cantidad;
    }
    else if(categoria == 3){
        valor = (200-30)*cantidad;
    }
    else{
        valor = "error de calculo, verifique los datos ingresados"
    }
    resumen.innerHTML = "Total a Pagar: $" + valor;;
}