/**
 * 13- Realiza un script que pida un texto y lo muestre en mayúsculas.
 */

let texto = prompt("Ingrese un texto");

document.write("El texto en mayusculas es: ", texto.toUpperCase());
document.write("<br>")
/**
 * 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */
let letra;
for(let i=0; i<texto.length;i++){
    letra = texto.charAt(i);
    if(i==texto.length-1){
        document.write(letra);
    }else{
        document.write(letra + "-")
    }
}

/**
 * Realiza un script que cuente el número de vocales que tiene un texto.

 */

let c = 0
for(let i =0; i<texto.length;i++){
    letra = texto.charAt(i)
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        c++;
    }
}
document.write("<br>","La cantidad de vocales es de: ", c)

/**
 * 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

 */
document.write("<br>","EL TEXTO AL REVES ES: ")
for(let i=texto.length-1; i>=0; i--){
    letra=texto.charAt(i);
    document.write(letra)
}

/**
 * 17- Realiza un script que muestre la posición de la primera vocal de un texto
introducido por teclado.
Ejemplo:
Input: Hola mundo                Output: la vocal ‘o’ está en la posición 1

 */

let posicion;

for(let i=0; i<texto.length;i++){
    letra=texto.charAt(i)
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        posicion = i;
        break;
    }
}
document.write("<br>","la posicion de la primer vocal es: ", posicion);

