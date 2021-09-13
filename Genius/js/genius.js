var cores;
var c = 1;
var i = 0;
var qtdCoresJogo = 0; // Cliques
var corSeqClique;
var qtdCoresSequencia = 0;
var coresSequencia;
var qtdSeq;
var delay = 1;

var incrementoDelay;
var strDelay = delay.toString().concat("s");
var teste = 7;
teste++;



//var testeConvertido = teste.toString().concat("s");
//alert("Teste convertido: " + testeConvertido);

//document.getElementById("primeira").className="btn btn-primary btn-lg btn-block efeito3";
//document.getElementById("segunda").className="btn btn-warning btn-lg btn-block efeito3";
//document.getElementById("terceira").className="btn btn-success btn-lg btn-block efeito3";
//document.getElementById("quarta").className="btn btn-danger btn-lg btn-block efeito3";


// Correro
//document.getElementById("primeira").style.animationDelay = "2s";
//document.getElementById("primeira").style.animationDelay = testeConvertido;

//document.getElementById("myDIV").style.animationDelay = "3s"
//animation-delay : 3s;
//document.getElementById("primeira").style.animation = "example 2s 1";

//document.getElementById("myDIV").style.animation = "mynewmove 4s 2";
//document.getElementById("segunda").className="btn btn-warning btn-lg btn-block efeito2";

//document.getElementById("terceira").className="btn btn-success btn-lg btn-block efeito3";

//document.getElementById("quarta").className="btn btn-danger btn-lg btn-block efeito4";

//reset();
inicio();
//setTimeout(function(){MoveObjeto("segunda")}, 2000);
//setTimeout(function(){MoveObjeto("primeira")}, 4000);
//setTimeout(function(){MoveObjeto("terceira")}, 6000);
 //setTimeout(function(){MoveObjeto("segunda")}, 8000);


//MoveObjeto("quarta");
//MoveObjeto("segunda");
//MoveObjeto("primeira");



function MoveObjeto(s) {
	//console.log("s");
//  var elem = document.getElementById("animate");   
var corAzul = document.getElementById(s);
//alert(corAzul.style.backgroundcolor="black");
  var pos = 0;
  var id = setInterval(frame1, 10);
  var id2;

  function frame1() {
  	//console.log("frame1");
    //console.log("POS" + pos);

    if (pos == 100) {
      clearInterval(id);
    id2 = setInterval(frame2, 10);
    } else {
      pos++; 
      corAzul.style.top = pos + "px"; 
      //corAzul.style.left = pos + "px"; 
    }
  }

function frame2(){
	//console.log("frame2");
	//console.log("POS" + pos);
  if(pos==1){
  	//console.log("aQUI");
    clearInterval(id2)
  }else{
     pos--; 
      corAzul.style.top = pos + "px"; 
  }
}

}
function reset() {
  cores.splice(0, cores.length);
  corSeqClique.splice(0, corSeqClique.length);
  delay = 1
  c = 1;
  var i = 0;
  qtdCoresJogo = 0; // Cliques
  qtdCoresSequencia = 0;
}


//Inicio clique dos botões
document.getElementById("primeira").onclick = function () {
  qtdCoresJogo = qtdCoresJogo + 1;
  incluiCor("azul");
  executa("azul");
};
document.getElementById("segunda").onclick = function () {
  qtdCoresJogo = qtdCoresJogo + 1;
  incluiCor("laranja");
  executa("laranja");
};
document.getElementById("terceira").onclick = function () {
  qtdCoresJogo = qtdCoresJogo + 1;
  incluiCor("verde");
  executa("verde");
};
document.getElementById("quarta").onclick = function () {
  qtdCoresJogo = qtdCoresJogo + 1;
  incluiCor("vermelho");
  executa("vermelho");
};
//Fim clique dos botões

//Inicio INCLUIR COR
function incluiCor(s) {
  //remover
  //c=1;
  var novaCor = Math.floor(Math.random() * 4 + 1);
  if (c == 1) {
    corSeqClique = [s];
        //corSeqClique.push("s");
  } else {
    if (novaCor == 1) {
      cores.push("azul");
      corSeqClique.push(s);
    } else if (novaCor == 2) {
      cores.push("laranja");
      corSeqClique.push(s);
    } else if (novaCor == 3) {
      cores.push("verde");
      corSeqClique.push(s);
    } else {
      cores.push("vermelho");
      corSeqClique.push(s);
    }
  }
}
//Fim INCLUIR COR

//Começo do JOGO
function inicio() {
  qtdCoresSequencia = qtdCoresSequencia + 1;
 // alert("!!!!!!!!!!!!!!!!!!NOVO NOGO!!!!!!!!!!!!!!!!");
  
  while (i < 4) {
    var n = Math.floor(Math.random() * 4 + 1);
    //alert("cor " + n + "vezes " + i);
    if (i == 0) {
      if (n == 1) {
        cores = ["azul"];
      } else if (n == 2) {
        cores = ["laranja"];
      } else if (n == 3) {
        cores = ["verde"];
      } else {
        cores = ["vermelho"];
      }
    } else {
      //alert("cor aleatoria ----" + n);
      if (n == 1) {
        cores.push("azul");
      } else if (n == 2) {
        cores.push("laranja");
      } else if (n == 3) {
        cores.push("verde");
      } else {
        cores.push("vermelho");
      }
    }
    //alert("Cor: " + cores);
    i++;
  }
  //Informar a primeira cor
//  alert("Cores: " + cores);
 // alert("Cor da vez: " + cores[c - 1]);
  coresSequencia = [cores[c-1]];
  corSeqClique = cores[0];
 //coresSequencia.push(cores[c]);

//    alert("Quantidade de cores escolhidas: " + qtdCoresSequencia);
  //alert("Quantidad de Cliques: " + qtdCoresJogo);

  //qtdSeq = 2; //
  qtdSeq = qtdCoresSequencia; // Quantidade de cores da sequencia
  while (qtdSeq > 0) {
    // alert("vezes " + qtdSeq);
    if (cores[c - 1] == "azul") {
      document.getElementById("primeira").className = "btn btn-primary btn-lg btn-block efeito";
      document.getElementById("primeira").style.animationDelay = strDelay;
    } else if (cores[c - 1] == "laranja") {
      document.getElementById("segunda").className = "btn btn-warning btn-lg btn-block efeito2";
      document.getElementById("segunda").style.animationDelay = strDelay;
    } else if (cores[c - 1] == "verde") {
      document.getElementById("terceira").className = "btn btn-success btn-lg btn-block efeito3";
      document.getElementById("terceira").style.animationDelay = strDelay;
    } else {
      document.getElementById("quarta").className = "btn btn-danger btn-lg btn-block efeito4";
      document.getElementById("quarta").style.animationDelay = strDelay;
    }
    qtdSeq--;
    //remover
    // c++;
  }
  //var teste = cores[c-1];
  //corSeq=[teste];
  //alert("Todas as cores da sequencia: " + coresSequencia);
  //alert("Cor atual da sequencia: " + coresSequencia[c-1]);

 
  //qtdCoresJogo = qtdCoresJogo + 1;


 //FIM do JOGO
}
//todasCores();
  function todasCores(cores) {
    cores.forEach(elementos);

    function elementos(item, index) {
    //  alert("item ENTROU: " + item);
     // document.getElementById("primeira").className="btn btn-primary btn-lg btn-block efeito";

// Correro
//document.getElementById("primeira").style.animationDelay = "2s";
      
      //comecei aqui
      //var incrementoDelay;
       
     // alert("Increment delay no for: " + incrementoDelay);
      
      /*
      document.getElementById("segunda").className =
        "btn btn-warning btn-lg btn-block efeito2";
      document.getElementById("segunda").style.animationDelay = strDelay;
      */
      
      if (item == "azul") {
        //alert("entrou no azul");
      document.getElementById("primeira").className ="btn btn-primary btn-lg btn-block efeito5";
      delay +=2000;
      incrementoDelay = delay.toString().concat("s");
      //document.getElementById("primeira").style.animationDelay = incrementoDelay;
      setTimeout(function(){MoveObjeto("primeira")}, delay);
    } else if (item == "laranja") {
       //alert("entrou no laranja");
      document.getElementById("segunda").className ="btn btn-warning btn-lg btn-block efeito5";
      delay +=2000;
      incrementoDelay = delay.toString().concat("s");
      //document.getElementById("segunda").style.animationDelay = incrementoDelay;
            setTimeout(function(){MoveObjeto("segunda")}, delay);
    } else if (item == "verde") {
      //alert("entrou no verde");
      document.getElementById("terceira").className ="btn btn-success btn-lg btn-block efeito5";
      delay +=2000;
      incrementoDelay = delay.toString().concat("s");
      //document.getElementById("terceira").style.animationDelay = incrementoDelay;
      setTimeout(function(){MoveObjeto("terceira")}, delay);

    } else {
      //alert("entrou no vermelho");
      document.getElementById("quarta").className ="btn btn-danger btn-lg btn-block efeito5";
      delay +=2000;
      incrementoDelay = delay.toString().concat("s");
      //document.getElementById("quarta").style.animationDelay = incrementoDelay;
      setTimeout(function(){MoveObjeto("quarta")}, delay);

    }
      
      //terminei aqui
      
    }
  }
function mostrarSequencia(){
//todasCores(cores);
  /*
  qtdSeq = qtdCoresSequencia; // Quantidade de cores da sequencia
  while (qtdSeq > 0) {
    alert("ENTROU NO MOSTRAR SEQUENCIA  - vezes " + qtdSeq);
    alert("C: " + c);
    
    var incrementoDelay;
    incrementoDelay = delay +=3;
   alert("incremento: " + incrementoDelay);
    alert("Cores ver: " + cores[c - qtdSeq])
   
    if (cores[c - qtdSeq] == "azul") {
      document.getElementById("primeira").className =
        "btn btn-primary btn-lg btn-block efeito";
      document.getElementById("primeira").style.animationDelay = incrementoDelay.toString().concat("s");
    } else if (cores[c - qtdSeq] == "laranja") {
      document.getElementById("segunda").className =
        "btn btn-warning btn-lg btn-block efeito2";
      document.getElementById("segunda").style.animationDelay = incrementoDelay.toString().concat("s");
    } else if (cores[c - qtdSeq] == "verde") {
      document.getElementById("terceira").className =
        "btn btn-success btn-lg btn-block efeito3";
      document.getElementById("terceira").style.animationDelay = incrementoDelay.toString().concat("s");
    } else {
      document.getElementById("quarta").className =
        "btn btn-danger btn-lg btn-block efeito4";
      document.getElementById("quarta").style.animationDelay = incrementoDelay.toString().concat("s");
    }
    
    qtdSeq--;
    c++;
    
    //alert("Daley: " + strDelay);
  }
  */
}
function executa(s) {
  //alert("Quantidade de cores escolhidas: " + qtdCoresSequencia);
  //alert("Quantidad de Cliques: " + qtdCoresJogo);

  //alert("Cor selecionada: " + s);

  //alert(cores);
  //alert("Cor da vez: " + cores[qtdCoresJogo - 1]);

  if (s == cores[qtdCoresJogo - 1]) {
    if (qtdCoresJogo == qtdCoresSequencia) {
     // alert("venceu");
      qtdCoresJogo = 0;
      
      qtdCoresSequencia = qtdCoresSequencia + 1;
     // mostrarSequencia();
      coresSequencia.push(cores[c]);
      c++;
      delay=1000;
      todasCores(coresSequencia);
      //   corSeqClique.splice(0, corSeqClique.length);
    }
  } else {
    alert("Voce perdeu! PLACAR::::>>>>" + (qtdCoresSequencia-1) + " cores");
    //reset();
    //inicio();
  }
}
  //coresSequencia.push(cores[c]);

  // alert("Quantidade de cores escolhidas 2: " + coresSequencia.length + " cor: " + coresSequencia);
  //alert("Quantidad de Cliques 2: " + corSeqClique.length + " cor: " + corSeqClique);

  //*
  //qtdCoresJogo=0;
  //if(cores[c-1] ==s){
  //c +=1;
  // alert("nova sequencia ----" +cores);
  //}else{
  //c=1;
  //cores.splice(0,cores.length);
  //corSeq.splice(0,corSeq.length);
  //  alert("Voce perdeu");
  //inicio();
  // }
  //}
  //alert(s);
  //c +=1;
  // alert("oi " + c);
  //if(c<=4) {
  // executa2();
  //  }

function executa2() {
  if (c == 4) {
    c = 1;
    alert("fim");
  }
}
