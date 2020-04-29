function formataMoeda(x){
  return x.toFixed(2).replace(".", ",")  
}

function calcular(){
  dist = inputDistancia.value;
  tempo = inputTempo.value;
  valorfinal = 2 + dist * 1.4 + tempo* 0.26;
  botaoCalcular.innerHTML = 'Total: R$' + formataMoeda(valorfinal);
} 

//document.write('Distância: ', distancia, ' km' , '<br>Tempo gasto: ' , tempogasto , ' minutos' , '<br>Sua corrida vai dar: R$' , valorcorrida.toFixed(2)) //o alert usa o +, pois só aceitar um valor, no document.write pode usar vários argumentos como o + e a vírgula

