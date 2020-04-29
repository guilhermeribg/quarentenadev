qntdLikes = 0;

function adicionarLike() {
  qntdLikes = 1 + qntdLikes;
  if (qntdLikes == 1) {
    botao.innerHTML=qntdLikes + " Like";
  } else {
    botao.innerHTML=qntdLikes + " Likes";
  }
  
}