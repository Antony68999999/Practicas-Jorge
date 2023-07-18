/*1 - Encontrar el número más grande en un arreglo: se pedira una serie de números y al final
se mostrará cual fue el número mas grande ingresado, unicamente se debe detener hasta que la
persona indique que ya no desea seguir ingresando números.*/


let primero=document.getElementById("boton1");
primero.addEventListener("click",()=>{
    
        const numeros = [];
        while (true) {
            const numero = parseInt(prompt("Ingresa un número (o ingresa 0 para detener):"));
            
            if (numero === 0) {
              break; // Detener el bucle si se ingresa 0
            }
            
            numeros.push(numero); // Agregar el número al arreglo
          }
          
          const numeroMasGrande = Math.max(...numeros); // Encontrar el número más grande
          
          alert("El número más grande ingresado es:"+ numeroMasGrande);
        }   
);
/*2-Validar si una palabra es un palíndromo: se pedira una palabra o frase completa
 y se debera indicar si la palabra es palindromo o no ( que se lee igual de derecha
 a izquierda y viceversa).*/

 let segundo = document.getElementById('boton2');
 segundo.addEventListener("click", () => {
     let segir = true;
     while (segir) {
         let palabra = prompt("ingrese tu palabra para saber si es palindromo");
         let nuevaPalabra = palabra.toLowerCase();
         if (nuevaPalabra === "") {
             segir = confirm("Tu campo esta vacio quieres continuar?")
         }
         else {
             const alrevez = palabra.split("").reverse().join("").toLowerCase();
             const esPalíndromo = (nuevaPalabra === alrevez) ? "Es palíndromo " : "no es palíndromo";
             alert(esPalíndromo);
             segir = confirm("Quieres continuar probando?")
         }
     }
 });

 
/*3-Calcular la suma de los dígitos de un número: se deberá pedir un número y sumar los valores
 de dicho numero, ejemplo si se ingresa el número 1342 se debe mostrar como resultado la suma de
  sus digitos que seria 1+3+4+2 = 10. */

let tercero = document.getElementById('boton3');
tercero.addEventListener("click", () => {
    let suma = 0;
    let segir = true;
    while (segir) {
        let numero = prompt("Ingrese su numero para calcular la suma de sus digitos");
        if (numero !== "") {
            for (let i = 0; i < numero.length; i++) {
                const digito = parseInt(numero[i]);
                suma += digito;
            }
            alert(`La suma de los digitos de ${numero} es: ${suma}`)
        }

    }
});


 /* Generar un número aleatorio dentro de un rango dado:
se debera pedir un rango de números y devolver un número
    aleatorio que se encuentre dentro de dicho rango, ejemplo 
    se ingresa un rango del 5 al 40  y se devueve un aleatorio de 25.*/

let cuarto = document.getElementById('boton4');
cuarto.addEventListener("click", () => {
    let min = prompt("El numero de inicio");
    let max = prompt("El numero final");
    let numeroRandom = Math.floor(Math.random() * (max - min + 1) + min)
    alert(`Tu numero es el: ${numeroRandom}`);
});

/*5-Generar la secuencia de Fibonacci hasta un número dado: se debera
 pedir un número y posteriormente generar su secuencia fibonnacci, ejemplo
  si se agrega el número 20, se deberá devolver su secuencia fibonnacci que
  seria: 0,1,1,2,3,5,8,13 . */

  let quinto = document.getElementById('boton5');
  quinto.addEventListener("click", () => {
      let segir = true;
      while (segir) {
          const Fibonacci = [0, 1];
          let numero = prompt("Ingresa el numero para calcular el fibonacci");
  
          if (numero === "" || numero === null) {
              segir = confirm("El campo esta vacio quieres continuar?")
          }
          else if (numero >= 0) {
              while (Fibonacci[Fibonacci.length - 1] < numero) {
                  const next = Fibonacci[Fibonacci.length - 1] + Fibonacci[Fibonacci.length - 2]
                  if (next > numero) {
                      break;
                  }
                  Fibonacci.push(next);
              }
              alert(`Tu Fibonacci de ${numero} es: \"${Fibonacci}\"`)
              segir = confirm("Quieres continuar?")
          }
          else {
              segir = confirm("Has ingresado un valor incorrecto. Quieres continua?")
          }
      }
  });
  



