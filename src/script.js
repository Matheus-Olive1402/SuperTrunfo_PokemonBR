var Bulbassalto = {
  nome: "Bulbassalto",
  imagem: "https://pbs.twimg.com/media/Dl8nOCfXoAAt6E1.png",
  atributos: {
    Porte_do_homem: 5,
    Colete: 7,
    BO: 6
  }
};
var Charmano = {
  nome: "Charmano",
  imagem: "http://pm1.narvii.com/6351/a4cc66b479c67de46e8194a932a414d4030fddd4_00.jpg",
  atributos: {
    Porte_do_homem: 7,
    Colete: 6,
    BO: 4
  }
};
var Squardocrime = {
  nome: "Squardocrime",
  imagem: "https://pbs.twimg.com/media/EBZsozIW4AEti12.png",
  atributos: {
    Porte_do_homem: 6,
    Colete: 5,
    BO: 7
  }
};
var AbraCarteira = {
  nome: "AbraCarteira",
  imagem: "https://i.pinimg.com/564x/99/61/e6/9961e69e1300fa75573827e79bb2e2a2.jpg",
  atributos: {
    Porte_do_homem: 5,
    Colete: 6,
    BO: 7
  }
};
var Pikachu = {
  nome: "Pikachu PM (SuperCoxinha)",
  imagem: "https://i.pinimg.com/564x/94/6f/4b/946f4b0bf48d4f8e0e2f42527b7320b6.jpg",
  atributos: {
    Porte_do_homem: 9,
    Colete: 9,
    BO: 1
  }
};
var Newtretas = {
  nome: "Newtretas",
  imagem: "https://i.pinimg.com/564x/5a/d6/50/5ad650aeb86bd05c130dffe978958a4a.jpg",
  atributos: {
    Porte_do_homem: 8,
    Colete: 6,
    BO: 7
  }
};
var Traficool = {
  nome: "Traficool",
  imagem: "https://i.pinimg.com/564x/4a/dd/88/4add8887ea622f226f200ac3bff91d7d.jpg",
  atributos: {
    Porte_do_homem: 7,
    Colete: 5,
    BO: 6
  }
};
var Hitmaoleve = {
  nome: "Hitmaoleve",
  imagem: "https://i.pinimg.com/564x/81/5b/5a/815b5a80943946c01d6a88fab8c87444.jpg",
  atributos: {
    Porte_do_homem: 7,
    Colete: 6,
    BO: 7
  }
};
var Jigglyfurto = {
  nome: "Jigglyfurto",
  imagem: "https://i.pinimg.com/564x/e6/06/95/e606958820eab203966da1f7ac87dae3.jpg",
  atributos: {
    Porte_do_homem: 6,
    Colete: 5,
    BO: 4
  }
};
var Ratatrafico = {
  nome: "Ratatrafico",
  imagem: "https://i.pinimg.com/564x/cb/e5/fc/cbe5fc38c98892cd7ee7048955adc88e.jpg",
  atributos: {
    Porte_do_homem: 7,
    Colete: 6,
    BO: 5
  }
};

var cartas = [Bulbassalto, Charmano, Squardocrime, AbraCarteira, Pikachu, Newtretas, Traficool, Hitmaoleve, Jigglyfurto, Ratatrafico];
var cartaMaquina;
var cartaJogador;
var pontuacaoJogador = 0;
var pontuacaoMaquina = 0;

var imagem = "https://grupoahora.net.br/wp-content/uploads/2020/08/gincana-do-vale.jpg";

function sortearCarta() {
  
  var numeroCartaMaquina = parseInt(Math.random() * 11);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 11);
  //enquanto houver igualdade deve executar denovo o processo
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 11);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
 // document.getElementById("btnNovaRodada").disabled = true;
  
  exibirCartaJogador();
  exibirPontuacao();
}

function exibirPontuacao() {
  document.getElementById("pontuacao").innerHTML =
    "<h3>Sua pontuação " +
    pontuacaoJogador +
    " / " +
    pontuacaoMaquina +
    " Pontos do Computador</h3>";
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  
  if (atributoSelecionado === "Porte_do_homem" || atributoSelecionado === "Colete" ){
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado])     {
    htmlResultado = "<p class='resultado-final'>Venceu Jogador caro</p>";
    pontuacaoJogador += 1;
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Perdeu ramelão</p>";
    pontuacaoMaquina +=1;
     } else {
    htmlResultado = "<p class='resultado-final'>Empatou meno</p>";
    }
  } else if (atributoSelecionado === "BO"){
    if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Meteu pau na maquina (venceu)</p>";
    pontuacaoJogador += 1;
    } else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = "<p class='resultado-final'>Perdeu vacilão</p>";
    pontuacaoMaquina +=1;
    } else {
    htmlResultado = "<p class='resultado-final'>Empatou amen</p>";
    }
  }else {
    alert(
      "Atenção! Você precisa selecionar um atributo antes de jogar sua carta."
   );
  }
  console.log(divResultado);
  divResultado.innerHTML = htmlResultado;
  
   document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnNovaRodada").disabled = false;
  
  exibirCartaMaquina();
  exibirPontuacao();
}

function novaRodada(){ 
  document.getElementById("btnNovaRodada").disabled = true;
  sortearCarta();
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + {cartaJogador.image} + ")`" mesma coisa porme mais complexo
   var moldura =
    '<img src="https://i.pinimg.com/originals/c8/06/86/c80686b645efd1585f085e161cab6a34.png" style="width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto = "";

  //atributos recebe os dados de cartajogaor apenas os seus atributos
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +  "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
  
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina(){
   var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + {cartaJogador.image} + ")`" mesma coisa porme mais complexo
   var moldura =
    '<img src="https://i.pinimg.com/originals/c8/06/86/c80686b645efd1585f085e161cab6a34.png" style="width: inherit; height: inherit; position: absolute;">';
  
  var tagHTML = "<div id='opcoes' class='carta-status'>"
  var opcoesTexto = "";

  //atributos recebe os dados de cartajogaor apenas os seus atributos
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += "<p type='text' name='atributo' value='" + atributo +  "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}

