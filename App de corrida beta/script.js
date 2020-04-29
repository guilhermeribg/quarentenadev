//fórmula: 2+distancia*1.4 + tempogasto*0.26
function distancia() {
  dist = parseInt(prompt("Digite a distância: "))
  return dist
} 
function tempogasto() {
  tempo = parseInt(prompt("Digite o tempo que durará a viagem: "))
  return tempo
}
function valorcorrida(a, b) {
  valorfinal = 2 + a * 1.4 + b* 0.26
  return alert("Sua corrida deu: R$ " + valorfinal.toFixed(2))
} 
//document.write('Distância: ', distancia, ' km' , '<br>Tempo gasto: ' , tempogasto , ' minutos' , '<br>Sua corrida vai dar: R$' , valorcorrida.toFixed(2)) //o alert usa o +, pois só aceitar um valor, no document.write pode usar vários argumentos como o + e a vírgula

