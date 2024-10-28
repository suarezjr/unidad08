let cliente;

cliente='Michael';

console.log(cliente);


for (let i = 0; i < 5; i++) {
    console.log(i);
  };

//  let nombre=prompt("Como te llamas?");

//  alert(nombre);


function calcularDistancia(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

let distancia = calcularDistancia(0, 0, 10, 10);
console.log("La distancia es: "); // Muestra la distancia entre los puntos
console.log(distancia); // Muestra la distancia entre los puntos


function introducir(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}
introducir("Ana", 25);