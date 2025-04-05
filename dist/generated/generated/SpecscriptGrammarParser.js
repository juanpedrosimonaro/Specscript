"use strict";
// Generated from SpecscriptGrammar.g4 by ANTLR 4.13.1
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablesContext = exports.DatosContext = exports.DatoContext = exports.VariableEsquemaContext = exports.OperacionContext = exports.ValorContext = exports.ClaveContext = exports.ClavevalorContext = exports.ListaContext = exports.FilasDatosContext = exports.EncabezadoContext = exports.TablaEncabezadoContext = exports.OracionContext = exports.DesEsqEspecificacionContext = exports.DesEsqEscenarioContext = exports.FuncionAgregacionContext = exports.ComprobarResultadoContext = exports.ComprobarFuncionVariablesContext = exports.DefectoContext = exports.AsignacionVariableContext = exports.OperacionSimpleContext = exports.DesEspecificacionContext = exports.NombreEscenarioContext = exports.DesCaracteristicaContext = exports.EsqEscEspContext = exports.EscEspContext = exports.NombreAntEspecContext = exports.VariableExternaContext = exports.AntecedenteEspContext = exports.NombreAntecedentesContext = exports.AntecedentesContext = exports.NombreCaracteristicaContext = exports.CaracteristicaContext = exports.EsquemaEscenarioContext = exports.EscenarioContext = exports.ProgContext = exports.SpecscriptGrammarParser = void 0;
const antlr = __importStar(require("antlr4ng"));
class SpecscriptGrammarParser extends antlr.Parser {
    get grammarFileName() { return "SpecscriptGrammar.g4"; }
    get literalNames() { return SpecscriptGrammarParser.literalNames; }
    get symbolicNames() { return SpecscriptGrammarParser.symbolicNames; }
    get ruleNames() { return SpecscriptGrammarParser.ruleNames; }
    get serializedATN() { return SpecscriptGrammarParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SpecscriptGrammarParser._ATN, SpecscriptGrammarParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    prog() {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SpecscriptGrammarParser.RULE_prog);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 56;
                this.caracteristica();
                this.state = 58;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 57;
                        this.antecedentes();
                    }
                }
                this.state = 64;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 22) !== 0)) {
                    {
                        this.state = 62;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SpecscriptGrammarParser.T__0:
                            case SpecscriptGrammarParser.T__1:
                                {
                                    this.state = 60;
                                    this.escenario();
                                }
                                break;
                            case SpecscriptGrammarParser.T__3:
                                {
                                    this.state = 61;
                                    this.esquemaEscenario();
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 66;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 67;
                this.match(SpecscriptGrammarParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    escenario() {
        let localContext = new EscenarioContext(this.context, this.state);
        this.enterRule(localContext, 2, SpecscriptGrammarParser.RULE_escenario);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 69;
                _la = this.tokenStream.LA(1);
                if (!(_la === 1 || _la === 2)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 70;
                this.match(SpecscriptGrammarParser.T__2);
                this.state = 74;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 71;
                                this.match(SpecscriptGrammarParser.ESPACIO);
                            }
                        }
                    }
                    this.state = 76;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
                }
                this.state = 77;
                this.nombreEscenario();
                this.state = 79;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 78;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 81;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 17);
                this.state = 84;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 83;
                            this.escEsp();
                        }
                    }
                    this.state = 86;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 18);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    esquemaEscenario() {
        let localContext = new EsquemaEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 4, SpecscriptGrammarParser.RULE_esquemaEscenario);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 88;
                this.match(SpecscriptGrammarParser.T__3);
                this.state = 90;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 89;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 92;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 94;
                this.desEsqEscenario();
                this.state = 96;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 95;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 98;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 17);
                this.state = 101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 100;
                            this.esqEscEsp();
                        }
                    }
                    this.state = 103;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 18);
                this.state = 106;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 105;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 108;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 17);
                this.state = 110;
                this.match(SpecscriptGrammarParser.T__4);
                this.state = 112;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 111;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 114;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 17);
                this.state = 119;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context)) {
                    case 1:
                        {
                            this.state = 116;
                            this.tablaEncabezado();
                        }
                        break;
                    case 2:
                        {
                            this.state = 117;
                            this.lista();
                        }
                        break;
                    case 3:
                        {
                            this.state = 118;
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    caracteristica() {
        let localContext = new CaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 6, SpecscriptGrammarParser.RULE_caracteristica);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 121;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 122;
                this.match(SpecscriptGrammarParser.T__2);
                this.state = 123;
                this.nombreCaracteristica();
                this.state = 130;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
                    case 1:
                        {
                            this.state = 125;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 124;
                                        this.match(SpecscriptGrammarParser.NUEVALINEA);
                                    }
                                }
                                this.state = 127;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 17);
                            this.state = 129;
                            this.desCaracteristica();
                        }
                        break;
                }
                this.state = 135;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 132;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 137;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    nombreCaracteristica() {
        let localContext = new NombreCaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 8, SpecscriptGrammarParser.RULE_nombreCaracteristica);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 145;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        this.state = 145;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SpecscriptGrammarParser.PALABRA:
                                {
                                    this.state = 138;
                                    this.match(SpecscriptGrammarParser.PALABRA);
                                }
                                break;
                            case SpecscriptGrammarParser.NUMERO:
                                {
                                    this.state = 139;
                                    this.match(SpecscriptGrammarParser.NUMERO);
                                }
                                break;
                            case SpecscriptGrammarParser.ESPACIO:
                                {
                                    this.state = 141;
                                    this.errorHandler.sync(this);
                                    alternative = 1;
                                    do {
                                        switch (alternative) {
                                            case 1:
                                                {
                                                    {
                                                        this.state = 140;
                                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                                    }
                                                }
                                                break;
                                            default:
                                                throw new antlr.NoViableAltException(this);
                                        }
                                        this.state = 143;
                                        this.errorHandler.sync(this);
                                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
                                    } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 147;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
                this.state = 149;
                this.match(SpecscriptGrammarParser.CLASEPRE);
                this.state = 150;
                localContext._nombreClase = this.match(SpecscriptGrammarParser.PALABRA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    antecedentes() {
        let localContext = new AntecedentesContext(this.context, this.state);
        this.enterRule(localContext, 10, SpecscriptGrammarParser.RULE_antecedentes);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 152;
                this.match(SpecscriptGrammarParser.T__8);
                this.state = 156;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 153;
                                this.match(SpecscriptGrammarParser.ESPACIO);
                            }
                        }
                    }
                    this.state = 158;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
                }
                this.state = 159;
                this.nombreAntecedentes();
                this.state = 161;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 160;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 163;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 17);
                this.state = 166;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 165;
                            this.antecedenteEsp();
                        }
                    }
                    this.state = 168;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 18);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    nombreAntecedentes() {
        let localContext = new NombreAntecedentesContext(this.context, this.state);
        this.enterRule(localContext, 12, SpecscriptGrammarParser.RULE_nombreAntecedentes);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 171;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 170;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 173;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    antecedenteEsp() {
        let localContext = new AntecedenteEspContext(this.context, this.state);
        this.enterRule(localContext, 14, SpecscriptGrammarParser.RULE_antecedenteEsp);
        let _la;
        try {
            let alternative;
            this.state = 219;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context)) {
                case 1:
                    localContext = new VariableExternaContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 175;
                        this.match(SpecscriptGrammarParser.ESPECIDENT);
                        this.state = 184;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 27 || _la === 28) {
                            {
                                this.state = 182;
                                this.errorHandler.sync(this);
                                switch (this.tokenStream.LA(1)) {
                                    case SpecscriptGrammarParser.PALABRA:
                                        {
                                            this.state = 176;
                                            this.match(SpecscriptGrammarParser.PALABRA);
                                        }
                                        break;
                                    case SpecscriptGrammarParser.ESPACIO:
                                        {
                                            this.state = 178;
                                            this.errorHandler.sync(this);
                                            alternative = 1;
                                            do {
                                                switch (alternative) {
                                                    case 1:
                                                        {
                                                            {
                                                                this.state = 177;
                                                                this.match(SpecscriptGrammarParser.ESPACIO);
                                                            }
                                                        }
                                                        break;
                                                    default:
                                                        throw new antlr.NoViableAltException(this);
                                                }
                                                this.state = 180;
                                                this.errorHandler.sync(this);
                                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                                            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                                        }
                                        break;
                                    default:
                                        throw new antlr.NoViableAltException(this);
                                }
                            }
                            this.state = 186;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 187;
                        this.match(SpecscriptGrammarParser.ANTEPREVAR);
                        this.state = 188;
                        localContext._nombreVariable = this.match(SpecscriptGrammarParser.PALABRA);
                        this.state = 192;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 28) {
                            {
                                {
                                    this.state = 189;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 194;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 198;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 17) {
                            {
                                {
                                    this.state = 195;
                                    this.match(SpecscriptGrammarParser.NUEVALINEA);
                                }
                            }
                            this.state = 200;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                    break;
                case 2:
                    localContext = new NombreAntEspecContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 201;
                        this.match(SpecscriptGrammarParser.ESPECIDENT);
                        this.state = 209;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                this.state = 209;
                                this.errorHandler.sync(this);
                                switch (this.tokenStream.LA(1)) {
                                    case SpecscriptGrammarParser.PALABRA:
                                        {
                                            this.state = 202;
                                            this.match(SpecscriptGrammarParser.PALABRA);
                                        }
                                        break;
                                    case SpecscriptGrammarParser.NUMERO:
                                        {
                                            this.state = 203;
                                            this.match(SpecscriptGrammarParser.NUMERO);
                                        }
                                        break;
                                    case SpecscriptGrammarParser.ESPACIO:
                                        {
                                            this.state = 205;
                                            this.errorHandler.sync(this);
                                            alternative = 1;
                                            do {
                                                switch (alternative) {
                                                    case 1:
                                                        {
                                                            {
                                                                this.state = 204;
                                                                this.match(SpecscriptGrammarParser.ESPACIO);
                                                            }
                                                        }
                                                        break;
                                                    default:
                                                        throw new antlr.NoViableAltException(this);
                                                }
                                                this.state = 207;
                                                this.errorHandler.sync(this);
                                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 27, this.context);
                                            } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                                        }
                                        break;
                                    default:
                                        throw new antlr.NoViableAltException(this);
                                }
                            }
                            this.state = 211;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
                        this.state = 216;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 17) {
                            {
                                {
                                    this.state = 213;
                                    this.match(SpecscriptGrammarParser.NUEVALINEA);
                                }
                            }
                            this.state = 218;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    escEsp() {
        let localContext = new EscEspContext(this.context, this.state);
        this.enterRule(localContext, 16, SpecscriptGrammarParser.RULE_escEsp);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 221;
                this.match(SpecscriptGrammarParser.ESPECIDENT);
                this.state = 223;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 222;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 225;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 227;
                this.desEspecificacion();
                this.state = 231;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 228;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 233;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    esqEscEsp() {
        let localContext = new EsqEscEspContext(this.context, this.state);
        this.enterRule(localContext, 18, SpecscriptGrammarParser.RULE_esqEscEsp);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 234;
                this.match(SpecscriptGrammarParser.ESPECIDENT);
                this.state = 236;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 235;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 238;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 240;
                this.desEsqEspecificacion();
                this.state = 244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 17) {
                    {
                        {
                            this.state = 241;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 246;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 247;
                this.match(SpecscriptGrammarParser.T__4);
                this.state = 249;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 248;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 251;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 17);
                this.state = 253;
                this.tablaEncabezado();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    desCaracteristica() {
        let localContext = new DesCaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 20, SpecscriptGrammarParser.RULE_desCaracteristica);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 256;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 255;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 258;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    nombreEscenario() {
        let localContext = new NombreEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 22, SpecscriptGrammarParser.RULE_nombreEscenario);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 261;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 260;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 263;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    desEspecificacion() {
        let localContext = new DesEspecificacionContext(this.context, this.state);
        this.enterRule(localContext, 24, SpecscriptGrammarParser.RULE_desEspecificacion);
        let _la;
        try {
            this.state = 363;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 56, this.context)) {
                case 1:
                    localContext = new OperacionSimpleContext(localContext);
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 265;
                        this.match(SpecscriptGrammarParser.ACCIONPRE);
                        this.state = 266;
                        localContext._funcion = this.match(SpecscriptGrammarParser.PALABRA);
                        this.state = 268;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 267;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 270;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 272;
                        this.datos();
                    }
                    break;
                case 2:
                    localContext = new FuncionAgregacionContext(localContext);
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 276;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SpecscriptGrammarParser.FUNAGREPRE:
                                {
                                    this.state = 273;
                                    this.match(SpecscriptGrammarParser.FUNAGREPRE);
                                }
                                break;
                            case SpecscriptGrammarParser.T__9:
                                {
                                    this.state = 274;
                                    this.match(SpecscriptGrammarParser.T__9);
                                    this.state = 275;
                                    this.match(SpecscriptGrammarParser.ACCIONPRE);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                        this.state = 278;
                        localContext._funcion = this.match(SpecscriptGrammarParser.PALABRA);
                        this.state = 280;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 279;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 282;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 284;
                        this.datos();
                    }
                    break;
                case 3:
                    localContext = new ComprobarResultadoContext(localContext);
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 286;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0)) {
                            {
                                this.state = 285;
                                this.oracion();
                            }
                        }
                        this.state = 288;
                        this.match(SpecscriptGrammarParser.RESPRE);
                        this.state = 290;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 289;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 292;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 306;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 23) {
                            {
                                this.state = 294;
                                this.match(SpecscriptGrammarParser.PROPOSE);
                                this.state = 296;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 295;
                                            this.match(SpecscriptGrammarParser.ESPACIO);
                                        }
                                    }
                                    this.state = 298;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                } while (_la === 28);
                                this.state = 300;
                                localContext._funcion = this.match(SpecscriptGrammarParser.PALABRA);
                                this.state = 302;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                do {
                                    {
                                        {
                                            this.state = 301;
                                            this.match(SpecscriptGrammarParser.ESPACIO);
                                        }
                                    }
                                    this.state = 304;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                } while (_la === 28);
                            }
                        }
                        this.state = 308;
                        this.match(SpecscriptGrammarParser.DEBERIASER);
                        this.state = 310;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 309;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 312;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 314;
                        this.dato();
                    }
                    break;
                case 4:
                    localContext = new ComprobarFuncionVariablesContext(localContext);
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 316;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0)) {
                            {
                                this.state = 315;
                                this.oracion();
                            }
                        }
                        this.state = 318;
                        this.match(SpecscriptGrammarParser.RESPRE);
                        this.state = 320;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 319;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 322;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 324;
                        this.match(SpecscriptGrammarParser.PROPOSE);
                        this.state = 326;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 325;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 328;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 330;
                        localContext._funcion = this.match(SpecscriptGrammarParser.PALABRA);
                        this.state = 332;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 331;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 334;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 336;
                        this.variables();
                        this.state = 338;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 337;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 340;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 342;
                        this.match(SpecscriptGrammarParser.DEBERIASER);
                        this.state = 344;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 343;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 346;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 348;
                        this.dato();
                    }
                    break;
                case 5:
                    localContext = new AsignacionVariableContext(localContext);
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 350;
                        this.match(SpecscriptGrammarParser.QUETENGO);
                        this.state = 351;
                        localContext._nombreVariable = this.match(SpecscriptGrammarParser.PALABRA);
                        this.state = 353;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 352;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 355;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 357;
                        this.dato();
                    }
                    break;
                case 6:
                    localContext = new DefectoContext(localContext);
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 359;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 358;
                                    _la = this.tokenStream.LA(1);
                                    if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0))) {
                                        this.errorHandler.recoverInline(this);
                                    }
                                    else {
                                        this.errorHandler.reportMatch(this);
                                        this.consume();
                                    }
                                }
                            }
                            this.state = 361;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    desEsqEscenario() {
        let localContext = new DesEsqEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 26, SpecscriptGrammarParser.RULE_desEsqEscenario);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 366;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 365;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 368;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    desEsqEspecificacion() {
        let localContext = new DesEsqEspecificacionContext(this.context, this.state);
        this.enterRule(localContext, 28, SpecscriptGrammarParser.RULE_desEsqEspecificacion);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 374;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        this.state = 374;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SpecscriptGrammarParser.NUMERO:
                                {
                                    this.state = 370;
                                    this.match(SpecscriptGrammarParser.NUMERO);
                                }
                                break;
                            case SpecscriptGrammarParser.T__11:
                                {
                                    this.state = 371;
                                    this.variableEsquema();
                                }
                                break;
                            case SpecscriptGrammarParser.PALABRA:
                                {
                                    this.state = 372;
                                    this.match(SpecscriptGrammarParser.PALABRA);
                                }
                                break;
                            case SpecscriptGrammarParser.ESPACIO:
                                {
                                    this.state = 373;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 376;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402722816) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    oracion() {
        let localContext = new OracionContext(this.context, this.state);
        this.enterRule(localContext, 30, SpecscriptGrammarParser.RULE_oracion);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 379;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 378;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 381;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 402718720) !== 0));
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tablaEncabezado() {
        let localContext = new TablaEncabezadoContext(this.context, this.state);
        this.enterRule(localContext, 32, SpecscriptGrammarParser.RULE_tablaEncabezado);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 383;
                this.encabezado();
                this.state = 384;
                this.filasDatos();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    encabezado() {
        let localContext = new EncabezadoContext(this.context, this.state);
        this.enterRule(localContext, 34, SpecscriptGrammarParser.RULE_encabezado);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 386;
                this.match(SpecscriptGrammarParser.FILATABLA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    filasDatos() {
        let localContext = new FilasDatosContext(this.context, this.state);
        this.enterRule(localContext, 36, SpecscriptGrammarParser.RULE_filasDatos);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 389;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 388;
                            this.match(SpecscriptGrammarParser.FILATABLA);
                        }
                    }
                    this.state = 391;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 32);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    lista() {
        let localContext = new ListaContext(this.context, this.state);
        this.enterRule(localContext, 38, SpecscriptGrammarParser.RULE_lista);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 406;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 393;
                            this.match(SpecscriptGrammarParser.T__10);
                            this.state = 397;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 28) {
                                {
                                    {
                                        this.state = 394;
                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                    }
                                }
                                this.state = 399;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 400;
                            this.match(SpecscriptGrammarParser.CELDA);
                            this.state = 402;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 401;
                                        this.match(SpecscriptGrammarParser.NUEVALINEA);
                                    }
                                }
                                this.state = 404;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 17);
                        }
                    }
                    this.state = 408;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    clavevalor() {
        let localContext = new ClavevalorContext(this.context, this.state);
        this.enterRule(localContext, 40, SpecscriptGrammarParser.RULE_clavevalor);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 410;
                            this.match(SpecscriptGrammarParser.T__10);
                            this.state = 414;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 28) {
                                {
                                    {
                                        this.state = 411;
                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                    }
                                }
                                this.state = 416;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 417;
                            this.clave();
                            this.state = 418;
                            this.valor();
                            this.state = 420;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 419;
                                        this.match(SpecscriptGrammarParser.NUEVALINEA);
                                    }
                                }
                                this.state = 422;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 17);
                        }
                    }
                    this.state = 426;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 11);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    clave() {
        let localContext = new ClaveContext(this.context, this.state);
        this.enterRule(localContext, 42, SpecscriptGrammarParser.RULE_clave);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 428;
                this.match(SpecscriptGrammarParser.CELDA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    valor() {
        let localContext = new ValorContext(this.context, this.state);
        this.enterRule(localContext, 44, SpecscriptGrammarParser.RULE_valor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 430;
                this.match(SpecscriptGrammarParser.CELDA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    operacion() {
        let localContext = new OperacionContext(this.context, this.state);
        this.enterRule(localContext, 46, SpecscriptGrammarParser.RULE_operacion);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 432;
                this.match(SpecscriptGrammarParser.PALABRA);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableEsquema() {
        let localContext = new VariableEsquemaContext(this.context, this.state);
        this.enterRule(localContext, 48, SpecscriptGrammarParser.RULE_variableEsquema);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 434;
                this.match(SpecscriptGrammarParser.T__11);
                this.state = 435;
                this.match(SpecscriptGrammarParser.PALABRA);
                this.state = 436;
                this.match(SpecscriptGrammarParser.T__12);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    dato() {
        let localContext = new DatoContext(this.context, this.state);
        this.enterRule(localContext, 50, SpecscriptGrammarParser.RULE_dato);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 438;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1208025088) !== 0))) {
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
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    datos() {
        let localContext = new DatosContext(this.context, this.state);
        this.enterRule(localContext, 52, SpecscriptGrammarParser.RULE_datos);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 440;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1208025088) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 472;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 14 || _la === 28) {
                    {
                        this.state = 457;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 70, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 444;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        while (_la === 28) {
                                            {
                                                {
                                                    this.state = 441;
                                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                                }
                                            }
                                            this.state = 446;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                        }
                                        this.state = 447;
                                        this.match(SpecscriptGrammarParser.T__13);
                                        this.state = 451;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                        while (_la === 28) {
                                            {
                                                {
                                                    this.state = 448;
                                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                                }
                                            }
                                            this.state = 453;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                        }
                                        this.state = 454;
                                        _la = this.tokenStream.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1208025088) !== 0))) {
                                            this.errorHandler.recoverInline(this);
                                        }
                                        else {
                                            this.errorHandler.reportMatch(this);
                                            this.consume();
                                        }
                                    }
                                }
                            }
                            this.state = 459;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 70, this.context);
                        }
                        this.state = 461;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 460;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 463;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 465;
                        this.match(SpecscriptGrammarParser.T__14);
                        this.state = 467;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        do {
                            {
                                {
                                    this.state = 466;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            this.state = 469;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        } while (_la === 28);
                        this.state = 471;
                        _la = this.tokenStream.LA(1);
                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1208025088) !== 0))) {
                            this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variables() {
        let localContext = new VariablesContext(this.context, this.state);
        this.enterRule(localContext, 54, SpecscriptGrammarParser.RULE_variables);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 474;
                this.match(SpecscriptGrammarParser.PALABRA);
                this.state = 506;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 79, this.context)) {
                    case 1:
                        {
                            this.state = 491;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 76, this.context);
                            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                                if (alternative === 1) {
                                    {
                                        {
                                            this.state = 478;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            while (_la === 28) {
                                                {
                                                    {
                                                        this.state = 475;
                                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                                    }
                                                }
                                                this.state = 480;
                                                this.errorHandler.sync(this);
                                                _la = this.tokenStream.LA(1);
                                            }
                                            this.state = 481;
                                            this.match(SpecscriptGrammarParser.T__13);
                                            this.state = 485;
                                            this.errorHandler.sync(this);
                                            _la = this.tokenStream.LA(1);
                                            while (_la === 28) {
                                                {
                                                    {
                                                        this.state = 482;
                                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                                    }
                                                }
                                                this.state = 487;
                                                this.errorHandler.sync(this);
                                                _la = this.tokenStream.LA(1);
                                            }
                                            this.state = 488;
                                            this.match(SpecscriptGrammarParser.PALABRA);
                                        }
                                    }
                                }
                                this.state = 493;
                                this.errorHandler.sync(this);
                                alternative = this.interpreter.adaptivePredict(this.tokenStream, 76, this.context);
                            }
                            this.state = 495;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 494;
                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                    }
                                }
                                this.state = 497;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 28);
                            this.state = 499;
                            this.match(SpecscriptGrammarParser.T__14);
                            this.state = 501;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 500;
                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                    }
                                }
                                this.state = 503;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 28);
                            this.state = 505;
                            this.match(SpecscriptGrammarParser.PALABRA);
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    static get _ATN() {
        if (!SpecscriptGrammarParser.__ATN) {
            SpecscriptGrammarParser.__ATN = new antlr.ATNDeserializer().deserialize(SpecscriptGrammarParser._serializedATN);
        }
        return SpecscriptGrammarParser.__ATN;
    }
    get vocabulary() {
        return SpecscriptGrammarParser.vocabulary;
    }
}
exports.SpecscriptGrammarParser = SpecscriptGrammarParser;
SpecscriptGrammarParser.T__0 = 1;
SpecscriptGrammarParser.T__1 = 2;
SpecscriptGrammarParser.T__2 = 3;
SpecscriptGrammarParser.T__3 = 4;
SpecscriptGrammarParser.T__4 = 5;
SpecscriptGrammarParser.T__5 = 6;
SpecscriptGrammarParser.T__6 = 7;
SpecscriptGrammarParser.T__7 = 8;
SpecscriptGrammarParser.T__8 = 9;
SpecscriptGrammarParser.T__9 = 10;
SpecscriptGrammarParser.T__10 = 11;
SpecscriptGrammarParser.T__11 = 12;
SpecscriptGrammarParser.T__12 = 13;
SpecscriptGrammarParser.T__13 = 14;
SpecscriptGrammarParser.T__14 = 15;
SpecscriptGrammarParser.NUMERO = 16;
SpecscriptGrammarParser.NUEVALINEA = 17;
SpecscriptGrammarParser.ESPECIDENT = 18;
SpecscriptGrammarParser.ANTEPREVAR = 19;
SpecscriptGrammarParser.CLASEPRE = 20;
SpecscriptGrammarParser.ACCIONPRE = 21;
SpecscriptGrammarParser.FUNAGREPRE = 22;
SpecscriptGrammarParser.PROPOSE = 23;
SpecscriptGrammarParser.RESPRE = 24;
SpecscriptGrammarParser.DEBERIASER = 25;
SpecscriptGrammarParser.QUETENGO = 26;
SpecscriptGrammarParser.PALABRA = 27;
SpecscriptGrammarParser.ESPACIO = 28;
SpecscriptGrammarParser.TEXTO = 29;
SpecscriptGrammarParser.CADENA = 30;
SpecscriptGrammarParser.CELDA = 31;
SpecscriptGrammarParser.FILATABLA = 32;
SpecscriptGrammarParser.RULE_prog = 0;
SpecscriptGrammarParser.RULE_escenario = 1;
SpecscriptGrammarParser.RULE_esquemaEscenario = 2;
SpecscriptGrammarParser.RULE_caracteristica = 3;
SpecscriptGrammarParser.RULE_nombreCaracteristica = 4;
SpecscriptGrammarParser.RULE_antecedentes = 5;
SpecscriptGrammarParser.RULE_nombreAntecedentes = 6;
SpecscriptGrammarParser.RULE_antecedenteEsp = 7;
SpecscriptGrammarParser.RULE_escEsp = 8;
SpecscriptGrammarParser.RULE_esqEscEsp = 9;
SpecscriptGrammarParser.RULE_desCaracteristica = 10;
SpecscriptGrammarParser.RULE_nombreEscenario = 11;
SpecscriptGrammarParser.RULE_desEspecificacion = 12;
SpecscriptGrammarParser.RULE_desEsqEscenario = 13;
SpecscriptGrammarParser.RULE_desEsqEspecificacion = 14;
SpecscriptGrammarParser.RULE_oracion = 15;
SpecscriptGrammarParser.RULE_tablaEncabezado = 16;
SpecscriptGrammarParser.RULE_encabezado = 17;
SpecscriptGrammarParser.RULE_filasDatos = 18;
SpecscriptGrammarParser.RULE_lista = 19;
SpecscriptGrammarParser.RULE_clavevalor = 20;
SpecscriptGrammarParser.RULE_clave = 21;
SpecscriptGrammarParser.RULE_valor = 22;
SpecscriptGrammarParser.RULE_operacion = 23;
SpecscriptGrammarParser.RULE_variableEsquema = 24;
SpecscriptGrammarParser.RULE_dato = 25;
SpecscriptGrammarParser.RULE_datos = 26;
SpecscriptGrammarParser.RULE_variables = 27;
SpecscriptGrammarParser.literalNames = [
    null, "'Ejemplo'", "'Escenario'", "':'", "'Esquema del escenario:'",
    "'Ejemplos:'", "'Caracteristica'", "'Requisito de Negocio'", "'Requisito'",
    "'Antecedentes:'", "'luego '", "'|'", "'<'", "'>'", "','", "'y'",
    null, null, null, null, null, null, null, null, "'el resultado'",
    "'deberia de ser'"
];
SpecscriptGrammarParser.symbolicNames = [
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, "NUMERO", "NUEVALINEA", "ESPECIDENT",
    "ANTEPREVAR", "CLASEPRE", "ACCIONPRE", "FUNAGREPRE", "PROPOSE",
    "RESPRE", "DEBERIASER", "QUETENGO", "PALABRA", "ESPACIO", "TEXTO",
    "CADENA", "CELDA", "FILATABLA"
];
SpecscriptGrammarParser.ruleNames = [
    "prog", "escenario", "esquemaEscenario", "caracteristica", "nombreCaracteristica",
    "antecedentes", "nombreAntecedentes", "antecedenteEsp", "escEsp",
    "esqEscEsp", "desCaracteristica", "nombreEscenario", "desEspecificacion",
    "desEsqEscenario", "desEsqEspecificacion", "oracion", "tablaEncabezado",
    "encabezado", "filasDatos", "lista", "clavevalor", "clave", "valor",
    "operacion", "variableEsquema", "dato", "datos", "variables",
];
SpecscriptGrammarParser._serializedATN = [
    4, 1, 32, 509, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
    6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
    2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
    7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7, 26,
    2, 27, 7, 27, 1, 0, 1, 0, 3, 0, 59, 8, 0, 1, 0, 1, 0, 5, 0, 63, 8, 0, 10, 0, 12, 0, 66, 9, 0,
    1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 5, 1, 73, 8, 1, 10, 1, 12, 1, 76, 9, 1, 1, 1, 1, 1, 4, 1, 80, 8,
    1, 11, 1, 12, 1, 81, 1, 1, 4, 1, 85, 8, 1, 11, 1, 12, 1, 86, 1, 2, 1, 2, 4, 2, 91, 8, 2, 11,
    2, 12, 2, 92, 1, 2, 1, 2, 4, 2, 97, 8, 2, 11, 2, 12, 2, 98, 1, 2, 4, 2, 102, 8, 2, 11, 2, 12,
    2, 103, 1, 2, 4, 2, 107, 8, 2, 11, 2, 12, 2, 108, 1, 2, 1, 2, 4, 2, 113, 8, 2, 11, 2, 12,
    2, 114, 1, 2, 1, 2, 1, 2, 3, 2, 120, 8, 2, 1, 3, 1, 3, 1, 3, 1, 3, 4, 3, 126, 8, 3, 11, 3, 12,
    3, 127, 1, 3, 3, 3, 131, 8, 3, 1, 3, 5, 3, 134, 8, 3, 10, 3, 12, 3, 137, 9, 3, 1, 4, 1, 4,
    1, 4, 4, 4, 142, 8, 4, 11, 4, 12, 4, 143, 4, 4, 146, 8, 4, 11, 4, 12, 4, 147, 1, 4, 1, 4,
    1, 4, 1, 5, 1, 5, 5, 5, 155, 8, 5, 10, 5, 12, 5, 158, 9, 5, 1, 5, 1, 5, 4, 5, 162, 8, 5, 11,
    5, 12, 5, 163, 1, 5, 4, 5, 167, 8, 5, 11, 5, 12, 5, 168, 1, 6, 4, 6, 172, 8, 6, 11, 6, 12,
    6, 173, 1, 7, 1, 7, 1, 7, 4, 7, 179, 8, 7, 11, 7, 12, 7, 180, 5, 7, 183, 8, 7, 10, 7, 12,
    7, 186, 9, 7, 1, 7, 1, 7, 1, 7, 5, 7, 191, 8, 7, 10, 7, 12, 7, 194, 9, 7, 1, 7, 5, 7, 197,
    8, 7, 10, 7, 12, 7, 200, 9, 7, 1, 7, 1, 7, 1, 7, 1, 7, 4, 7, 206, 8, 7, 11, 7, 12, 7, 207,
    4, 7, 210, 8, 7, 11, 7, 12, 7, 211, 1, 7, 5, 7, 215, 8, 7, 10, 7, 12, 7, 218, 9, 7, 3, 7,
    220, 8, 7, 1, 8, 1, 8, 4, 8, 224, 8, 8, 11, 8, 12, 8, 225, 1, 8, 1, 8, 5, 8, 230, 8, 8, 10,
    8, 12, 8, 233, 9, 8, 1, 9, 1, 9, 4, 9, 237, 8, 9, 11, 9, 12, 9, 238, 1, 9, 1, 9, 5, 9, 243,
    8, 9, 10, 9, 12, 9, 246, 9, 9, 1, 9, 1, 9, 4, 9, 250, 8, 9, 11, 9, 12, 9, 251, 1, 9, 1, 9,
    1, 10, 4, 10, 257, 8, 10, 11, 10, 12, 10, 258, 1, 11, 4, 11, 262, 8, 11, 11, 11, 12, 11,
    263, 1, 12, 1, 12, 1, 12, 4, 12, 269, 8, 12, 11, 12, 12, 12, 270, 1, 12, 1, 12, 1, 12,
    1, 12, 3, 12, 277, 8, 12, 1, 12, 1, 12, 4, 12, 281, 8, 12, 11, 12, 12, 12, 282, 1, 12,
    1, 12, 3, 12, 287, 8, 12, 1, 12, 1, 12, 4, 12, 291, 8, 12, 11, 12, 12, 12, 292, 1, 12,
    1, 12, 4, 12, 297, 8, 12, 11, 12, 12, 12, 298, 1, 12, 1, 12, 4, 12, 303, 8, 12, 11, 12,
    12, 12, 304, 3, 12, 307, 8, 12, 1, 12, 1, 12, 4, 12, 311, 8, 12, 11, 12, 12, 12, 312,
    1, 12, 1, 12, 3, 12, 317, 8, 12, 1, 12, 1, 12, 4, 12, 321, 8, 12, 11, 12, 12, 12, 322,
    1, 12, 1, 12, 4, 12, 327, 8, 12, 11, 12, 12, 12, 328, 1, 12, 1, 12, 4, 12, 333, 8, 12,
    11, 12, 12, 12, 334, 1, 12, 1, 12, 4, 12, 339, 8, 12, 11, 12, 12, 12, 340, 1, 12, 1, 12,
    4, 12, 345, 8, 12, 11, 12, 12, 12, 346, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 4, 12, 354,
    8, 12, 11, 12, 12, 12, 355, 1, 12, 1, 12, 4, 12, 360, 8, 12, 11, 12, 12, 12, 361, 3, 12,
    364, 8, 12, 1, 13, 4, 13, 367, 8, 13, 11, 13, 12, 13, 368, 1, 14, 1, 14, 1, 14, 1, 14,
    4, 14, 375, 8, 14, 11, 14, 12, 14, 376, 1, 15, 4, 15, 380, 8, 15, 11, 15, 12, 15, 381,
    1, 16, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 4, 18, 390, 8, 18, 11, 18, 12, 18, 391, 1, 19,
    1, 19, 5, 19, 396, 8, 19, 10, 19, 12, 19, 399, 9, 19, 1, 19, 1, 19, 4, 19, 403, 8, 19,
    11, 19, 12, 19, 404, 4, 19, 407, 8, 19, 11, 19, 12, 19, 408, 1, 20, 1, 20, 5, 20, 413,
    8, 20, 10, 20, 12, 20, 416, 9, 20, 1, 20, 1, 20, 1, 20, 4, 20, 421, 8, 20, 11, 20, 12,
    20, 422, 4, 20, 425, 8, 20, 11, 20, 12, 20, 426, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1,
    23, 1, 24, 1, 24, 1, 24, 1, 24, 1, 25, 1, 25, 1, 26, 1, 26, 5, 26, 443, 8, 26, 10, 26, 12,
    26, 446, 9, 26, 1, 26, 1, 26, 5, 26, 450, 8, 26, 10, 26, 12, 26, 453, 9, 26, 1, 26, 5,
    26, 456, 8, 26, 10, 26, 12, 26, 459, 9, 26, 1, 26, 4, 26, 462, 8, 26, 11, 26, 12, 26,
    463, 1, 26, 1, 26, 4, 26, 468, 8, 26, 11, 26, 12, 26, 469, 1, 26, 3, 26, 473, 8, 26, 1,
    27, 1, 27, 5, 27, 477, 8, 27, 10, 27, 12, 27, 480, 9, 27, 1, 27, 1, 27, 5, 27, 484, 8,
    27, 10, 27, 12, 27, 487, 9, 27, 1, 27, 5, 27, 490, 8, 27, 10, 27, 12, 27, 493, 9, 27,
    1, 27, 4, 27, 496, 8, 27, 11, 27, 12, 27, 497, 1, 27, 1, 27, 4, 27, 502, 8, 27, 11, 27,
    12, 27, 503, 1, 27, 3, 27, 507, 8, 27, 1, 27, 0, 0, 28, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
    20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 0, 4, 1, 0, 1,
    2, 1, 0, 6, 8, 2, 0, 16, 16, 27, 28, 3, 0, 16, 16, 27, 27, 30, 30, 569, 0, 56, 1, 0, 0, 0,
    2, 69, 1, 0, 0, 0, 4, 88, 1, 0, 0, 0, 6, 121, 1, 0, 0, 0, 8, 145, 1, 0, 0, 0, 10, 152, 1, 0,
    0, 0, 12, 171, 1, 0, 0, 0, 14, 219, 1, 0, 0, 0, 16, 221, 1, 0, 0, 0, 18, 234, 1, 0, 0, 0,
    20, 256, 1, 0, 0, 0, 22, 261, 1, 0, 0, 0, 24, 363, 1, 0, 0, 0, 26, 366, 1, 0, 0, 0, 28, 374,
    1, 0, 0, 0, 30, 379, 1, 0, 0, 0, 32, 383, 1, 0, 0, 0, 34, 386, 1, 0, 0, 0, 36, 389, 1, 0,
    0, 0, 38, 406, 1, 0, 0, 0, 40, 424, 1, 0, 0, 0, 42, 428, 1, 0, 0, 0, 44, 430, 1, 0, 0, 0,
    46, 432, 1, 0, 0, 0, 48, 434, 1, 0, 0, 0, 50, 438, 1, 0, 0, 0, 52, 440, 1, 0, 0, 0, 54, 474,
    1, 0, 0, 0, 56, 58, 3, 6, 3, 0, 57, 59, 3, 10, 5, 0, 58, 57, 1, 0, 0, 0, 58, 59, 1, 0, 0, 0,
    59, 64, 1, 0, 0, 0, 60, 63, 3, 2, 1, 0, 61, 63, 3, 4, 2, 0, 62, 60, 1, 0, 0, 0, 62, 61, 1,
    0, 0, 0, 63, 66, 1, 0, 0, 0, 64, 62, 1, 0, 0, 0, 64, 65, 1, 0, 0, 0, 65, 67, 1, 0, 0, 0, 66,
    64, 1, 0, 0, 0, 67, 68, 5, 0, 0, 1, 68, 1, 1, 0, 0, 0, 69, 70, 7, 0, 0, 0, 70, 74, 5, 3, 0,
    0, 71, 73, 5, 28, 0, 0, 72, 71, 1, 0, 0, 0, 73, 76, 1, 0, 0, 0, 74, 72, 1, 0, 0, 0, 74, 75,
    1, 0, 0, 0, 75, 77, 1, 0, 0, 0, 76, 74, 1, 0, 0, 0, 77, 79, 3, 22, 11, 0, 78, 80, 5, 17, 0,
    0, 79, 78, 1, 0, 0, 0, 80, 81, 1, 0, 0, 0, 81, 79, 1, 0, 0, 0, 81, 82, 1, 0, 0, 0, 82, 84,
    1, 0, 0, 0, 83, 85, 3, 16, 8, 0, 84, 83, 1, 0, 0, 0, 85, 86, 1, 0, 0, 0, 86, 84, 1, 0, 0, 0,
    86, 87, 1, 0, 0, 0, 87, 3, 1, 0, 0, 0, 88, 90, 5, 4, 0, 0, 89, 91, 5, 28, 0, 0, 90, 89, 1,
    0, 0, 0, 91, 92, 1, 0, 0, 0, 92, 90, 1, 0, 0, 0, 92, 93, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94,
    96, 3, 26, 13, 0, 95, 97, 5, 17, 0, 0, 96, 95, 1, 0, 0, 0, 97, 98, 1, 0, 0, 0, 98, 96, 1,
    0, 0, 0, 98, 99, 1, 0, 0, 0, 99, 101, 1, 0, 0, 0, 100, 102, 3, 18, 9, 0, 101, 100, 1, 0,
    0, 0, 102, 103, 1, 0, 0, 0, 103, 101, 1, 0, 0, 0, 103, 104, 1, 0, 0, 0, 104, 106, 1, 0,
    0, 0, 105, 107, 5, 17, 0, 0, 106, 105, 1, 0, 0, 0, 107, 108, 1, 0, 0, 0, 108, 106, 1, 0,
    0, 0, 108, 109, 1, 0, 0, 0, 109, 110, 1, 0, 0, 0, 110, 112, 5, 5, 0, 0, 111, 113, 5, 17,
    0, 0, 112, 111, 1, 0, 0, 0, 113, 114, 1, 0, 0, 0, 114, 112, 1, 0, 0, 0, 114, 115, 1, 0,
    0, 0, 115, 119, 1, 0, 0, 0, 116, 120, 3, 32, 16, 0, 117, 120, 3, 38, 19, 0, 118, 120,
    3, 40, 20, 0, 119, 116, 1, 0, 0, 0, 119, 117, 1, 0, 0, 0, 119, 118, 1, 0, 0, 0, 120, 5,
    1, 0, 0, 0, 121, 122, 7, 1, 0, 0, 122, 123, 5, 3, 0, 0, 123, 130, 3, 8, 4, 0, 124, 126,
    5, 17, 0, 0, 125, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 125, 1, 0, 0, 0, 127, 128,
    1, 0, 0, 0, 128, 129, 1, 0, 0, 0, 129, 131, 3, 20, 10, 0, 130, 125, 1, 0, 0, 0, 130, 131,
    1, 0, 0, 0, 131, 135, 1, 0, 0, 0, 132, 134, 5, 17, 0, 0, 133, 132, 1, 0, 0, 0, 134, 137,
    1, 0, 0, 0, 135, 133, 1, 0, 0, 0, 135, 136, 1, 0, 0, 0, 136, 7, 1, 0, 0, 0, 137, 135, 1,
    0, 0, 0, 138, 146, 5, 27, 0, 0, 139, 146, 5, 16, 0, 0, 140, 142, 5, 28, 0, 0, 141, 140,
    1, 0, 0, 0, 142, 143, 1, 0, 0, 0, 143, 141, 1, 0, 0, 0, 143, 144, 1, 0, 0, 0, 144, 146,
    1, 0, 0, 0, 145, 138, 1, 0, 0, 0, 145, 139, 1, 0, 0, 0, 145, 141, 1, 0, 0, 0, 146, 147,
    1, 0, 0, 0, 147, 145, 1, 0, 0, 0, 147, 148, 1, 0, 0, 0, 148, 149, 1, 0, 0, 0, 149, 150,
    5, 20, 0, 0, 150, 151, 5, 27, 0, 0, 151, 9, 1, 0, 0, 0, 152, 156, 5, 9, 0, 0, 153, 155,
    5, 28, 0, 0, 154, 153, 1, 0, 0, 0, 155, 158, 1, 0, 0, 0, 156, 154, 1, 0, 0, 0, 156, 157,
    1, 0, 0, 0, 157, 159, 1, 0, 0, 0, 158, 156, 1, 0, 0, 0, 159, 161, 3, 12, 6, 0, 160, 162,
    5, 17, 0, 0, 161, 160, 1, 0, 0, 0, 162, 163, 1, 0, 0, 0, 163, 161, 1, 0, 0, 0, 163, 164,
    1, 0, 0, 0, 164, 166, 1, 0, 0, 0, 165, 167, 3, 14, 7, 0, 166, 165, 1, 0, 0, 0, 167, 168,
    1, 0, 0, 0, 168, 166, 1, 0, 0, 0, 168, 169, 1, 0, 0, 0, 169, 11, 1, 0, 0, 0, 170, 172, 7,
    2, 0, 0, 171, 170, 1, 0, 0, 0, 172, 173, 1, 0, 0, 0, 173, 171, 1, 0, 0, 0, 173, 174, 1,
    0, 0, 0, 174, 13, 1, 0, 0, 0, 175, 184, 5, 18, 0, 0, 176, 183, 5, 27, 0, 0, 177, 179, 5,
    28, 0, 0, 178, 177, 1, 0, 0, 0, 179, 180, 1, 0, 0, 0, 180, 178, 1, 0, 0, 0, 180, 181, 1,
    0, 0, 0, 181, 183, 1, 0, 0, 0, 182, 176, 1, 0, 0, 0, 182, 178, 1, 0, 0, 0, 183, 186, 1,
    0, 0, 0, 184, 182, 1, 0, 0, 0, 184, 185, 1, 0, 0, 0, 185, 187, 1, 0, 0, 0, 186, 184, 1,
    0, 0, 0, 187, 188, 5, 19, 0, 0, 188, 192, 5, 27, 0, 0, 189, 191, 5, 28, 0, 0, 190, 189,
    1, 0, 0, 0, 191, 194, 1, 0, 0, 0, 192, 190, 1, 0, 0, 0, 192, 193, 1, 0, 0, 0, 193, 198,
    1, 0, 0, 0, 194, 192, 1, 0, 0, 0, 195, 197, 5, 17, 0, 0, 196, 195, 1, 0, 0, 0, 197, 200,
    1, 0, 0, 0, 198, 196, 1, 0, 0, 0, 198, 199, 1, 0, 0, 0, 199, 220, 1, 0, 0, 0, 200, 198,
    1, 0, 0, 0, 201, 209, 5, 18, 0, 0, 202, 210, 5, 27, 0, 0, 203, 210, 5, 16, 0, 0, 204, 206,
    5, 28, 0, 0, 205, 204, 1, 0, 0, 0, 206, 207, 1, 0, 0, 0, 207, 205, 1, 0, 0, 0, 207, 208,
    1, 0, 0, 0, 208, 210, 1, 0, 0, 0, 209, 202, 1, 0, 0, 0, 209, 203, 1, 0, 0, 0, 209, 205,
    1, 0, 0, 0, 210, 211, 1, 0, 0, 0, 211, 209, 1, 0, 0, 0, 211, 212, 1, 0, 0, 0, 212, 216,
    1, 0, 0, 0, 213, 215, 5, 17, 0, 0, 214, 213, 1, 0, 0, 0, 215, 218, 1, 0, 0, 0, 216, 214,
    1, 0, 0, 0, 216, 217, 1, 0, 0, 0, 217, 220, 1, 0, 0, 0, 218, 216, 1, 0, 0, 0, 219, 175,
    1, 0, 0, 0, 219, 201, 1, 0, 0, 0, 220, 15, 1, 0, 0, 0, 221, 223, 5, 18, 0, 0, 222, 224,
    5, 28, 0, 0, 223, 222, 1, 0, 0, 0, 224, 225, 1, 0, 0, 0, 225, 223, 1, 0, 0, 0, 225, 226,
    1, 0, 0, 0, 226, 227, 1, 0, 0, 0, 227, 231, 3, 24, 12, 0, 228, 230, 5, 17, 0, 0, 229, 228,
    1, 0, 0, 0, 230, 233, 1, 0, 0, 0, 231, 229, 1, 0, 0, 0, 231, 232, 1, 0, 0, 0, 232, 17, 1,
    0, 0, 0, 233, 231, 1, 0, 0, 0, 234, 236, 5, 18, 0, 0, 235, 237, 5, 28, 0, 0, 236, 235,
    1, 0, 0, 0, 237, 238, 1, 0, 0, 0, 238, 236, 1, 0, 0, 0, 238, 239, 1, 0, 0, 0, 239, 240,
    1, 0, 0, 0, 240, 244, 3, 28, 14, 0, 241, 243, 5, 17, 0, 0, 242, 241, 1, 0, 0, 0, 243, 246,
    1, 0, 0, 0, 244, 242, 1, 0, 0, 0, 244, 245, 1, 0, 0, 0, 245, 247, 1, 0, 0, 0, 246, 244,
    1, 0, 0, 0, 247, 249, 5, 5, 0, 0, 248, 250, 5, 17, 0, 0, 249, 248, 1, 0, 0, 0, 250, 251,
    1, 0, 0, 0, 251, 249, 1, 0, 0, 0, 251, 252, 1, 0, 0, 0, 252, 253, 1, 0, 0, 0, 253, 254,
    3, 32, 16, 0, 254, 19, 1, 0, 0, 0, 255, 257, 7, 2, 0, 0, 256, 255, 1, 0, 0, 0, 257, 258,
    1, 0, 0, 0, 258, 256, 1, 0, 0, 0, 258, 259, 1, 0, 0, 0, 259, 21, 1, 0, 0, 0, 260, 262, 7,
    2, 0, 0, 261, 260, 1, 0, 0, 0, 262, 263, 1, 0, 0, 0, 263, 261, 1, 0, 0, 0, 263, 264, 1,
    0, 0, 0, 264, 23, 1, 0, 0, 0, 265, 266, 5, 21, 0, 0, 266, 268, 5, 27, 0, 0, 267, 269, 5,
    28, 0, 0, 268, 267, 1, 0, 0, 0, 269, 270, 1, 0, 0, 0, 270, 268, 1, 0, 0, 0, 270, 271, 1,
    0, 0, 0, 271, 272, 1, 0, 0, 0, 272, 364, 3, 52, 26, 0, 273, 277, 5, 22, 0, 0, 274, 275,
    5, 10, 0, 0, 275, 277, 5, 21, 0, 0, 276, 273, 1, 0, 0, 0, 276, 274, 1, 0, 0, 0, 277, 278,
    1, 0, 0, 0, 278, 280, 5, 27, 0, 0, 279, 281, 5, 28, 0, 0, 280, 279, 1, 0, 0, 0, 281, 282,
    1, 0, 0, 0, 282, 280, 1, 0, 0, 0, 282, 283, 1, 0, 0, 0, 283, 284, 1, 0, 0, 0, 284, 364,
    3, 52, 26, 0, 285, 287, 3, 30, 15, 0, 286, 285, 1, 0, 0, 0, 286, 287, 1, 0, 0, 0, 287,
    288, 1, 0, 0, 0, 288, 290, 5, 24, 0, 0, 289, 291, 5, 28, 0, 0, 290, 289, 1, 0, 0, 0, 291,
    292, 1, 0, 0, 0, 292, 290, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0, 293, 306, 1, 0, 0, 0, 294,
    296, 5, 23, 0, 0, 295, 297, 5, 28, 0, 0, 296, 295, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0, 298,
    296, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300, 302, 5, 27, 0, 0, 301,
    303, 5, 28, 0, 0, 302, 301, 1, 0, 0, 0, 303, 304, 1, 0, 0, 0, 304, 302, 1, 0, 0, 0, 304,
    305, 1, 0, 0, 0, 305, 307, 1, 0, 0, 0, 306, 294, 1, 0, 0, 0, 306, 307, 1, 0, 0, 0, 307,
    308, 1, 0, 0, 0, 308, 310, 5, 25, 0, 0, 309, 311, 5, 28, 0, 0, 310, 309, 1, 0, 0, 0, 311,
    312, 1, 0, 0, 0, 312, 310, 1, 0, 0, 0, 312, 313, 1, 0, 0, 0, 313, 314, 1, 0, 0, 0, 314,
    364, 3, 50, 25, 0, 315, 317, 3, 30, 15, 0, 316, 315, 1, 0, 0, 0, 316, 317, 1, 0, 0, 0,
    317, 318, 1, 0, 0, 0, 318, 320, 5, 24, 0, 0, 319, 321, 5, 28, 0, 0, 320, 319, 1, 0, 0,
    0, 321, 322, 1, 0, 0, 0, 322, 320, 1, 0, 0, 0, 322, 323, 1, 0, 0, 0, 323, 324, 1, 0, 0,
    0, 324, 326, 5, 23, 0, 0, 325, 327, 5, 28, 0, 0, 326, 325, 1, 0, 0, 0, 327, 328, 1, 0,
    0, 0, 328, 326, 1, 0, 0, 0, 328, 329, 1, 0, 0, 0, 329, 330, 1, 0, 0, 0, 330, 332, 5, 27,
    0, 0, 331, 333, 5, 28, 0, 0, 332, 331, 1, 0, 0, 0, 333, 334, 1, 0, 0, 0, 334, 332, 1, 0,
    0, 0, 334, 335, 1, 0, 0, 0, 335, 336, 1, 0, 0, 0, 336, 338, 3, 54, 27, 0, 337, 339, 5,
    28, 0, 0, 338, 337, 1, 0, 0, 0, 339, 340, 1, 0, 0, 0, 340, 338, 1, 0, 0, 0, 340, 341, 1,
    0, 0, 0, 341, 342, 1, 0, 0, 0, 342, 344, 5, 25, 0, 0, 343, 345, 5, 28, 0, 0, 344, 343,
    1, 0, 0, 0, 345, 346, 1, 0, 0, 0, 346, 344, 1, 0, 0, 0, 346, 347, 1, 0, 0, 0, 347, 348,
    1, 0, 0, 0, 348, 349, 3, 50, 25, 0, 349, 364, 1, 0, 0, 0, 350, 351, 5, 26, 0, 0, 351, 353,
    5, 27, 0, 0, 352, 354, 5, 28, 0, 0, 353, 352, 1, 0, 0, 0, 354, 355, 1, 0, 0, 0, 355, 353,
    1, 0, 0, 0, 355, 356, 1, 0, 0, 0, 356, 357, 1, 0, 0, 0, 357, 364, 3, 50, 25, 0, 358, 360,
    7, 2, 0, 0, 359, 358, 1, 0, 0, 0, 360, 361, 1, 0, 0, 0, 361, 359, 1, 0, 0, 0, 361, 362,
    1, 0, 0, 0, 362, 364, 1, 0, 0, 0, 363, 265, 1, 0, 0, 0, 363, 276, 1, 0, 0, 0, 363, 286,
    1, 0, 0, 0, 363, 316, 1, 0, 0, 0, 363, 350, 1, 0, 0, 0, 363, 359, 1, 0, 0, 0, 364, 25, 1,
    0, 0, 0, 365, 367, 7, 2, 0, 0, 366, 365, 1, 0, 0, 0, 367, 368, 1, 0, 0, 0, 368, 366, 1,
    0, 0, 0, 368, 369, 1, 0, 0, 0, 369, 27, 1, 0, 0, 0, 370, 375, 5, 16, 0, 0, 371, 375, 3,
    48, 24, 0, 372, 375, 5, 27, 0, 0, 373, 375, 5, 28, 0, 0, 374, 370, 1, 0, 0, 0, 374, 371,
    1, 0, 0, 0, 374, 372, 1, 0, 0, 0, 374, 373, 1, 0, 0, 0, 375, 376, 1, 0, 0, 0, 376, 374,
    1, 0, 0, 0, 376, 377, 1, 0, 0, 0, 377, 29, 1, 0, 0, 0, 378, 380, 7, 2, 0, 0, 379, 378, 1,
    0, 0, 0, 380, 381, 1, 0, 0, 0, 381, 379, 1, 0, 0, 0, 381, 382, 1, 0, 0, 0, 382, 31, 1, 0,
    0, 0, 383, 384, 3, 34, 17, 0, 384, 385, 3, 36, 18, 0, 385, 33, 1, 0, 0, 0, 386, 387, 5,
    32, 0, 0, 387, 35, 1, 0, 0, 0, 388, 390, 5, 32, 0, 0, 389, 388, 1, 0, 0, 0, 390, 391, 1,
    0, 0, 0, 391, 389, 1, 0, 0, 0, 391, 392, 1, 0, 0, 0, 392, 37, 1, 0, 0, 0, 393, 397, 5, 11,
    0, 0, 394, 396, 5, 28, 0, 0, 395, 394, 1, 0, 0, 0, 396, 399, 1, 0, 0, 0, 397, 395, 1, 0,
    0, 0, 397, 398, 1, 0, 0, 0, 398, 400, 1, 0, 0, 0, 399, 397, 1, 0, 0, 0, 400, 402, 5, 31,
    0, 0, 401, 403, 5, 17, 0, 0, 402, 401, 1, 0, 0, 0, 403, 404, 1, 0, 0, 0, 404, 402, 1, 0,
    0, 0, 404, 405, 1, 0, 0, 0, 405, 407, 1, 0, 0, 0, 406, 393, 1, 0, 0, 0, 407, 408, 1, 0,
    0, 0, 408, 406, 1, 0, 0, 0, 408, 409, 1, 0, 0, 0, 409, 39, 1, 0, 0, 0, 410, 414, 5, 11,
    0, 0, 411, 413, 5, 28, 0, 0, 412, 411, 1, 0, 0, 0, 413, 416, 1, 0, 0, 0, 414, 412, 1, 0,
    0, 0, 414, 415, 1, 0, 0, 0, 415, 417, 1, 0, 0, 0, 416, 414, 1, 0, 0, 0, 417, 418, 3, 42,
    21, 0, 418, 420, 3, 44, 22, 0, 419, 421, 5, 17, 0, 0, 420, 419, 1, 0, 0, 0, 421, 422,
    1, 0, 0, 0, 422, 420, 1, 0, 0, 0, 422, 423, 1, 0, 0, 0, 423, 425, 1, 0, 0, 0, 424, 410,
    1, 0, 0, 0, 425, 426, 1, 0, 0, 0, 426, 424, 1, 0, 0, 0, 426, 427, 1, 0, 0, 0, 427, 41, 1,
    0, 0, 0, 428, 429, 5, 31, 0, 0, 429, 43, 1, 0, 0, 0, 430, 431, 5, 31, 0, 0, 431, 45, 1,
    0, 0, 0, 432, 433, 5, 27, 0, 0, 433, 47, 1, 0, 0, 0, 434, 435, 5, 12, 0, 0, 435, 436, 5,
    27, 0, 0, 436, 437, 5, 13, 0, 0, 437, 49, 1, 0, 0, 0, 438, 439, 7, 3, 0, 0, 439, 51, 1,
    0, 0, 0, 440, 472, 7, 3, 0, 0, 441, 443, 5, 28, 0, 0, 442, 441, 1, 0, 0, 0, 443, 446, 1,
    0, 0, 0, 444, 442, 1, 0, 0, 0, 444, 445, 1, 0, 0, 0, 445, 447, 1, 0, 0, 0, 446, 444, 1,
    0, 0, 0, 447, 451, 5, 14, 0, 0, 448, 450, 5, 28, 0, 0, 449, 448, 1, 0, 0, 0, 450, 453,
    1, 0, 0, 0, 451, 449, 1, 0, 0, 0, 451, 452, 1, 0, 0, 0, 452, 454, 1, 0, 0, 0, 453, 451,
    1, 0, 0, 0, 454, 456, 7, 3, 0, 0, 455, 444, 1, 0, 0, 0, 456, 459, 1, 0, 0, 0, 457, 455,
    1, 0, 0, 0, 457, 458, 1, 0, 0, 0, 458, 461, 1, 0, 0, 0, 459, 457, 1, 0, 0, 0, 460, 462,
    5, 28, 0, 0, 461, 460, 1, 0, 0, 0, 462, 463, 1, 0, 0, 0, 463, 461, 1, 0, 0, 0, 463, 464,
    1, 0, 0, 0, 464, 465, 1, 0, 0, 0, 465, 467, 5, 15, 0, 0, 466, 468, 5, 28, 0, 0, 467, 466,
    1, 0, 0, 0, 468, 469, 1, 0, 0, 0, 469, 467, 1, 0, 0, 0, 469, 470, 1, 0, 0, 0, 470, 471,
    1, 0, 0, 0, 471, 473, 7, 3, 0, 0, 472, 457, 1, 0, 0, 0, 472, 473, 1, 0, 0, 0, 473, 53, 1,
    0, 0, 0, 474, 506, 5, 27, 0, 0, 475, 477, 5, 28, 0, 0, 476, 475, 1, 0, 0, 0, 477, 480,
    1, 0, 0, 0, 478, 476, 1, 0, 0, 0, 478, 479, 1, 0, 0, 0, 479, 481, 1, 0, 0, 0, 480, 478,
    1, 0, 0, 0, 481, 485, 5, 14, 0, 0, 482, 484, 5, 28, 0, 0, 483, 482, 1, 0, 0, 0, 484, 487,
    1, 0, 0, 0, 485, 483, 1, 0, 0, 0, 485, 486, 1, 0, 0, 0, 486, 488, 1, 0, 0, 0, 487, 485,
    1, 0, 0, 0, 488, 490, 5, 27, 0, 0, 489, 478, 1, 0, 0, 0, 490, 493, 1, 0, 0, 0, 491, 489,
    1, 0, 0, 0, 491, 492, 1, 0, 0, 0, 492, 495, 1, 0, 0, 0, 493, 491, 1, 0, 0, 0, 494, 496,
    5, 28, 0, 0, 495, 494, 1, 0, 0, 0, 496, 497, 1, 0, 0, 0, 497, 495, 1, 0, 0, 0, 497, 498,
    1, 0, 0, 0, 498, 499, 1, 0, 0, 0, 499, 501, 5, 15, 0, 0, 500, 502, 5, 28, 0, 0, 501, 500,
    1, 0, 0, 0, 502, 503, 1, 0, 0, 0, 503, 501, 1, 0, 0, 0, 503, 504, 1, 0, 0, 0, 504, 505,
    1, 0, 0, 0, 505, 507, 5, 27, 0, 0, 506, 491, 1, 0, 0, 0, 506, 507, 1, 0, 0, 0, 507, 55,
    1, 0, 0, 0, 80, 58, 62, 64, 74, 81, 86, 92, 98, 103, 108, 114, 119, 127, 130, 135, 143,
    145, 147, 156, 163, 168, 173, 180, 182, 184, 192, 198, 207, 209, 211, 216, 219,
    225, 231, 238, 244, 251, 258, 263, 270, 276, 282, 286, 292, 298, 304, 306, 312,
    316, 322, 328, 334, 340, 346, 355, 361, 363, 368, 374, 376, 381, 391, 397, 404,
    408, 414, 422, 426, 444, 451, 457, 463, 469, 472, 478, 485, 491, 497, 503, 506
];
SpecscriptGrammarParser.vocabulary = new antlr.Vocabulary(SpecscriptGrammarParser.literalNames, SpecscriptGrammarParser.symbolicNames, []);
SpecscriptGrammarParser.decisionsToDFA = SpecscriptGrammarParser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
class ProgContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    caracteristica() {
        return this.getRuleContext(0, CaracteristicaContext);
    }
    EOF() {
        return this.getToken(SpecscriptGrammarParser.EOF, 0);
    }
    antecedentes() {
        return this.getRuleContext(0, AntecedentesContext);
    }
    escenario(i) {
        if (i === undefined) {
            return this.getRuleContexts(EscenarioContext);
        }
        return this.getRuleContext(i, EscenarioContext);
    }
    esquemaEscenario(i) {
        if (i === undefined) {
            return this.getRuleContexts(EsquemaEscenarioContext);
        }
        return this.getRuleContext(i, EsquemaEscenarioContext);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_prog;
    }
    accept(visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgContext = ProgContext;
class EscenarioContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nombreEscenario() {
        return this.getRuleContext(0, NombreEscenarioContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    escEsp(i) {
        if (i === undefined) {
            return this.getRuleContexts(EscEspContext);
        }
        return this.getRuleContext(i, EscEspContext);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_escenario;
    }
    accept(visitor) {
        if (visitor.visitEscenario) {
            return visitor.visitEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EscenarioContext = EscenarioContext;
class EsquemaEscenarioContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    desEsqEscenario() {
        return this.getRuleContext(0, DesEsqEscenarioContext);
    }
    tablaEncabezado() {
        return this.getRuleContext(0, TablaEncabezadoContext);
    }
    lista() {
        return this.getRuleContext(0, ListaContext);
    }
    clavevalor() {
        return this.getRuleContext(0, ClavevalorContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    esqEscEsp(i) {
        if (i === undefined) {
            return this.getRuleContexts(EsqEscEspContext);
        }
        return this.getRuleContext(i, EsqEscEspContext);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_esquemaEscenario;
    }
    accept(visitor) {
        if (visitor.visitEsquemaEscenario) {
            return visitor.visitEsquemaEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EsquemaEscenarioContext = EsquemaEscenarioContext;
class CaracteristicaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nombreCaracteristica() {
        return this.getRuleContext(0, NombreCaracteristicaContext);
    }
    desCaracteristica() {
        return this.getRuleContext(0, DesCaracteristicaContext);
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_caracteristica;
    }
    accept(visitor) {
        if (visitor.visitCaracteristica) {
            return visitor.visitCaracteristica(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CaracteristicaContext = CaracteristicaContext;
class NombreCaracteristicaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CLASEPRE() {
        return this.getToken(SpecscriptGrammarParser.CLASEPRE, 0);
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_nombreCaracteristica;
    }
    accept(visitor) {
        if (visitor.visitNombreCaracteristica) {
            return visitor.visitNombreCaracteristica(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NombreCaracteristicaContext = NombreCaracteristicaContext;
class AntecedentesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nombreAntecedentes() {
        return this.getRuleContext(0, NombreAntecedentesContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    antecedenteEsp(i) {
        if (i === undefined) {
            return this.getRuleContexts(AntecedenteEspContext);
        }
        return this.getRuleContext(i, AntecedenteEspContext);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_antecedentes;
    }
    accept(visitor) {
        if (visitor.visitAntecedentes) {
            return visitor.visitAntecedentes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AntecedentesContext = AntecedentesContext;
class NombreAntecedentesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_nombreAntecedentes;
    }
    accept(visitor) {
        if (visitor.visitNombreAntecedentes) {
            return visitor.visitNombreAntecedentes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NombreAntecedentesContext = NombreAntecedentesContext;
class AntecedenteEspContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_antecedenteEsp;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.AntecedenteEspContext = AntecedenteEspContext;
class VariableExternaContext extends AntecedenteEspContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ESPECIDENT() {
        return this.getToken(SpecscriptGrammarParser.ESPECIDENT, 0);
    }
    ANTEPREVAR() {
        return this.getToken(SpecscriptGrammarParser.ANTEPREVAR, 0);
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    accept(visitor) {
        if (visitor.visitVariableExterna) {
            return visitor.visitVariableExterna(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableExternaContext = VariableExternaContext;
class NombreAntEspecContext extends AntecedenteEspContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ESPECIDENT() {
        return this.getToken(SpecscriptGrammarParser.ESPECIDENT, 0);
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    accept(visitor) {
        if (visitor.visitNombreAntEspec) {
            return visitor.visitNombreAntEspec(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NombreAntEspecContext = NombreAntEspecContext;
class EscEspContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ESPECIDENT() {
        return this.getToken(SpecscriptGrammarParser.ESPECIDENT, 0);
    }
    desEspecificacion() {
        return this.getRuleContext(0, DesEspecificacionContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_escEsp;
    }
    accept(visitor) {
        if (visitor.visitEscEsp) {
            return visitor.visitEscEsp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EscEspContext = EscEspContext;
class EsqEscEspContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ESPECIDENT() {
        return this.getToken(SpecscriptGrammarParser.ESPECIDENT, 0);
    }
    desEsqEspecificacion() {
        return this.getRuleContext(0, DesEsqEspecificacionContext);
    }
    tablaEncabezado() {
        return this.getRuleContext(0, TablaEncabezadoContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_esqEscEsp;
    }
    accept(visitor) {
        if (visitor.visitEsqEscEsp) {
            return visitor.visitEsqEscEsp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EsqEscEspContext = EsqEscEspContext;
class DesCaracteristicaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_desCaracteristica;
    }
    accept(visitor) {
        if (visitor.visitDesCaracteristica) {
            return visitor.visitDesCaracteristica(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DesCaracteristicaContext = DesCaracteristicaContext;
class NombreEscenarioContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_nombreEscenario;
    }
    accept(visitor) {
        if (visitor.visitNombreEscenario) {
            return visitor.visitNombreEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NombreEscenarioContext = NombreEscenarioContext;
class DesEspecificacionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_desEspecificacion;
    }
    copyFrom(ctx) {
        super.copyFrom(ctx);
    }
}
exports.DesEspecificacionContext = DesEspecificacionContext;
class OperacionSimpleContext extends DesEspecificacionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    ACCIONPRE() {
        return this.getToken(SpecscriptGrammarParser.ACCIONPRE, 0);
    }
    datos() {
        return this.getRuleContext(0, DatosContext);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    accept(visitor) {
        if (visitor.visitOperacionSimple) {
            return visitor.visitOperacionSimple(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperacionSimpleContext = OperacionSimpleContext;
class AsignacionVariableContext extends DesEspecificacionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    QUETENGO() {
        return this.getToken(SpecscriptGrammarParser.QUETENGO, 0);
    }
    dato() {
        return this.getRuleContext(0, DatoContext);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    accept(visitor) {
        if (visitor.visitAsignacionVariable) {
            return visitor.visitAsignacionVariable(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AsignacionVariableContext = AsignacionVariableContext;
class DefectoContext extends DesEspecificacionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    accept(visitor) {
        if (visitor.visitDefecto) {
            return visitor.visitDefecto(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DefectoContext = DefectoContext;
class ComprobarFuncionVariablesContext extends DesEspecificacionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    RESPRE() {
        return this.getToken(SpecscriptGrammarParser.RESPRE, 0);
    }
    PROPOSE() {
        return this.getToken(SpecscriptGrammarParser.PROPOSE, 0);
    }
    variables() {
        return this.getRuleContext(0, VariablesContext);
    }
    DEBERIASER() {
        return this.getToken(SpecscriptGrammarParser.DEBERIASER, 0);
    }
    dato() {
        return this.getRuleContext(0, DatoContext);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    oracion() {
        return this.getRuleContext(0, OracionContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    accept(visitor) {
        if (visitor.visitComprobarFuncionVariables) {
            return visitor.visitComprobarFuncionVariables(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComprobarFuncionVariablesContext = ComprobarFuncionVariablesContext;
class ComprobarResultadoContext extends DesEspecificacionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    RESPRE() {
        return this.getToken(SpecscriptGrammarParser.RESPRE, 0);
    }
    DEBERIASER() {
        return this.getToken(SpecscriptGrammarParser.DEBERIASER, 0);
    }
    dato() {
        return this.getRuleContext(0, DatoContext);
    }
    oracion() {
        return this.getRuleContext(0, OracionContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    PROPOSE() {
        return this.getToken(SpecscriptGrammarParser.PROPOSE, 0);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    accept(visitor) {
        if (visitor.visitComprobarResultado) {
            return visitor.visitComprobarResultado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComprobarResultadoContext = ComprobarResultadoContext;
class FuncionAgregacionContext extends DesEspecificacionContext {
    constructor(ctx) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    datos() {
        return this.getRuleContext(0, DatosContext);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    FUNAGREPRE() {
        return this.getToken(SpecscriptGrammarParser.FUNAGREPRE, 0);
    }
    ACCIONPRE() {
        return this.getToken(SpecscriptGrammarParser.ACCIONPRE, 0);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    accept(visitor) {
        if (visitor.visitFuncionAgregacion) {
            return visitor.visitFuncionAgregacion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FuncionAgregacionContext = FuncionAgregacionContext;
class DesEsqEscenarioContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_desEsqEscenario;
    }
    accept(visitor) {
        if (visitor.visitDesEsqEscenario) {
            return visitor.visitDesEsqEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DesEsqEscenarioContext = DesEsqEscenarioContext;
class DesEsqEspecificacionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    variableEsquema(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableEsquemaContext);
        }
        return this.getRuleContext(i, VariableEsquemaContext);
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_desEsqEspecificacion;
    }
    accept(visitor) {
        if (visitor.visitDesEsqEspecificacion) {
            return visitor.visitDesEsqEspecificacion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DesEsqEspecificacionContext = DesEsqEspecificacionContext;
class OracionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_oracion;
    }
    accept(visitor) {
        if (visitor.visitOracion) {
            return visitor.visitOracion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OracionContext = OracionContext;
class TablaEncabezadoContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    encabezado() {
        return this.getRuleContext(0, EncabezadoContext);
    }
    filasDatos() {
        return this.getRuleContext(0, FilasDatosContext);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_tablaEncabezado;
    }
    accept(visitor) {
        if (visitor.visitTablaEncabezado) {
            return visitor.visitTablaEncabezado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TablaEncabezadoContext = TablaEncabezadoContext;
class EncabezadoContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FILATABLA() {
        return this.getToken(SpecscriptGrammarParser.FILATABLA, 0);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_encabezado;
    }
    accept(visitor) {
        if (visitor.visitEncabezado) {
            return visitor.visitEncabezado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EncabezadoContext = EncabezadoContext;
class FilasDatosContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FILATABLA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.FILATABLA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.FILATABLA, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_filasDatos;
    }
    accept(visitor) {
        if (visitor.visitFilasDatos) {
            return visitor.visitFilasDatos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FilasDatosContext = FilasDatosContext;
class ListaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CELDA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.CELDA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.CELDA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_lista;
    }
    accept(visitor) {
        if (visitor.visitLista) {
            return visitor.visitLista(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListaContext = ListaContext;
class ClavevalorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    clave(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClaveContext);
        }
        return this.getRuleContext(i, ClaveContext);
    }
    valor(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValorContext);
        }
        return this.getRuleContext(i, ValorContext);
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    NUEVALINEA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_clavevalor;
    }
    accept(visitor) {
        if (visitor.visitClavevalor) {
            return visitor.visitClavevalor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClavevalorContext = ClavevalorContext;
class ClaveContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CELDA() {
        return this.getToken(SpecscriptGrammarParser.CELDA, 0);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_clave;
    }
    accept(visitor) {
        if (visitor.visitClave) {
            return visitor.visitClave(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClaveContext = ClaveContext;
class ValorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CELDA() {
        return this.getToken(SpecscriptGrammarParser.CELDA, 0);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_valor;
    }
    accept(visitor) {
        if (visitor.visitValor) {
            return visitor.visitValor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValorContext = ValorContext;
class OperacionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_operacion;
    }
    accept(visitor) {
        if (visitor.visitOperacion) {
            return visitor.visitOperacion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OperacionContext = OperacionContext;
class VariableEsquemaContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_variableEsquema;
    }
    accept(visitor) {
        if (visitor.visitVariableEsquema) {
            return visitor.visitVariableEsquema(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableEsquemaContext = VariableEsquemaContext;
class DatoContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERO() {
        return this.getToken(SpecscriptGrammarParser.NUMERO, 0);
    }
    PALABRA() {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    }
    CADENA() {
        return this.getToken(SpecscriptGrammarParser.CADENA, 0);
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_dato;
    }
    accept(visitor) {
        if (visitor.visitDato) {
            return visitor.visitDato(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatoContext = DatoContext;
class DatosContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    CADENA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.CADENA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.CADENA, i);
        }
    }
    NUMERO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_datos;
    }
    accept(visitor) {
        if (visitor.visitDatos) {
            return visitor.visitDatos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DatosContext = DatosContext;
class VariablesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PALABRA(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    }
    ESPACIO(i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    }
    get ruleIndex() {
        return SpecscriptGrammarParser.RULE_variables;
    }
    accept(visitor) {
        if (visitor.visitVariables) {
            return visitor.visitVariables(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariablesContext = VariablesContext;
