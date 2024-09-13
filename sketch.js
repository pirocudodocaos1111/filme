let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(500, 20, 400));
  textAlign(CENTER, CENTER);
  textSize(60);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "esqueceram de mim";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "zootopia";          
        } else{
         return "os batutinhas";
        }
      } else {
        if (gostaDeFantasia) {
          return "monstros S.A";
        } else {
          return "ta chovendo hamburguer";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "divertidamente";
    } else {
      return "jogos vorazes";
    }
  }
}
