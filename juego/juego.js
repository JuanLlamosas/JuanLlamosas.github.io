//respuestas correctas en orden del 1-10
var respuestasCorrectas = [2,4,3,3,1,4,2,3,1,2,1,3,4,4,1];

function verificarRespuestas() {
  var puntuacion = 0;
  
  for (var i = 0; i < respuestasCorrectas.length; i++) { //for que recorre todas las respuestas correctas  
    var pregunta = document.getElementById('pregunta' + (i+1)); //Se obtiene el elemento HTML que representa la pregunta actual. Lo hace concatenando el valor de (i+1) al string 'pregunta', para que quede como 'pregunta1' ya que las preguntas están etiquetadas como 'pregunta1'

    var radios = pregunta.getElementsByTagName('input'); //Se obtienen los elementos input para obtener TODAS las opciones (los circulos de las respuestas)
    var respondido = false; //respondido? NO
    
    for (var j = 0; j < radios.length; j++) { //for que recorre todas las opciones de respuesta para la pregunta actual
      radios[j].disabled = true; //Desactiva los botones después de verificar las respuestas 

//RTA CORRECTA      
      if (radios[j].value == respuestasCorrectas[i] && radios[j].checked) { //Verificamos si la respuesta es la correcta Y si está marcada en la opción correcta
        radios[j].parentNode.style.backgroundColor = 'lightgreen'; //CORRECTO! fondo verde
        puntuacion++; //+1 puntos
        respondido = true; //marca que esté respondido

//RTA INCORRECTA
      } else if (radios[j].checked || !respondido) { //Si la opción no es la correcta O si no está respondida
        radios[j].parentNode.style.backgroundColor = 'lightcoral'; //INCORRECTO! fondo rojo
      }
    }
  }

//Cuantas preguntas respondió correctamente
if(puntuacion==1){
    alert("Solo respondiste correctamente " + puntuacion + " pregunta."); //Alerta de la puntuación final 
}else if(puntuacion > 1 && puntuacion < 6){
  alert("Has respondido correctamente a " + puntuacion + " preguntas."); //Alerta de la puntuación final 
}else if(puntuacion > 5 && puntuacion < 11){
    alert("Has respondido correctamente a " + puntuacion + " preguntas. BIEN"); //Alerta de la puntuación final 
}else if(puntuacion > 10 && puntuacion < 15){
    alert("Has respondido correctamente a " + puntuacion + " preguntas. EXCELENTE"); //Alerta de la puntuación final 
}else if(puntuacion == 15){
    alert("Has respondido correctamente a " + puntuacion + " preguntas. ¡PERFECTO!"); //Alerta de la puntuación final 
}else if(puntuacion == 0){
    alert("No has respondido correctamente ninguna pregunta."); //Alerta de la puntuación final 
}
}

function mezclarPreguntas() {
    const cuestionario = document.getElementById("cuestionario");//obtiene el elemento del formulario con el id "cuestionario"
    const preguntas = Array.from(cuestionario.children); //convierte las preguntas en un array (preguntas = hijos de padre (formulario))
    const preguntasMezcladas = preguntas.sort(() => Math.random() - 0.5);//mezcla aleatoriamente las preguntas usando sort y una función que devuelve un valor aleatorio

    preguntasMezcladas.forEach(pregunta => cuestionario.appendChild(pregunta));//añade las preguntas mezcladas al formulario
    var botonJuego = document.getElementById("botonJuego");
    cuestionario.style.display = "block"; //aparece el cuestionario (ver en css #cuestionario)
    botonFinJuego.style.display = "block"; //aparece el boton "VERIFICAR" (ver en css #botonFinJuego)
    botonJuego.disabled = true; //bloqueo el boton "EMPEZAR" una vez apretado
}