/**
 * 9-Creaunscript queescriba losnúmerosdel 1al 500, que indiquecuálesson
 múltiplos de 4 y de 9 y que cada 5 líneasmuestre una línea horizontal. Por
 ejemplo:
 1
 2
 3
 4(Múltiplode4)
 5
————————————————————
6
 7
 8(Múltiplode4)
 9(Múltiplode9)
 10

 */
let c = 1;
 for(let i = 1; i<= 500; i++){
    if(i % 4 === 0){
        document.write(i,":(Multiplo de 4)")
    }else if(i % 9 === 0){
        document.write(i,":(Multiplo de 9)")
    }else{
        document.write(i);
    }
    document.write("<br>")
    if(c===5){
        document.write("------------------------------------------------------------")
        document.write("<br>")
        c=0;
    }
    c++
 }