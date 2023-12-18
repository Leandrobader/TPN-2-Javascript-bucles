/**
 * 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
 mensaje que ya puede conducir, si la edad ingresada no es un número válido
 indicarlo en un mensaje
 */

 let edad = parseInt(prompt("Ingrese la edad"));
 //console.log(edad);

 if (edad >= 18) {
    console.log("Puede conducir");
 } else if (edad >= 0) {
    console.log("No puede conducir por ser menor de 18 años");
 }else{
    console.log("La edad ingresada no es un valor valido");
 }