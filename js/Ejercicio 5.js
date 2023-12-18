/**
 * 5- Realizar una página con un script que calcule el valor de la letra de un número
 de DNI (Documento nacional de identidad).
 El algoritmo para calcular la letra del dni es el siguiente :
 El número debe ser entre 0 y 99999999
 Debemos calcular el resto de la división entera entre el número y el número 23.
 Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: (T, R,
 W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
 Si lo introducido no es un número deberá indicarse con un alert y volver a
 preguntar.
 Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
 Ejemplo:
 Input: 40773821             Output: ‘L’
 */
let dni;
let moddni;

do {
  do {
    dni = parseInt(prompt("ingrese un numero de DNI (entre 0 y 99999999"));
    if (isNaN(dni) || dni < 0 || dni > 99999999) {
      alert(
        "El valor ingresado no es un numero o no se encuentra dentro del rango permitido"
      );
    } else {
      moddni = dni % 23;
      console.log(moddni);
      switch (moddni) {
        case 0:
          console.log("La letra que le corresponde es la T");
          break;
        case 19:
          console.log("La letra que le corresponde es la L");
          break;

        default:
          break;
      }
    }
  } while (isNaN(dni) || dni > 99999999 || dni < 0);
} while (confirm("Desea seguir operando?"));
