// Generated from SpecscriptGrammar.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SpecscriptGrammarListener } from "./SpecscriptGrammarListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SpecscriptGrammarParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly NUMERO = 21;
    public static readonly NUEVALINEA = 22;
    public static readonly PALABRA = 23;
    public static readonly ESPACIO = 24;
    public static readonly CADENA = 25;
    public static readonly CELDA = 26;
    public static readonly FILATABLA = 27;
    public static readonly RULE_prog = 0;
    public static readonly RULE_escenario = 1;
    public static readonly RULE_esquemaEscenario = 2;
    public static readonly RULE_caracteristica = 3;
    public static readonly RULE_nombreCaracteristica = 4;
    public static readonly RULE_antecedentes = 5;
    public static readonly RULE_escEsp = 6;
    public static readonly RULE_esqEscEsp = 7;
    public static readonly RULE_desCaracteristica = 8;
    public static readonly RULE_desAntecedente = 9;
    public static readonly RULE_desEscenario = 10;
    public static readonly RULE_desEsqEscenario = 11;
    public static readonly RULE_desEspecificacion = 12;
    public static readonly RULE_desEsqEspecificacion = 13;
    public static readonly RULE_tablaEncabezado = 14;
    public static readonly RULE_encabezado = 15;
    public static readonly RULE_lista = 16;
    public static readonly RULE_clavevalor = 17;
    public static readonly RULE_clave = 18;
    public static readonly RULE_valor = 19;
    public static readonly RULE_operacion = 20;
    public static readonly RULE_nombreModulo = 21;
    public static readonly RULE_datos = 22;

    public static readonly literalNames = [
        null, "'Ejemplo'", "'Escenario'", "':'", "'Esquema del escenario:'", 
        "'Ejemplos:'", "'Caracteristica'", "'Requisito de Negocio'", "'Requisito'", 
        "'Antecedentes:'", "'*'", "'Dado'", "'Dada'", "'Dados'", "'Dadas'", 
        "'Cuando'", "'Entonces'", "'Y'", "'E'", "'Pero'", "'|'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "NUMERO", 
        "NUEVALINEA", "PALABRA", "ESPACIO", "CADENA", "CELDA", "FILATABLA"
    ];
    public static readonly ruleNames = [
        "prog", "escenario", "esquemaEscenario", "caracteristica", "nombreCaracteristica", 
        "antecedentes", "escEsp", "esqEscEsp", "desCaracteristica", "desAntecedente", 
        "desEscenario", "desEsqEscenario", "desEspecificacion", "desEsqEspecificacion", 
        "tablaEncabezado", "encabezado", "lista", "clavevalor", "clave", 
        "valor", "operacion", "nombreModulo", "datos",
    ];

    public get grammarFileName(): string { return "SpecscriptGrammar.g4"; }
    public get literalNames(): (string | null)[] { return SpecscriptGrammarParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SpecscriptGrammarParser.symbolicNames; }
    public get ruleNames(): string[] { return SpecscriptGrammarParser.ruleNames; }
    public get serializedATN(): number[] { return SpecscriptGrammarParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SpecscriptGrammarParser._ATN, SpecscriptGrammarParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SpecscriptGrammarParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 46;
            this.caracteristica();
            this.state = 48;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 47;
                this.antecedentes();
                }
            }

            this.state = 54;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 22) !== 0)) {
                {
                this.state = 52;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case SpecscriptGrammarParser.T__0:
                case SpecscriptGrammarParser.T__1:
                    {
                    this.state = 50;
                    this.escenario();
                    }
                    break;
                case SpecscriptGrammarParser.T__3:
                    {
                    this.state = 51;
                    this.esquemaEscenario();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                this.state = 56;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 57;
            this.match(SpecscriptGrammarParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public escenario(): EscenarioContext {
        let localContext = new EscenarioContext(this.context, this.state);
        this.enterRule(localContext, 2, SpecscriptGrammarParser.RULE_escenario);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 59;
            _la = this.tokenStream.LA(1);
            if(!(_la === 1 || _la === 2)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 60;
            this.match(SpecscriptGrammarParser.T__2);
            this.state = 62;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 61;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 64;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 66;
            this.desEscenario();
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 67;
                this.match(SpecscriptGrammarParser.NUEVALINEA);
                }
                }
                this.state = 70;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 22);
            this.state = 73;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 72;
                this.escEsp();
                }
                }
                this.state = 75;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public esquemaEscenario(): EsquemaEscenarioContext {
        let localContext = new EsquemaEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 4, SpecscriptGrammarParser.RULE_esquemaEscenario);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 77;
            this.match(SpecscriptGrammarParser.T__3);
            this.state = 79;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 78;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 81;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 83;
            this.desEsqEscenario();
            this.state = 85;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 84;
                this.match(SpecscriptGrammarParser.NUEVALINEA);
                }
                }
                this.state = 87;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 22);
            this.state = 90;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 89;
                this.esqEscEsp();
                }
                }
                this.state = 92;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0));
            this.state = 95;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 94;
                this.match(SpecscriptGrammarParser.NUEVALINEA);
                }
                }
                this.state = 97;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 22);
            this.state = 99;
            this.match(SpecscriptGrammarParser.T__4);
            this.state = 101;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 100;
                this.match(SpecscriptGrammarParser.NUEVALINEA);
                }
                }
                this.state = 103;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 22);
            this.state = 108;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                {
                this.state = 105;
                this.tablaEncabezado();
                }
                break;
            case 2:
                {
                this.state = 106;
                this.lista();
                }
                break;
            case 3:
                {
                this.state = 107;
                this.clavevalor();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public caracteristica(): CaracteristicaContext {
        let localContext = new CaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 6, SpecscriptGrammarParser.RULE_caracteristica);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 110;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 111;
            this.match(SpecscriptGrammarParser.T__2);
            this.state = 112;
            this.nombreCaracteristica();
            this.state = 119;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context) ) {
            case 1:
                {
                this.state = 114;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 113;
                    this.match(SpecscriptGrammarParser.NUEVALINEA);
                    }
                    }
                    this.state = 116;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 22);
                this.state = 118;
                this.desCaracteristica();
                }
                break;
            }
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 22) {
                {
                {
                this.state = 121;
                this.match(SpecscriptGrammarParser.NUEVALINEA);
                }
                }
                this.state = 126;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nombreCaracteristica(): NombreCaracteristicaContext {
        let localContext = new NombreCaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 8, SpecscriptGrammarParser.RULE_nombreCaracteristica);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 128;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 127;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public antecedentes(): AntecedentesContext {
        let localContext = new AntecedentesContext(this.context, this.state);
        this.enterRule(localContext, 10, SpecscriptGrammarParser.RULE_antecedentes);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 132;
            this.match(SpecscriptGrammarParser.T__8);
            this.state = 134;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 133;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 136;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 138;
            this.desAntecedente();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public escEsp(): EscEspContext {
        let localContext = new EscEspContext(this.context, this.state);
        this.enterRule(localContext, 12, SpecscriptGrammarParser.RULE_escEsp);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 140;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 142;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 141;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 144;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 146;
            this.desEspecificacion();
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 22) {
                {
                {
                this.state = 147;
                this.match(SpecscriptGrammarParser.NUEVALINEA);
                }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public esqEscEsp(): EsqEscEspContext {
        let localContext = new EsqEscEspContext(this.context, this.state);
        this.enterRule(localContext, 14, SpecscriptGrammarParser.RULE_esqEscEsp);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 155;
            this.errorHandler.sync(this);
            alternative = 1;
            do {
                switch (alternative) {
                case 1:
                    {
                    {
                    this.state = 154;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 157;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
            this.state = 159;
            this.desEsqEspecificacion();
            this.state = 163;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 160;
                    this.match(SpecscriptGrammarParser.NUEVALINEA);
                    }
                    }
                }
                this.state = 165;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public desCaracteristica(): DesCaracteristicaContext {
        let localContext = new DesCaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 16, SpecscriptGrammarParser.RULE_desCaracteristica);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 167;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 166;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 169;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public desAntecedente(): DesAntecedenteContext {
        let localContext = new DesAntecedenteContext(this.context, this.state);
        this.enterRule(localContext, 18, SpecscriptGrammarParser.RULE_desAntecedente);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 172;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 171;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 174;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public desEscenario(): DesEscenarioContext {
        let localContext = new DesEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 20, SpecscriptGrammarParser.RULE_desEscenario);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 176;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 179;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public desEsqEscenario(): DesEsqEscenarioContext {
        let localContext = new DesEsqEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 22, SpecscriptGrammarParser.RULE_desEsqEscenario);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 182;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 181;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 184;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public desEspecificacion(): DesEspecificacionContext {
        let localContext = new DesEspecificacionContext(this.context, this.state);
        this.enterRule(localContext, 24, SpecscriptGrammarParser.RULE_desEspecificacion);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 186;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 189;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public desEsqEspecificacion(): DesEsqEspecificacionContext {
        let localContext = new DesEsqEspecificacionContext(this.context, this.state);
        this.enterRule(localContext, 26, SpecscriptGrammarParser.RULE_desEsqEspecificacion);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 192;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 191;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                }
                }
                this.state = 194;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 27262976) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public tablaEncabezado(): TablaEncabezadoContext {
        let localContext = new TablaEncabezadoContext(this.context, this.state);
        this.enterRule(localContext, 28, SpecscriptGrammarParser.RULE_tablaEncabezado);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 196;
            this.encabezado();
            this.state = 198;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 197;
                this.match(SpecscriptGrammarParser.FILATABLA);
                }
                }
                this.state = 200;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 27);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public encabezado(): EncabezadoContext {
        let localContext = new EncabezadoContext(this.context, this.state);
        this.enterRule(localContext, 30, SpecscriptGrammarParser.RULE_encabezado);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.match(SpecscriptGrammarParser.FILATABLA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lista(): ListaContext {
        let localContext = new ListaContext(this.context, this.state);
        this.enterRule(localContext, 32, SpecscriptGrammarParser.RULE_lista);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 217;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 204;
                this.match(SpecscriptGrammarParser.T__19);
                this.state = 208;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 24) {
                    {
                    {
                    this.state = 205;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    this.state = 210;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 211;
                this.match(SpecscriptGrammarParser.CELDA);
                this.state = 213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 212;
                    this.match(SpecscriptGrammarParser.NUEVALINEA);
                    }
                    }
                    this.state = 215;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 22);
                }
                }
                this.state = 219;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clavevalor(): ClavevalorContext {
        let localContext = new ClavevalorContext(this.context, this.state);
        this.enterRule(localContext, 34, SpecscriptGrammarParser.RULE_clavevalor);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 235;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 221;
                this.match(SpecscriptGrammarParser.T__19);
                this.state = 225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 24) {
                    {
                    {
                    this.state = 222;
                    this.match(SpecscriptGrammarParser.ESPACIO);
                    }
                    }
                    this.state = 227;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 228;
                this.clave();
                this.state = 229;
                this.valor();
                this.state = 231;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 230;
                    this.match(SpecscriptGrammarParser.NUEVALINEA);
                    }
                    }
                    this.state = 233;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 22);
                }
                }
                this.state = 237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 20);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public clave(): ClaveContext {
        let localContext = new ClaveContext(this.context, this.state);
        this.enterRule(localContext, 36, SpecscriptGrammarParser.RULE_clave);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 239;
            this.match(SpecscriptGrammarParser.CELDA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public valor(): ValorContext {
        let localContext = new ValorContext(this.context, this.state);
        this.enterRule(localContext, 38, SpecscriptGrammarParser.RULE_valor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 241;
            this.match(SpecscriptGrammarParser.CELDA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public operacion(): OperacionContext {
        let localContext = new OperacionContext(this.context, this.state);
        this.enterRule(localContext, 40, SpecscriptGrammarParser.RULE_operacion);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 243;
            this.match(SpecscriptGrammarParser.PALABRA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nombreModulo(): NombreModuloContext {
        let localContext = new NombreModuloContext(this.context, this.state);
        this.enterRule(localContext, 42, SpecscriptGrammarParser.RULE_nombreModulo);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 245;
            this.match(SpecscriptGrammarParser.PALABRA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public datos(): DatosContext {
        let localContext = new DatosContext(this.context, this.state);
        this.enterRule(localContext, 44, SpecscriptGrammarParser.RULE_datos);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 247;
            _la = this.tokenStream.LA(1);
            if(!(_la === 21 || _la === 25)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,27,250,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,1,0,1,0,3,0,49,8,0,1,0,1,0,5,0,53,8,0,10,
        0,12,0,56,9,0,1,0,1,0,1,1,1,1,1,1,4,1,63,8,1,11,1,12,1,64,1,1,1,
        1,4,1,69,8,1,11,1,12,1,70,1,1,4,1,74,8,1,11,1,12,1,75,1,2,1,2,4,
        2,80,8,2,11,2,12,2,81,1,2,1,2,4,2,86,8,2,11,2,12,2,87,1,2,4,2,91,
        8,2,11,2,12,2,92,1,2,4,2,96,8,2,11,2,12,2,97,1,2,1,2,4,2,102,8,2,
        11,2,12,2,103,1,2,1,2,1,2,3,2,109,8,2,1,3,1,3,1,3,1,3,4,3,115,8,
        3,11,3,12,3,116,1,3,3,3,120,8,3,1,3,5,3,123,8,3,10,3,12,3,126,9,
        3,1,4,4,4,129,8,4,11,4,12,4,130,1,5,1,5,4,5,135,8,5,11,5,12,5,136,
        1,5,1,5,1,6,1,6,4,6,143,8,6,11,6,12,6,144,1,6,1,6,5,6,149,8,6,10,
        6,12,6,152,9,6,1,7,1,7,4,7,156,8,7,11,7,12,7,157,1,7,1,7,5,7,162,
        8,7,10,7,12,7,165,9,7,1,8,4,8,168,8,8,11,8,12,8,169,1,9,4,9,173,
        8,9,11,9,12,9,174,1,10,4,10,178,8,10,11,10,12,10,179,1,11,4,11,183,
        8,11,11,11,12,11,184,1,12,4,12,188,8,12,11,12,12,12,189,1,13,4,13,
        193,8,13,11,13,12,13,194,1,14,1,14,4,14,199,8,14,11,14,12,14,200,
        1,15,1,15,1,16,1,16,5,16,207,8,16,10,16,12,16,210,9,16,1,16,1,16,
        4,16,214,8,16,11,16,12,16,215,4,16,218,8,16,11,16,12,16,219,1,17,
        1,17,5,17,224,8,17,10,17,12,17,227,9,17,1,17,1,17,1,17,4,17,232,
        8,17,11,17,12,17,233,4,17,236,8,17,11,17,12,17,237,1,18,1,18,1,19,
        1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,5,1,0,1,2,1,0,6,8,
        2,0,21,21,23,24,1,0,10,19,2,0,21,21,25,25,261,0,46,1,0,0,0,2,59,
        1,0,0,0,4,77,1,0,0,0,6,110,1,0,0,0,8,128,1,0,0,0,10,132,1,0,0,0,
        12,140,1,0,0,0,14,153,1,0,0,0,16,167,1,0,0,0,18,172,1,0,0,0,20,177,
        1,0,0,0,22,182,1,0,0,0,24,187,1,0,0,0,26,192,1,0,0,0,28,196,1,0,
        0,0,30,202,1,0,0,0,32,217,1,0,0,0,34,235,1,0,0,0,36,239,1,0,0,0,
        38,241,1,0,0,0,40,243,1,0,0,0,42,245,1,0,0,0,44,247,1,0,0,0,46,48,
        3,6,3,0,47,49,3,10,5,0,48,47,1,0,0,0,48,49,1,0,0,0,49,54,1,0,0,0,
        50,53,3,2,1,0,51,53,3,4,2,0,52,50,1,0,0,0,52,51,1,0,0,0,53,56,1,
        0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,
        58,5,0,0,1,58,1,1,0,0,0,59,60,7,0,0,0,60,62,5,3,0,0,61,63,5,24,0,
        0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,
        1,0,0,0,66,68,3,20,10,0,67,69,5,22,0,0,68,67,1,0,0,0,69,70,1,0,0,
        0,70,68,1,0,0,0,70,71,1,0,0,0,71,73,1,0,0,0,72,74,3,12,6,0,73,72,
        1,0,0,0,74,75,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,3,1,0,0,0,77,
        79,5,4,0,0,78,80,5,24,0,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,
        0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,85,3,22,11,0,84,86,5,22,0,0,85,
        84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,
        0,89,91,3,14,7,0,90,89,1,0,0,0,91,92,1,0,0,0,92,90,1,0,0,0,92,93,
        1,0,0,0,93,95,1,0,0,0,94,96,5,22,0,0,95,94,1,0,0,0,96,97,1,0,0,0,
        97,95,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,101,5,5,0,0,100,102,
        5,22,0,0,101,100,1,0,0,0,102,103,1,0,0,0,103,101,1,0,0,0,103,104,
        1,0,0,0,104,108,1,0,0,0,105,109,3,28,14,0,106,109,3,32,16,0,107,
        109,3,34,17,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,0,0,109,
        5,1,0,0,0,110,111,7,1,0,0,111,112,5,3,0,0,112,119,3,8,4,0,113,115,
        5,22,0,0,114,113,1,0,0,0,115,116,1,0,0,0,116,114,1,0,0,0,116,117,
        1,0,0,0,117,118,1,0,0,0,118,120,3,16,8,0,119,114,1,0,0,0,119,120,
        1,0,0,0,120,124,1,0,0,0,121,123,5,22,0,0,122,121,1,0,0,0,123,126,
        1,0,0,0,124,122,1,0,0,0,124,125,1,0,0,0,125,7,1,0,0,0,126,124,1,
        0,0,0,127,129,7,2,0,0,128,127,1,0,0,0,129,130,1,0,0,0,130,128,1,
        0,0,0,130,131,1,0,0,0,131,9,1,0,0,0,132,134,5,9,0,0,133,135,5,24,
        0,0,134,133,1,0,0,0,135,136,1,0,0,0,136,134,1,0,0,0,136,137,1,0,
        0,0,137,138,1,0,0,0,138,139,3,18,9,0,139,11,1,0,0,0,140,142,7,3,
        0,0,141,143,5,24,0,0,142,141,1,0,0,0,143,144,1,0,0,0,144,142,1,0,
        0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,150,3,24,12,0,147,149,5,
        22,0,0,148,147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,
        0,0,0,151,13,1,0,0,0,152,150,1,0,0,0,153,155,7,3,0,0,154,156,5,24,
        0,0,155,154,1,0,0,0,156,157,1,0,0,0,157,155,1,0,0,0,157,158,1,0,
        0,0,158,159,1,0,0,0,159,163,3,26,13,0,160,162,5,22,0,0,161,160,1,
        0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,15,1,0,
        0,0,165,163,1,0,0,0,166,168,7,2,0,0,167,166,1,0,0,0,168,169,1,0,
        0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,17,1,0,0,0,171,173,7,2,0,
        0,172,171,1,0,0,0,173,174,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,
        0,175,19,1,0,0,0,176,178,7,2,0,0,177,176,1,0,0,0,178,179,1,0,0,0,
        179,177,1,0,0,0,179,180,1,0,0,0,180,21,1,0,0,0,181,183,7,2,0,0,182,
        181,1,0,0,0,183,184,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,
        23,1,0,0,0,186,188,7,2,0,0,187,186,1,0,0,0,188,189,1,0,0,0,189,187,
        1,0,0,0,189,190,1,0,0,0,190,25,1,0,0,0,191,193,7,2,0,0,192,191,1,
        0,0,0,193,194,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,27,1,0,
        0,0,196,198,3,30,15,0,197,199,5,27,0,0,198,197,1,0,0,0,199,200,1,
        0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,29,1,0,0,0,202,203,5,27,
        0,0,203,31,1,0,0,0,204,208,5,20,0,0,205,207,5,24,0,0,206,205,1,0,
        0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,211,1,0,
        0,0,210,208,1,0,0,0,211,213,5,26,0,0,212,214,5,22,0,0,213,212,1,
        0,0,0,214,215,1,0,0,0,215,213,1,0,0,0,215,216,1,0,0,0,216,218,1,
        0,0,0,217,204,1,0,0,0,218,219,1,0,0,0,219,217,1,0,0,0,219,220,1,
        0,0,0,220,33,1,0,0,0,221,225,5,20,0,0,222,224,5,24,0,0,223,222,1,
        0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,228,1,
        0,0,0,227,225,1,0,0,0,228,229,3,36,18,0,229,231,3,38,19,0,230,232,
        5,22,0,0,231,230,1,0,0,0,232,233,1,0,0,0,233,231,1,0,0,0,233,234,
        1,0,0,0,234,236,1,0,0,0,235,221,1,0,0,0,236,237,1,0,0,0,237,235,
        1,0,0,0,237,238,1,0,0,0,238,35,1,0,0,0,239,240,5,26,0,0,240,37,1,
        0,0,0,241,242,5,26,0,0,242,39,1,0,0,0,243,244,5,23,0,0,244,41,1,
        0,0,0,245,246,5,23,0,0,246,43,1,0,0,0,247,248,7,4,0,0,248,45,1,0,
        0,0,34,48,52,54,64,70,75,81,87,92,97,103,108,116,119,124,130,136,
        144,150,157,163,169,174,179,184,189,194,200,208,215,219,225,233,
        237
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SpecscriptGrammarParser.__ATN) {
            SpecscriptGrammarParser.__ATN = new antlr.ATNDeserializer().deserialize(SpecscriptGrammarParser._serializedATN);
        }

        return SpecscriptGrammarParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SpecscriptGrammarParser.literalNames, SpecscriptGrammarParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SpecscriptGrammarParser.vocabulary;
    }

    private static readonly decisionsToDFA = SpecscriptGrammarParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public caracteristica(): CaracteristicaContext {
        return this.getRuleContext(0, CaracteristicaContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SpecscriptGrammarParser.EOF, 0)!;
    }
    public antecedentes(): AntecedentesContext | null {
        return this.getRuleContext(0, AntecedentesContext);
    }
    public escenario(): EscenarioContext[];
    public escenario(i: number): EscenarioContext | null;
    public escenario(i?: number): EscenarioContext[] | EscenarioContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EscenarioContext);
        }

        return this.getRuleContext(i, EscenarioContext);
    }
    public esquemaEscenario(): EsquemaEscenarioContext[];
    public esquemaEscenario(i: number): EsquemaEscenarioContext | null;
    public esquemaEscenario(i?: number): EsquemaEscenarioContext[] | EsquemaEscenarioContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EsquemaEscenarioContext);
        }

        return this.getRuleContext(i, EsquemaEscenarioContext);
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_prog;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
}


export class EscenarioContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public desEscenario(): DesEscenarioContext {
        return this.getRuleContext(0, DesEscenarioContext)!;
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public escEsp(): EscEspContext[];
    public escEsp(i: number): EscEspContext | null;
    public escEsp(i?: number): EscEspContext[] | EscEspContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EscEspContext);
        }

        return this.getRuleContext(i, EscEspContext);
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_escenario;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterEscenario) {
             listener.enterEscenario(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitEscenario) {
             listener.exitEscenario(this);
        }
    }
}


export class EsquemaEscenarioContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public desEsqEscenario(): DesEsqEscenarioContext {
        return this.getRuleContext(0, DesEsqEscenarioContext)!;
    }
    public tablaEncabezado(): TablaEncabezadoContext | null {
        return this.getRuleContext(0, TablaEncabezadoContext);
    }
    public lista(): ListaContext | null {
        return this.getRuleContext(0, ListaContext);
    }
    public clavevalor(): ClavevalorContext | null {
        return this.getRuleContext(0, ClavevalorContext);
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public esqEscEsp(): EsqEscEspContext[];
    public esqEscEsp(i: number): EsqEscEspContext | null;
    public esqEscEsp(i?: number): EsqEscEspContext[] | EsqEscEspContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EsqEscEspContext);
        }

        return this.getRuleContext(i, EsqEscEspContext);
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_esquemaEscenario;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterEsquemaEscenario) {
             listener.enterEsquemaEscenario(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitEsquemaEscenario) {
             listener.exitEsquemaEscenario(this);
        }
    }
}


export class CaracteristicaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nombreCaracteristica(): NombreCaracteristicaContext {
        return this.getRuleContext(0, NombreCaracteristicaContext)!;
    }
    public desCaracteristica(): DesCaracteristicaContext | null {
        return this.getRuleContext(0, DesCaracteristicaContext);
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_caracteristica;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterCaracteristica) {
             listener.enterCaracteristica(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitCaracteristica) {
             listener.exitCaracteristica(this);
        }
    }
}


export class NombreCaracteristicaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_nombreCaracteristica;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterNombreCaracteristica) {
             listener.enterNombreCaracteristica(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitNombreCaracteristica) {
             listener.exitNombreCaracteristica(this);
        }
    }
}


export class AntecedentesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public desAntecedente(): DesAntecedenteContext {
        return this.getRuleContext(0, DesAntecedenteContext)!;
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_antecedentes;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterAntecedentes) {
             listener.enterAntecedentes(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitAntecedentes) {
             listener.exitAntecedentes(this);
        }
    }
}


export class EscEspContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public desEspecificacion(): DesEspecificacionContext {
        return this.getRuleContext(0, DesEspecificacionContext)!;
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_escEsp;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterEscEsp) {
             listener.enterEscEsp(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitEscEsp) {
             listener.exitEscEsp(this);
        }
    }
}


export class EsqEscEspContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public desEsqEspecificacion(): DesEsqEspecificacionContext {
        return this.getRuleContext(0, DesEsqEspecificacionContext)!;
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_esqEscEsp;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterEsqEscEsp) {
             listener.enterEsqEscEsp(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitEsqEscEsp) {
             listener.exitEsqEscEsp(this);
        }
    }
}


export class DesCaracteristicaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_desCaracteristica;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDesCaracteristica) {
             listener.enterDesCaracteristica(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDesCaracteristica) {
             listener.exitDesCaracteristica(this);
        }
    }
}


export class DesAntecedenteContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_desAntecedente;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDesAntecedente) {
             listener.enterDesAntecedente(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDesAntecedente) {
             listener.exitDesAntecedente(this);
        }
    }
}


export class DesEscenarioContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_desEscenario;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDesEscenario) {
             listener.enterDesEscenario(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDesEscenario) {
             listener.exitDesEscenario(this);
        }
    }
}


export class DesEsqEscenarioContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_desEsqEscenario;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDesEsqEscenario) {
             listener.enterDesEsqEscenario(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDesEsqEscenario) {
             listener.exitDesEsqEscenario(this);
        }
    }
}


export class DesEspecificacionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_desEspecificacion;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDesEspecificacion) {
             listener.enterDesEspecificacion(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDesEspecificacion) {
             listener.exitDesEspecificacion(this);
        }
    }
}


export class DesEsqEspecificacionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode[];
    public NUMERO(i: number): antlr.TerminalNode | null;
    public NUMERO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUMERO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUMERO, i);
    	}
    }
    public PALABRA(): antlr.TerminalNode[];
    public PALABRA(i: number): antlr.TerminalNode | null;
    public PALABRA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.PALABRA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.PALABRA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_desEsqEspecificacion;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDesEsqEspecificacion) {
             listener.enterDesEsqEspecificacion(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDesEsqEspecificacion) {
             listener.exitDesEsqEspecificacion(this);
        }
    }
}


export class TablaEncabezadoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public encabezado(): EncabezadoContext {
        return this.getRuleContext(0, EncabezadoContext)!;
    }
    public FILATABLA(): antlr.TerminalNode[];
    public FILATABLA(i: number): antlr.TerminalNode | null;
    public FILATABLA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.FILATABLA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.FILATABLA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_tablaEncabezado;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterTablaEncabezado) {
             listener.enterTablaEncabezado(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitTablaEncabezado) {
             listener.exitTablaEncabezado(this);
        }
    }
}


export class EncabezadoContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FILATABLA(): antlr.TerminalNode {
        return this.getToken(SpecscriptGrammarParser.FILATABLA, 0)!;
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_encabezado;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterEncabezado) {
             listener.enterEncabezado(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitEncabezado) {
             listener.exitEncabezado(this);
        }
    }
}


export class ListaContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CELDA(): antlr.TerminalNode[];
    public CELDA(i: number): antlr.TerminalNode | null;
    public CELDA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.CELDA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.CELDA, i);
    	}
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_lista;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterLista) {
             listener.enterLista(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitLista) {
             listener.exitLista(this);
        }
    }
}


export class ClavevalorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public clave(): ClaveContext[];
    public clave(i: number): ClaveContext | null;
    public clave(i?: number): ClaveContext[] | ClaveContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClaveContext);
        }

        return this.getRuleContext(i, ClaveContext);
    }
    public valor(): ValorContext[];
    public valor(i: number): ValorContext | null;
    public valor(i?: number): ValorContext[] | ValorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ValorContext);
        }

        return this.getRuleContext(i, ValorContext);
    }
    public ESPACIO(): antlr.TerminalNode[];
    public ESPACIO(i: number): antlr.TerminalNode | null;
    public ESPACIO(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.ESPACIO);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
    	}
    }
    public NUEVALINEA(): antlr.TerminalNode[];
    public NUEVALINEA(i: number): antlr.TerminalNode | null;
    public NUEVALINEA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
    	} else {
    		return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
    	}
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_clavevalor;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterClavevalor) {
             listener.enterClavevalor(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitClavevalor) {
             listener.exitClavevalor(this);
        }
    }
}


export class ClaveContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CELDA(): antlr.TerminalNode {
        return this.getToken(SpecscriptGrammarParser.CELDA, 0)!;
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_clave;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterClave) {
             listener.enterClave(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitClave) {
             listener.exitClave(this);
        }
    }
}


export class ValorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CELDA(): antlr.TerminalNode {
        return this.getToken(SpecscriptGrammarParser.CELDA, 0)!;
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_valor;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterValor) {
             listener.enterValor(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitValor) {
             listener.exitValor(this);
        }
    }
}


export class OperacionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PALABRA(): antlr.TerminalNode {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0)!;
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_operacion;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterOperacion) {
             listener.enterOperacion(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitOperacion) {
             listener.exitOperacion(this);
        }
    }
}


export class NombreModuloContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PALABRA(): antlr.TerminalNode {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0)!;
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_nombreModulo;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterNombreModulo) {
             listener.enterNombreModulo(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitNombreModulo) {
             listener.exitNombreModulo(this);
        }
    }
}


export class DatosContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERO(): antlr.TerminalNode | null {
        return this.getToken(SpecscriptGrammarParser.NUMERO, 0);
    }
    public CADENA(): antlr.TerminalNode | null {
        return this.getToken(SpecscriptGrammarParser.CADENA, 0);
    }
    public override get ruleIndex(): number {
        return SpecscriptGrammarParser.RULE_datos;
    }
    public override enterRule(listener: SpecscriptGrammarListener): void {
        if(listener.enterDatos) {
             listener.enterDatos(this);
        }
    }
    public override exitRule(listener: SpecscriptGrammarListener): void {
        if(listener.exitDatos) {
             listener.exitDatos(this);
        }
    }
}
