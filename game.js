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

const fnGame = () => {
  const game = $(".game");
  let pontos = parseInt($("#pontos").text());

  addBox(game); 

  document.onkeypress = function(evt) {
    let str = keyPressed(evt);
    let box = document.getElementById(str.toLowerCase());
    
    if (box) {
      box.parentNode.removeChild(box);
      $("#pontos").text(pontos += 10);
      addBox(game)
    }   
  };


};

const addBox = (game) => {
  let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  let backgrounds = ['success','danger','warning','info','dark','primary','secondary'];
  let caract = letras[Math.floor(Math.random() * letras.length-1)]
  let bg = backgrounds[ Math.floor(Math.random() * backgrounds.length-1) ];
  setTimeout(function(){
    game.html(`<div class="box bg-${bg}" id="${caract}" style="margin-left:${Math.floor(Math.random() * 1000)}px">${caract}</div>`);
    animacao(caract);
  },200)
 
};

const animacao = (caract) => {
  var marginTop = 0;
  setInterval(function() {
    marginTop += 10;
    if (marginTop <= 400) {
      $(`#${caract}`).css("margin-top", `${marginTop}px`);
    } else {
      clearInterval(animacao);
    }
  }, 100);
};

const keyPressed = evt => {
  evt = evt || window.event;
  var key = evt.keyCode || evt.which;
  return String.fromCharCode(key);
};
