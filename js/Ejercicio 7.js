/**
 * 7-Haz un script quee scriba una pirámide inversa de los números del 1 al número
 que indique el usuario(nomayorde50) de la siguiente forma: (suponiendo que
 indica 30).
 303030303030303030303030303030303030303030303030303030303030
 2929292929292929292929292929292929292929292929292929292929
 28282828282828282828282828282828282828282828282828282828
 …..
 333
 22
 1
 */

let num = 0;
num = parseInt(prompt("Ingrese un numero, no mayor a 50"));

if (num > 50 || num < 0 || isNaN(num)) {
    do {
        alert("El valor ingresado no es valido");
        num = parseInt(prompt("Ingrese un numero, no mayor a 50"));
    } while (num > 50);
}

for (let i = num; i >= 1 ; i--) {
    for(let rep = i; rep >=1; rep--){
        document.write(i);
    }
    document.write("<br>")
}