grammar ConfigLang;

// Reglas sintácticas
configuracion : CONFIGURACION nombre LBRACE secciones? RBRACE ;
secciones     : seccion+ ;
seccion       : SECCION nombre LBRACE parametros? RBRACE ;
parametros    : parametro+ ;
parametro     : nombre ASSIGN valor SEMI ;

valor         : numero
              | cadena
              | booleano ;

nombre        : ID ;

numero        : NUMERO ;
cadena        : CADENA ;
booleano      : VERDADERO | FALSO ;

// Tokens léxicos
CONFIGURACION : 'configuracion' ;
SECCION       : 'seccion' ;
VERDADERO     : 'verdadero' ;
FALSO         : 'falso' ;
ASSIGN        : '=' ;
SEMI          : ';' ;
LBRACE        : '{' ;
RBRACE        : '}' ;

ID            : LETRA (LETRA | DIGITO | '_')* ;
NUMERO        : '-'? DIGITO+ ;
CADENA        : '"' (CARACTER)* '"' ;

fragment CARACTER : LETRA | DIGITO | SIMBOLO ;
fragment LETRA    : [a-zA-Z] ;
fragment DIGITO   : [0-9] ;
fragment SIMBOLO  : ':' | ';' | '!' | '?' | '.' | ',' ;

WS : [ \t\r\n]+ -> skip ;
