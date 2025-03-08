grammar SpecscriptGrammar; 

/**
 * Analizador Sintáctico (Parser)
 */

prog: caracteristica (antecedentes)? (escenario | esquemaEscenario)*  EOF;
escenario: ('Ejemplo'|'Escenario')':' ESPACIO+ desEscenario NUEVALINEA+ escEsp+;
esquemaEscenario: 'Esquema del escenario:' ESPACIO+ desEsqEscenario NUEVALINEA+ esqEscEsp+ NUEVALINEA+ 'Ejemplos:' NUEVALINEA+ (tablaEncabezado | lista | clavevalor); 
caracteristica: ('Caracteristica'|'Requisito de Negocio'|'Requisito')':' nombreCaracteristica (NUEVALINEA+ desCaracteristica)? NUEVALINEA*;  
nombreCaracteristica:   (NUMERO | PALABRA | ESPACIO)+ ;
antecedentes: 'Antecedentes:' ESPACIO+ desAntecedente;
escEsp: ('*'|'Dado'|'Dada'|'Dados'|'Dadas'|'Cuando'|'Entonces'|'Y'|'E'|'Pero') ESPACIO+ desEspecificacion NUEVALINEA*;
esqEscEsp: ('*'|'Dado'|'Dada'|'Dados'|'Dadas'|'Cuando'|'Entonces'|'Y'|'E'|'Pero') ESPACIO+ desEsqEspecificacion NUEVALINEA*;
desCaracteristica: (NUMERO | PALABRA | ESPACIO)+;
desAntecedente: (NUMERO | PALABRA | ESPACIO)+;
desEscenario: (NUMERO | PALABRA | ESPACIO)+;
desEsqEscenario: (NUMERO | PALABRA | ESPACIO)+;
desEspecificacion: (NUMERO | PALABRA | ESPACIO)+;
desEsqEspecificacion: (NUMERO | PALABRA | ESPACIO)+;

tablaEncabezado: encabezado FILATABLA+; 
encabezado: FILATABLA;

lista: ('|' ESPACIO* CELDA NUEVALINEA+)+;

clavevalor: ('|' ESPACIO* clave valor NUEVALINEA+)+; 
clave: CELDA;
valor: CELDA;

operacion: PALABRA;
nombreModulo: PALABRA;
datos: (NUMERO | CADENA );

/**
 * Lexemas
 */

fragment MINUSCULA  : [a-z] ;
fragment MAYUSCULA  : [A-Z] ;
fragment DIGITO : [0-9] ;
fragment ORACION : (PALABRA | ESPACIO+ )+ ;
fragment ARTICULO : ('el'|'la');
fragment EN : 'en';
NUMERO : '-'? DIGITO+ ([.] DIGITO+)? ;
NUEVALINEA  : ('\r'? '\n' | '\r')+ ESPACIO* ;
PALABRA : (MAYUSCULA | MINUSCULA)+;
ESPACIO : (' '|'\t');
//ARRAYL : (NUMERO | PALABRA)(ESPACIO* ',' ESPACIO+ (NUMERO|PALABRA))* ESPACIO+ 'y' ESPACIO+ (NUMERO|PALABRA);
CADENA : '"' .*? '"';
CELDA : ESPACIO* (NUMERO) ESPACIO* '|';
//FILATABLA : ('|' ESPACIO* (NUMERO | ORACION) ESPACIO*)+ '|'
FILATABLA : '|' (CELDA)+ NUEVALINEA+;
//IDENMOD :  ESPACIO+ /*(PALABRA|ESPACIO+)+*/ ORACION EN ESPACIO+ ARTICULO ESPACIO+ ; 
