// Generated from c:/Users/HP/mi-analizador/ConfigLang.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ConfigLangListener from './ConfigLangListener.js';
import ConfigLangVisitor from './ConfigLangVisitor.js';

const serializedATN = [4,1,12,65,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,3,0,25,8,0,1,0,1,
0,1,1,4,1,30,8,1,11,1,12,1,31,1,2,1,2,1,2,1,2,3,2,38,8,2,1,2,1,2,1,3,4,3,
43,8,3,11,3,12,3,44,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,55,8,5,1,6,1,6,1,
7,1,7,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,3,4,60,
0,20,1,0,0,0,2,29,1,0,0,0,4,33,1,0,0,0,6,42,1,0,0,0,8,46,1,0,0,0,10,54,1,
0,0,0,12,56,1,0,0,0,14,58,1,0,0,0,16,60,1,0,0,0,18,62,1,0,0,0,20,21,5,1,
0,0,21,22,3,12,6,0,22,24,5,7,0,0,23,25,3,2,1,0,24,23,1,0,0,0,24,25,1,0,0,
0,25,26,1,0,0,0,26,27,5,8,0,0,27,1,1,0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,
31,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,34,5,2,0,0,34,35,
3,12,6,0,35,37,5,7,0,0,36,38,3,6,3,0,37,36,1,0,0,0,37,38,1,0,0,0,38,39,1,
0,0,0,39,40,5,8,0,0,40,5,1,0,0,0,41,43,3,8,4,0,42,41,1,0,0,0,43,44,1,0,0,
0,44,42,1,0,0,0,44,45,1,0,0,0,45,7,1,0,0,0,46,47,3,12,6,0,47,48,5,5,0,0,
48,49,3,10,5,0,49,50,5,6,0,0,50,9,1,0,0,0,51,55,3,14,7,0,52,55,3,16,8,0,
53,55,3,18,9,0,54,51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,11,1,0,0,0,56,
57,5,9,0,0,57,13,1,0,0,0,58,59,5,10,0,0,59,15,1,0,0,0,60,61,5,11,0,0,61,
17,1,0,0,0,62,63,7,0,0,0,63,19,1,0,0,0,5,24,31,37,44,54];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ConfigLangParser extends antlr4.Parser {

    static grammarFileName = "ConfigLang.g4";
    static literalNames = [ null, "'configuracion'", "'seccion'", "'verdadero'", 
                            "'falso'", "'='", "';'", "'{'", "'}'" ];
    static symbolicNames = [ null, "CONFIGURACION", "SECCION", "VERDADERO", 
                             "FALSO", "ASSIGN", "SEMI", "LBRACE", "RBRACE", 
                             "ID", "NUMERO", "CADENA", "WS" ];
    static ruleNames = [ "configuracion", "secciones", "seccion", "parametros", 
                         "parametro", "valor", "nombre", "numero", "cadena", 
                         "booleano" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ConfigLangParser.ruleNames;
        this.literalNames = ConfigLangParser.literalNames;
        this.symbolicNames = ConfigLangParser.symbolicNames;
    }



	configuracion() {
	    let localctx = new ConfiguracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ConfigLangParser.RULE_configuracion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(ConfigLangParser.CONFIGURACION);
	        this.state = 21;
	        this.nombre();
	        this.state = 22;
	        this.match(ConfigLangParser.LBRACE);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 23;
	            this.secciones();
	        }

	        this.state = 26;
	        this.match(ConfigLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	secciones() {
	    let localctx = new SeccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ConfigLangParser.RULE_secciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 28;
	            this.seccion();
	            this.state = 31; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seccion() {
	    let localctx = new SeccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ConfigLangParser.RULE_seccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(ConfigLangParser.SECCION);
	        this.state = 34;
	        this.nombre();
	        this.state = 35;
	        this.match(ConfigLangParser.LBRACE);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 36;
	            this.parametros();
	        }

	        this.state = 39;
	        this.match(ConfigLangParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ConfigLangParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 41;
	            this.parametro();
	            this.state = 44; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ConfigLangParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.nombre();
	        this.state = 47;
	        this.match(ConfigLangParser.ASSIGN);
	        this.state = 48;
	        this.valor();
	        this.state = 49;
	        this.match(ConfigLangParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ConfigLangParser.RULE_valor);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.numero();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.cadena();
	            break;
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ConfigLangParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(ConfigLangParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ConfigLangParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(ConfigLangParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ConfigLangParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(ConfigLangParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ConfigLangParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ConfigLangParser.EOF = antlr4.Token.EOF;
ConfigLangParser.CONFIGURACION = 1;
ConfigLangParser.SECCION = 2;
ConfigLangParser.VERDADERO = 3;
ConfigLangParser.FALSO = 4;
ConfigLangParser.ASSIGN = 5;
ConfigLangParser.SEMI = 6;
ConfigLangParser.LBRACE = 7;
ConfigLangParser.RBRACE = 8;
ConfigLangParser.ID = 9;
ConfigLangParser.NUMERO = 10;
ConfigLangParser.CADENA = 11;
ConfigLangParser.WS = 12;

ConfigLangParser.RULE_configuracion = 0;
ConfigLangParser.RULE_secciones = 1;
ConfigLangParser.RULE_seccion = 2;
ConfigLangParser.RULE_parametros = 3;
ConfigLangParser.RULE_parametro = 4;
ConfigLangParser.RULE_valor = 5;
ConfigLangParser.RULE_nombre = 6;
ConfigLangParser.RULE_numero = 7;
ConfigLangParser.RULE_cadena = 8;
ConfigLangParser.RULE_booleano = 9;

class ConfiguracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_configuracion;
    }

	CONFIGURACION() {
	    return this.getToken(ConfigLangParser.CONFIGURACION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LBRACE() {
	    return this.getToken(ConfigLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ConfigLangParser.RBRACE, 0);
	};

	secciones() {
	    return this.getTypedRuleContext(SeccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterConfiguracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitConfiguracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitConfiguracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_secciones;
    }

	seccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionContext);
	    } else {
	        return this.getTypedRuleContext(SeccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterSecciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitSecciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitSecciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_seccion;
    }

	SECCION() {
	    return this.getToken(ConfigLangParser.SECCION, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LBRACE() {
	    return this.getToken(ConfigLangParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ConfigLangParser.RBRACE, 0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterSeccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitSeccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitSeccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_parametro;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	ASSIGN() {
	    return this.getToken(ConfigLangParser.ASSIGN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(ConfigLangParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(ConfigLangParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(ConfigLangParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(ConfigLangParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConfigLangParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(ConfigLangParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(ConfigLangParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConfigLangListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConfigLangVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ConfigLangParser.ConfiguracionContext = ConfiguracionContext; 
ConfigLangParser.SeccionesContext = SeccionesContext; 
ConfigLangParser.SeccionContext = SeccionContext; 
ConfigLangParser.ParametrosContext = ParametrosContext; 
ConfigLangParser.ParametroContext = ParametroContext; 
ConfigLangParser.ValorContext = ValorContext; 
ConfigLangParser.NombreContext = NombreContext; 
ConfigLangParser.NumeroContext = NumeroContext; 
ConfigLangParser.CadenaContext = CadenaContext; 
ConfigLangParser.BooleanoContext = BooleanoContext; 
