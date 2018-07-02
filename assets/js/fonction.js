$(function() {
  //Au déclanchement de l'évenement keydown..
  $('#area').keydown( function(e) {
    //Intégration de la valeur marge gauche dans la variable marginWidthX
    var marginWidthX = parseInt($('#ship').css('margin-left'));
    //Intégration de la valeur marge droite dans la variable marginWidthY
    var marginWidthY = parseInt($('#ship').css('margin-top'));
    //Intégration de la largeur de page dans la variable width
    var width = $(window).width();
    //Intgration de la hauteur de page dans la variable height
    var height = $(window).height();
    //Si le bouton directionelle droit est enfoncé...
    if (e.which == 39) {
      //Si la marge gauche est supérieur ou égale a la largeur de page...
      if (marginWidthX >= width) {
        //Mettre la marge gauche a 0px
        $('#ship').css('margin-left', '0px');
        //Sinon
      } else {
        //Augmenter la marge de 10px
        $('#ship').css('margin-left', '+=10px');
      }
      //Sinon si le bouton directionelle gauche est enfoncé...
    } else if (e.which == 37) {
      //Si la marge gauche est inférieur a la largeur de page...
      if (marginWidthX < 0) {
        //Mettre la marge gauche a 1310px
        $('#ship').css('margin-left', width);
        //Sinon
      } else {
        //Baisse la marge de 10px
        $('#ship').css('margin-left', '-=10px');
      }
      //Si le bouton directionelle haut est enfoncé...
    } else if (e.which == 38) {
      //Si la marge du haut est inférieur a la largeur de page...
      if (marginWidthY < 0) {
        //Mettre la marge du haut a 460px
        $('#ship').css('margin-top', height);
        //Sinon
      } else {
        //Baisse la marge de 10px
        $('#ship').css('margin-top', '-=10px');
      }
      //Si le bouton directionelle bas est enfoncé...
    } else if (e.which == 40) {
      //Si la marge du haut est supérieur ou égale a la hauteur de page...
      if (marginWidthY >= height) {
        //Mettre la marge du haut a 0px
        $('#ship').css('margin-top', '0px');
        //Sinon
      } else {
        //Augmente la marge du haut de 10px
        $('#ship').css('margin-top', '+=10px');
      }
    } else {
    }
    $('p').text('largeur page : ' + width + '\nHauteur page : ' + height + '\nMarge gauche : ' + marginWidthX + '\nMarge droite : ' + marginWidthY);
  });
});
