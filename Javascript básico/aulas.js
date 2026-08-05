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


/* OPERADOR TERNARIO --------------------------

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


/* OBJETO DATE -------------------------

const data = new Date(); //a,m,d,h,min,seg,miseg // funcão construtora 
console.log(data.toString());
*/


/*Switch/case-------------------------- 

function getDiaSemanaTexto(diaSemana){
   let diaSemanaTexto;

   switch(diaSemana){
   case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto;

      case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;

      case 2:
      diaSemanaTexto = 'Terca';
     return diaSemanaTexto;

      case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;

      case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;

      case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;

      case 6:
      diaSemanaTexto = 'Sabado';
      return diaSemanaTexto;

      default:
         diaSemanaTexto = '';
         return diaSemanaTexto;
}
const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);
*/

// Atribuição via desestruturação (Arrays)

/*let a ="A";
let b = 'B';
let c = 'C';

const letras =  [b,c,a];
[a,b,c] = letras;

console.log(a,b,c);*/

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const [ primeiroNumero , segundoNumero,... resto] = numero
//const [um, , tres , , cinco, , sete] = numero 
//console.log(primeiroNumero , segundoNumero);
//console.log(resto);
//console.log(um ,tres, cinco);


