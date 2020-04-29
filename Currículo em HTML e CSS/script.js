nome = prompt("Nome completo: ")
data_nasc = prompt("Data de Nascimento: ")
idade = prompt("Idade: ")
condicao = prompt("Tem condição pré-existente (Sim ou Não): ") //outra forma que posso fazer é usar a função confirm("Tem condição pré-existente"), daria True ou False.

if(condicao === "Sim" || condicao === "sim")
  acomp = "Precisa de acompanhamento médico"
else if (condicao === "Não" || condicao === "não")
  acomp = "Não precisa de acompanhamento médico"

tagh1.innerHTML = "Nome: " + nome
lista.innerHTML = 
  `<li> Data de nascimento: ${data_nasc} </li>
   <li> Idade: ${idade} </li>
   <li> Tem condição pré-existente: ${condicao} </li>
   <li> ${acomp} </li>`