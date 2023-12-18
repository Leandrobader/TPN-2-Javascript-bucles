/**
 * 3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
 salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
 guión-.
 */

 let cadena= "";
 let cadenaConGuion=[];

do {
    cadena = prompt("Ingrese un texto");
    cadenaConGuion.push(cadena);
} while (confirm("Desea continuar operando?"));

alert(cadenaConGuion.join("-"));
document.write(cadenaConGuion.join("-"));
