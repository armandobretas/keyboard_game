$(document).ready(function() {

  

  $(".titulo").click(function() {
    $(".titulo").html("3");
    setTimeout(function() { 
      $(".titulo").html("2");
    }, 1000);
    setTimeout(function() {
      $(".titulo").html("1");
    }, 2000);
    setTimeout(function() {
      $(".titulo").html("GO!");
    }, 3000);
    setTimeout(function() {
      $(".titulo").css("display", "none");
      fnGame();
    }, 4000);
  });
});
let ultimaCaracter = "";
const fnGame = () => {  
  let acertos = parseInt($("#acertos").text());
  let erros = parseInt($("#erros").text());

  addBox(); 

  document.onkeypress = function(evt) {
    let str = keyPressed(evt);
    let box = document.getElementById(str.toLowerCase());
    
    if (box) {
      ultimaCaracter = str.toLowerCase()
      box.parentNode.removeChild(box);
      $("#acertos").text(acertos += 1);
      addBox()
    } else {
      $("#erros").text(erros += 1);
    }  
  };


};

const addBox = () => {
  const game = $(".game")
  let letras = ["a","b","c","d","e","f","g","h","1","2"];
  let backgrounds = ['success','danger','warning','info','dark','primary','secondary'];
  let caract = letras[Math.floor(Math.random() * letras.length)]
  let bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  setTimeout(function(){
    console.log(Math.floor(Math.random() * letras.length-1))
    if (caract  == 'undefined' || caract == ultimaCaracter){
      addBox()
    } else {
      game.html(`<div class="box bg-${bg}" id="${caract}" style="margin-left:${Math.floor(Math.random() * 1000)}px">${caract}</div>`);
      animacao(caract);
    }
  },400)
  
};

const animacao = (caract) => {
  var marginTop = 0;
  setInterval(function() {
    marginTop += 10;
    if (marginTop <= 400) {
      $(`#${caract}`).css("margin-top", `${marginTop}px`);
    } else {
      var box = document.getElementById(caract)
      box.parentNode.removeChild(box);
      clearInterval(animacao);
      swal('Game Over','Você perdeu, tente novamente!!!','error')
      .then((value) => {
        window.location.reload()
      })
    }
  }, 100);
};

const keyPressed = evt => {
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key);
};
