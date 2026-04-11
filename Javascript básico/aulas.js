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
 

/* IF - ELSE IF - ELSE  

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
 
*/


/* OPERADOR TERNARIO 

-> (condicão) ? 'Valor verdadeiro : 'Valor falso;

// ex normal 
const pontuacaoUsuario = 1000:

if (pontuacaoUsuario >= 1000){
   console.log('Usuario VIP');
} else{
   console.log('Usuario normal');
}

// ex Ternario 

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario Normal';
*/


/* OBJETO DATE*/ 

const data = new Date(); //a,m,d,h,min,seg,miseg // funcão construtora 
console.log(data.toString());
