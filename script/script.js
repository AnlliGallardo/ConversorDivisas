let cambio = {
    Dolares: 1,
    euro: 0.85,
    COP: 3880,
    MXN: 20,
    libra: 0.73
}



console.log(monto);
function convertir(cambio){
    let monto = document.getElementById('monto').value;
    let origen = document.getElementById('origen').value;
    let destino = document.getElementById('destino').value;
  
let result = 0;
    if(origen === "Dolares"){
          if(destino === "Dolares"){
           result = monto;
           console.log(result);
       }else if(destino === "Euro"){
        result = monto *0.85;
        
        console.log(result);
       }else if(destino === "Peso Mexicano"){
        result = monto *20;
        console.log(result);
       }else if(destino === "Peso Colombiano"){
        result = monto *3880;
        console.log(result);
       }else if(destino === "Libra Esterlina"){
        result = monto *0.73;
        console.log(result);
       }else{
           alert("Ingrese la moneda a la que desae relizar la conversion")
       }
      
    } else  if(origen === "Euro"){
        if(destino === "Dolares"){
         result = monto / 0.85;
         console.log(result);
     }else if(destino === "Euro"){
      result = monto;
      
      console.log(result);
     }else if(destino === "Peso Mexicano"){
      result =(monto/ 0.85) *20;
      console.log(result);
     }else if(destino === "Peso Colombiano"){
      result = (monto/ 0.85) *3880;
      console.log(result);
     }else if(destino === "Libra Esterlina"){
      result = (monto/ 0.85) *0.73;
      console.log(result);
     }else{
         alert("Ingrese la moneda a la que desae relizar la conversion")
     }
    
    } else  if(origen === "Peso Mexicano"){
        if(destino === "Dolares"){
        result = (monto/20);
        console.log(result);
    }else if(destino === "Euro"){
    result = (monto/20) *0.85;
    
    console.log(result);
    }else if(destino === "Peso Mexicano"){
    result = monto;
    console.log(result);
    }else if(destino === "Peso Colombiano"){
    result = (monto/20) *3880;
    console.log(result);
    }else if(destino === "Libra Esterlina"){
    result = (monto/20) *0.73;
    console.log(result);
    }else{
        alert("Ingrese la moneda a la que desae relizar la conversion")
    }

    } else  if(origen === "Peso Colombiano"){
        if(destino === "Dolares"){
        result = (monto/3880);
        console.log(result);
    }else if(destino === "Euro"){
    result = (monto/3880) *0.85;
    
    console.log(result);
    }else if(destino === "Peso Mexicano"){
    result = mon(monto/3880) *20;
    console.log(result);
    }else if(destino === "Peso Colombiano"){
    result = monto;
    console.log(result);
    }else if(destino === "Libra Esterlina"){
    result = (monto/3880) *0.73;
    console.log(result);
    }else{
        alert("Ingrese la moneda a la que desae relizar la conversion")
    }

    } else  if(origen === "Libra Esterlina"){
        if(destino === "Dolareses"){
        result =  (monto/0.73);
        console.log(result);
    }else if(destino === "Euros"){
    result = (monto/0.73) *0.85;
    
    console.log(result);
    }else if(destino === "Pesos Mexicanos"){
    result = (monto/0.73) *20;
    console.log(result);
    }else if(destino === "Pesos Colombianos"){
    result = (monto/0.73) *3880;
    console.log(result);
    }else if(destino === "Libras Esterlinas"){
    result = monto;
    console.log(result);
    }else{
        alert("Ingrese la moneda a la que desae relizar la conversion")
    }

    } 

    document.getElementById("resultado").value = monto +" "+ origen +" son " + result+ " " + destino;
    
}
btn.addEventListener('click', e =>{
convertir()
document.getElementById("resultado").style.display = "block";
document.getElementById('monto').value = "";
document.getElementById('origen').value = "";
document.getElementById('destino').value = "";
})