function gerar() {
  contador = 1000000;
  while (contador > 0){
    contador -= 1;
    htmldocertificado = emitirCertificado(inputNome.value);
  }
  listaLink = [
    "https://codepen.io/guilhermeribg/pen/wvaVrGp", 
    "https://codepen.io/guilhermeribg/pen/MWwdBwJ", 
    "https://codepen.io/guilhermeribg/pen/JjdqLYv",
    "https://codepen.io/guilhermeribg/pen/xxGvdwx",
    "https://codepen.io/guilhermeribg/pen/eYNowbj",
    "https://codepen.io/guilhermeribg/pen/dyYybmG",
    "https://codepen.io/guilhermeribg/pen/QWjbXXZ",
    "https://codepen.io/guilhermeribg/pen/KKdKXYG",
    "https://codepen.io/guilhermeribg/pen/oNjjvNd",
    "https://codepen.io/guilhermeribg/pen/abvvVJM"
  ]
  
  listaNome = [
    "Pixel art Kunai: ",
    "Pixel art MasterBall: ",
    "Exemplo de Currículo: ",
    "Ficha de academia: ",
    "Calculadora de app: ",
    "Loteria de app: ",
    "App uber: ",
    "Botão de likes: ",
    "Contagem de Olimpíadas: ",
    "Gerador de Certificado: "    
  ]
  quantidadeLink=listaLink.length
  contaLink = 0;
  contaNome = 0;
  listaLinkHtml = "";
  while(contaLink < 10){
        link = listaLink[contaLink]
        nome=listaNome[contaNome]
        listaLinkHtml=`<li style="font-size:0.8em"><a target="_blank" href="${link}"><b>${nome}</b>:</a><br>${link.replace('https://', '')}</li>`+listaLinkHtml
    contaLink=contaLink+1
    contaNome=contaNome+1
}
  document.body.innerHTML=`
  ${htmldocertificado}
  <ol>
  ${listaLinkHtml}
  </ol>
`
  print();
}

