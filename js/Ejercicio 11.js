/**
 * 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
 nombre del mayor. *
 */
let nom1=prompt("Ingrese un nombre")
let edad1=parseInt(prompt("Ingrese la edad"))
let nom2=prompt("Ingrese un nombre")
let edad2=parseInt(prompt("Ingrese la edad"))
let nom3=prompt("Ingrese un nombre")
let edad3=parseInt(prompt("Ingrese la edad"))

let edadmax=Math.max(edad1,edad2,edad3);
console.log(edadmax);

if(edadmax===edad1){
    document.write("El nombre del mayor es: ", nom1)
}else if(edadmax===edad2){
    document.write("El nombre del mayor es: ", nom2)
}else{
    document.write("El nombre del mayor es: ", nom3)
}