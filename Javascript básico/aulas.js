/*

OPERADORES DE COMPARAÇÃO

> MAIOR QUE
>= MAIOR QUE OU IGUAL A QUE

< MENOR QUE
<= MENOR QUE OU IGUAL QUE 

== IGUALDADE (VALOR)
=== IGUALDADE ESTRITA (VALOR E TIPO )

!= DIFERNTE  (VALOR)
!== DIFERENTE (VALOR E TIPO )

*/

//-----------------------------------------------------
/*

OPERADORES LOGICOS

&& -> AND/E
|| -> OR/OU
! -> NOT/NAO

*/
//-------------------------------------------------------
/* SHORT - CIRCUIT 

&& -> FALSE && TRUE -> FALSE "VALOR MESMO"
|| -> TRUE && FALSE -> VERDADE

*/

//-------------------------------------------------------
 

/* IF - ELSE IF - ELSE */ 

 const hora = 10; 

 if(hora >= 0 && hora <= 11){
    console.log('Bom dia');
 }else if (hora >= 12 && hora <= 17 ){
    console.log('Boa Tarde');
 }else if (hora >= 18 && hora <= 23){
    console.log('Boa Noite');
 }else{
    console.log("Esse horario nao esxiste");
 }