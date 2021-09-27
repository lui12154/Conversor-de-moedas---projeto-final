    
   function funcionar() {
      
    var bat1 = document.getElementById("moeda").value;
    var bat2 = document.getElementById("moeda3").value
    var valor = document.getElementById("dinheiro").value
    var texto = document.getElementById("texto")
    var reaDolar = valor/5.29
    var realEuro = valor/6.23
    var realPesoChileno = valor*148.36
    
   
      if (bat1==1 && bat2 ==2) {

      
         document.getElementById("texto").innerHTML= ` o valor de R$${valor} é igual a $${reaDolar.toFixed(2)} dolares`
      
       
    }

    if (bat1==1 && bat2 ==3) {

      
      document.getElementById("texto").innerHTML= ` o valor de R$${valor} é igual a $${realEuro.toFixed(2)} euros`
   
    
        }

        if (bat1==1 && bat2 ==4) {

      
          document.getElementById("texto").innerHTML= ` o valor de R$${valor} é igual a $${realPesoChileno.toFixed(2)} pesos chilenos`
       
        
        }

    
    
    
   
       
   }