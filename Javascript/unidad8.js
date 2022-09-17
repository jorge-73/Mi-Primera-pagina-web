let cuestionario = document.getElementById("b2");
let parrafo = document.getElementById("parrafo-respuesta");
let respuesta = document.getElementById("respuesta");
let acertaste = document.getElementById("river-if");
let noAcertaste = document.getElementById("river-else");
let muyLejos = document.getElementById("river-else2");

function pregunta() {
  let capacidad = prompt("¿Cuanto crees que tiene de capacidad el estadio Monumental?");
  
  if (capacidad == 72000) {
    respuesta.textContent = ("Tu respuesta es: " + capacidad);
    parrafo.textContent = ("Felicidades Acertaste!");
    acertaste.style.display = "Inline-Block";
    noAcertaste.style.display = "none";
    muyLejos.style.display = "none";
  }

  else if (capacidad < 72000 && capacidad > 50000) {
    respuesta.textContent = ("Tu respuesta es: " + capacidad);
    parrafo.textContent = ("Casi, pero el estadio tiene mas capacidad.");
    noAcertaste.style.display = "Inline-Block";
    acertaste.style.display = "none";
    muyLejos.style.display = "none";
  }

  else if (capacidad <= 50000 && capacidad > 25000) {
    respuesta.textContent = ("Tu respuesta es: " + capacidad);
    parrafo.textContent = ("Te quedaste muy corto. Te falto mucho para acertar.");
    noAcertaste.style.display = "Inline-Block";
    acertaste.style.display = "none";
    muyLejos.style.display = "none";
  }

  else if (capacidad > 72000 && capacidad <= 90000) {
    respuesta.textContent = ("Tu respuesta es: " + capacidad);
    parrafo.textContent = ("Casi, pero te pasaste. El estadio no tiene tanta  capacidad.");
    noAcertaste.style.display = "Inline-Block";
    acertaste.style.display = "none";
    muyLejos.style.display = "none";
  }

  else if (capacidad > 90000) {
    respuesta.textContent = ("Tu respuesta es: " + capacidad);
    parrafo.textContent = ("Te pasaste por mucho. lo lamento.");
    noAcertaste.style.display = "Inline-Block";
    acertaste.style.display = "none";
    muyLejos.style.display = "none";
  }

  else {
    respuesta.textContent = ("Tu respuesta es: " + capacidad);
    parrafo.textContent = ("Lo lamento, estuviste muy lejos de acertar. Intentalo de nuevo.");
    muyLejos.style.display = "Inline-Block";
    acertaste.style.display = "none";
    noAcertaste.style.display = "none";
  }

  

}




