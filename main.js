//Extracción de los span del html
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let decimaMinutos = document.getElementById('decimaMinutos')
let segundos = document.getElementById('segundos');
let decimaSegundos = document.getElementById('decimaSegundos');

//Definición de las variables necesarias.
let segundo = 0;
let decimaSegundo = 0;
let minuto = 0;
let decimaMinuto = 0;
let hora = 0;
let detenerEjecucion = false;


function mostrarContadorSegundos() {
   a = setInterval(function(){
   segundo++;
   if(segundo>9){
      decimaSegundo++
      segundo = 0;
      if(decimaSegundo>5){
         decimaSegundo = 0;
         mostrarContadorMinutos();
      }
      decimaSegundos.innerText = decimaSegundo;
   }
   segundos.innerText = segundo;
},1000)
}

function mostrarContadorMinutos(){
   minuto++;
   if(minuto>9){
      decimaMinuto++
      minuto = 0;
      if(decimaMinuto>5){
         decimaMinuto = 0;
         mostrarContadorHoras();
      }
      decimaMinutos.innerText = decimaMinuto;
   }
   minutos.innerText = minuto;
}

function mostrarContadorHoras() {
   hora++
   if(hora>8){
      segundo = 0;
      minuto = 0;
      hora = 0;
   }
   horas.innerText = hora;
}

function botonDetener(){
   clearInterval(a);
}

function reiniciar(){
   segundo = 0;
   decimaSegundo = 0;
   minuto = 0;
   decimaMinuto = 0;
   hora = 0;

   segundos.innerText = segundo;
   decimaSegundos.innerText = decimaSegundo;
   minutos.innerText = minuto;
   decimaMinutos.innerText = decimaMinuto;
   horas.innerText = hora;
}


