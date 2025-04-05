grammar SpecscriptGrammar; 

/**
 * Analizador Sintáctico (Parser)
 */

prog: caracteristica (antecedentes)? (escenario | esquemaEscenario)*  EOF;
escenario: ('Ejemplo'|'Escenario')':' ESPACIO* nombreEscenario NUEVALINEA+ escEsp+;
esquemaEscenario: 'Esquema del escenario:' ESPACIO+ desEsqEscenario NUEVALINEA+ esqEscEsp+ NUEVALINEA+ 'Ejemplos:' NUEVALINEA+ (tablaEncabezado | lista | clavevalor); 
caracteristica: ('Caracteristica'|'Requisito de Negocio'|'Requisito')':' nombreCaracteristica (NUEVALINEA+ desCaracteristica)? NUEVALINEA*;  
nombreCaracteristica:  (PALABRA | NUMERO |ESPACIO+)+ CLASEPRE nombreClase=PALABRA; //(NUMERO | PALABRA | ESPACIO)+ ;
antecedentes: 'Antecedentes:' ESPACIO* nombreAntecedentes NUEVALINEA+ antecedenteEsp+ ;
nombreAntecedentes: (NUMERO | PALABRA | ESPACIO)+;
antecedenteEsp: 
  ESPECIDENT (PALABRA | ESPACIO+)* ANTEPREVAR nombreVariable=PALABRA ESPACIO* NUEVALINEA* #VariableExterna
		| ESPECIDENT (PALABRA | NUMERO |ESPACIO+)+ NUEVALINEA* #NombreAntEspec;
escEsp: ESPECIDENT ESPACIO+ desEspecificacion NUEVALINEA*;
esqEscEsp: ESPECIDENT ESPACIO+ desEsqEspecificacion NUEVALINEA* 'Ejemplos:' NUEVALINEA+ tablaEncabezado;
desCaracteristica: (NUMERO | PALABRA | ESPACIO)+;
//desAntecedente: (NUMERO | PALABRA | ESPACIO)+;
nombreEscenario: (NUMERO | PALABRA | ESPACIO)+; //nombre Escenario
desEspecificacion: ACCIONPRE funcion=PALABRA ESPACIO+ datos #OperacionSimple
                  | (FUNAGREPRE | 'luego 'ACCIONPRE) funcion=PALABRA ESPACIO+ datos #FuncionAgregacion
                  | oracion? RESPRE ESPACIO+ (PROPOSE ESPACIO+ funcion=PALABRA ESPACIO+)?  DEBERIASER ESPACIO+ dato #ComprobarResultado
                  | oracion? RESPRE ESPACIO+ PROPOSE ESPACIO+ funcion=PALABRA ESPACIO+ variables ESPACIO+ DEBERIASER ESPACIO+ dato #ComprobarFuncionVariables
                  | QUETENGO nombreVariable=PALABRA ESPACIO+ dato #AsignacionVariable
                  |(NUMERO | PALABRA | ESPACIO)+ #Defecto
                  ; 
desEsqEscenario: (NUMERO | PALABRA | ESPACIO)+;
desEsqEspecificacion: (NUMERO | variableEsquema | PALABRA | ESPACIO)+;

oracion: (NUMERO | PALABRA | ESPACIO)+;

tablaEncabezado: encabezado filasDatos; 
encabezado: FILATABLA;
filasDatos: FILATABLA+;

lista: ('|' ESPACIO* CELDA NUEVALINEA+)+;

clavevalor: ('|' ESPACIO* clave valor NUEVALINEA+)+; 
clave: CELDA;
valor: CELDA;

operacion: PALABRA;
variableEsquema: '<' PALABRA '>';
dato: (NUMERO | PALABRA | CADENA );
datos: (PALABRA | CADENA | NUMERO) ((ESPACIO* ',' ESPACIO* (PALABRA | CADENA | NUMERO) )* ESPACIO+ 'y' ESPACIO+ (PALABRA | CADENA | NUMERO))?;
variables: PALABRA ((ESPACIO* ',' ESPACIO* PALABRA  )* ESPACIO+ 'y' ESPACIO+ PALABRA )?;
//NUMERO (ESPACIO* ',' ESPACIO* NUMERO)* ESPACIO+ 'y' ESPACIO+ NUMERO

/**
 * Lexemas
 */

fragment MINUSCULA  : [a-z] ;
fragment MAYUSCULA  : [A-Z] ;
fragment DIGITO : [0-9] ;
fragment ARTICULO : ' '('el'|'la'|'un'|'una')' ';
//fragment ORACION : (PALABRA | ESPACIO+ )+ ;
NUMERO : '-'? DIGITO+ ([.] DIGITO+)? ;
NUEVALINEA  : ('\r'? '\n' | '\r')+ ESPACIO* ;
ESPECIDENT: ('*'|'Dado'|'Dada'|'Dados'|'Dadas'|'Cuando'|'Entonces'|'Y'|'E'|'Pero');
ANTEPREVAR: ('he elegido '|'tengo' ARTICULO );
CLASEPRE: 'en' ARTICULO ;
ACCIONPRE: 'se ' 'aplica la funcion '?;
FUNAGREPRE: 'a '? 'ese resultado se le ' 'aplica la funcion '?;
PROPOSE: ('de la'|'del');
RESPRE: 'el resultado';
DEBERIASER: 'deberia de ser';
QUETENGO: ('que '|'tambien ')'tengo' ARTICULO;
PALABRA : (MAYUSCULA | MINUSCULA)+;
ESPACIO : (' '|'\t');
TEXTO : .+?;
//ARRAYL : (NUMERO | PALABRA)(ESPACIO* ',' ESPACIO+ (NUMERO|PALABRA))* ESPACIO+ 'y' ESPACIO+ (NUMERO|PALABRA);
CADENA : '"' .*? '"';
CELDA : ESPACIO* (NUMERO) ESPACIO* '|';
//FILATABLA : ('|' ESPACIO* (NUMERO | ORACION) ESPACIO*)+ '|'
FILATABLA : '|' (CELDA)+ NUEVALINEA+;
//IDENMOD :  ESPACIO+ /*(PALABRA|ESPACIO+)+*/ ORACION EN ESPACIO+ ARTICULO ESPACIO+ ; 
//COMMENT : '/*' .*? '*/' -> skip 
//	| '//' .*? ('\r'? '\n' | '\r') ->skip ;
