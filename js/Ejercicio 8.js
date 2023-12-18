/**
 * 8-Crea script para generar pirámide siguiente con los números del 1 al número
 que indique el usuario(no mayor de 50)
 1
 12
 123
 1234
 12345
 123456

 */

let num = 0;
num = parseInt(prompt("Ingrese un numero, no mayor a 50"));

if (num > 50 || num < 0 || isNaN(num)) {
    do {
        alert("El valor ingresado no es valido");
        num = parseInt(prompt("Ingrese un numero, no mayor a 50"));
    } while (num > 50 || num < 0 || isNaN(num));
}

for (let i = 1; i <= num; i++) {
    for(let c = 0; c < i; c++){
        document.write(i);
    }
    document.write("</br>");
 }