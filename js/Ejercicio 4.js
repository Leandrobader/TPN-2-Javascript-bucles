/**
 * 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
 número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
 “cancelar” deberá indicarse la suma total de los números introducidos.
 */
let numeros;
let suma=0;

//numeros=parseInt(prompt("Ingrese un numero"));
do{
do {
    numeros=parseInt(prompt("Ingrese un numero"));
    console.log(numeros);
    if (isNaN(numeros)) {
        alert("El valor ingresado no es un numero")
    }else{
        suma= suma + numeros
    }
    
} while (isNaN(numeros));

}while(confirm("desea seguir ingresando numeros?"))  

alert("La suma de todos los numeros ingresados es de: ", suma);
document.write("La suma de todos los numeros ingresados es de: ", suma);