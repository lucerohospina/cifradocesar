function cipher() {
    //preguntamos al usuario por la frase a ser usada
    var inquiry = prompt('Introduzca las palabras a ser cifradas');
  
    while (inquiry === '') {
      //mientras el usuario deje su respuesta en vacio se le seguirá preguntando por la frase a ser usada
      inquiry = prompt(
        'Dejó el campo vacío, introduzca las palabras a ser cifrada por favor');
    }
  
    //empieza un ciclo para recorrer indice por indice la frase introducida
    for (var i = 0; i < inquiry.length; i++) {
      //condicionamos el recorrido del ciclo a que si encuentra número este se detenga y vuelva a preguntar por la frase a ser usada
      if (parseInt(inquiry[i]) % 1 === 0) {
        inquiry = prompt('Introduza las palabras con solo letras por favor');
        while (inquiry === '') {
          //condicionamos este ciclo a que si el usuario deja su respuesta vacia se le seguirá preguntando por la frase
          inquiry = prompt('Dejó el campo vacío, por favor introduzca las palabras a ser cifradas');
        }
      }
    }
    //pasamos a mayúusculas la frase que nos brindó el usuario
    var phrase = inquiry.toUpperCase();
  
    var str = '';
  
    for (var j = 0; j < phrase.length; j++) {
      //hacemos una condición para los espacios entre las palabras de la frase
      if (phrase[j] === ' ') {
        str += ' ';
      } else
        //aplicamos la formula del codigo cesar y sumamos lo elementos ya convertidos a las letras cifradas al string vacio y con espacios
        str += String.fromCharCode((phrase.charCodeAt(j) - 65 + 33) % 26 + 65);
    }
    //retornamos el string que contiene las letras cifradas
    return document.write(str);
  }
  
  //invocamos la función cipher
  cipher();