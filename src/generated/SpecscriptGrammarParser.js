"use strict";
// Generated from SpecscriptGrammar.g4 by ANTLR 4.13.1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DatosContext = exports.VariableEsquemaContext = exports.OperacionContext = exports.ValorContext = exports.ClaveContext = exports.ClavevalorContext = exports.ListaContext = exports.FilasDatosContext = exports.EncabezadoContext = exports.TablaEncabezadoContext = exports.DesEsqEspecificacionContext = exports.DesEspecificacionContext = exports.DesEsqEscenarioContext = exports.DesEscenarioContext = exports.DesAntecedenteContext = exports.DesCaracteristicaContext = exports.EsqEscEspContext = exports.EscEspContext = exports.AntecedentesContext = exports.NombreCaracteristicaContext = exports.CaracteristicaContext = exports.EsquemaEscenarioContext = exports.EscenarioContext = exports.ProgContext = exports.SpecscriptGrammarParser = void 0;
var antlr = require("antlr4ng");
var SpecscriptGrammarParser = /** @class */ (function (_super) {
    __extends(SpecscriptGrammarParser, _super);
    function SpecscriptGrammarParser(input) {
        var _this = _super.call(this, input) || this;
        _this.interpreter = new antlr.ParserATNSimulator(_this, SpecscriptGrammarParser._ATN, SpecscriptGrammarParser.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(SpecscriptGrammarParser.prototype, "grammarFileName", {
        get: function () { return "SpecscriptGrammar.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarParser.prototype, "literalNames", {
        get: function () { return SpecscriptGrammarParser.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarParser.prototype, "symbolicNames", {
        get: function () { return SpecscriptGrammarParser.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarParser.prototype, "ruleNames", {
        get: function () { return SpecscriptGrammarParser.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarParser.prototype, "serializedATN", {
        get: function () { return SpecscriptGrammarParser._serializedATN; },
        enumerable: false,
        configurable: true
    });
    SpecscriptGrammarParser.prototype.createFailedPredicateException = function (predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    };
    SpecscriptGrammarParser.prototype.prog = function () {
        var localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SpecscriptGrammarParser.RULE_prog);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 48;
                this.caracteristica();
                this.state = 50;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 9) {
                    {
                        this.state = 49;
                        this.antecedentes();
                    }
                }
                this.state = 56;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 22) !== 0)) {
                    {
                        this.state = 54;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SpecscriptGrammarParser.T__0:
                            case SpecscriptGrammarParser.T__1:
                                {
                                    this.state = 52;
                                    this.escenario();
                                }
                                break;
                            case SpecscriptGrammarParser.T__3:
                                {
                                    this.state = 53;
                                    this.esquemaEscenario();
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 58;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 59;
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
    };
    SpecscriptGrammarParser.prototype.escenario = function () {
        var localContext = new EscenarioContext(this.context, this.state);
        this.enterRule(localContext, 2, SpecscriptGrammarParser.RULE_escenario);
        var _la;
        try {
            var alternative = void 0;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 61;
                _la = this.tokenStream.LA(1);
                if (!(_la === 1 || _la === 2)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 62;
                this.match(SpecscriptGrammarParser.T__2);
                this.state = 64;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 63;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 66;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 68;
                this.desEscenario();
                this.state = 70;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 69;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 72;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 24);
                this.state = 75;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 74;
                            this.escEsp();
                        }
                    }
                    this.state = 77;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.esquemaEscenario = function () {
        var localContext = new EsquemaEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 4, SpecscriptGrammarParser.RULE_esquemaEscenario);
        var _la;
        try {
            var alternative = void 0;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 79;
                this.match(SpecscriptGrammarParser.T__3);
                this.state = 81;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 80;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 83;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 85;
                this.desEsqEscenario();
                this.state = 87;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 86;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 89;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 24);
                this.state = 92;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 91;
                            this.esqEscEsp();
                        }
                    }
                    this.state = 94;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0));
                this.state = 97;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 96;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 99;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 24);
                this.state = 101;
                this.match(SpecscriptGrammarParser.T__4);
                this.state = 103;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 102;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 105;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 24);
                this.state = 110;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context)) {
                    case 1:
                        {
                            this.state = 107;
                            this.tablaEncabezado();
                        }
                        break;
                    case 2:
                        {
                            this.state = 108;
                            this.lista();
                        }
                        break;
                    case 3:
                        {
                            this.state = 109;
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
    };
    SpecscriptGrammarParser.prototype.caracteristica = function () {
        var localContext = new CaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 6, SpecscriptGrammarParser.RULE_caracteristica);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 112;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 448) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 113;
                this.match(SpecscriptGrammarParser.T__2);
                this.state = 114;
                this.nombreCaracteristica();
                this.state = 121;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
                    case 1:
                        {
                            this.state = 116;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 115;
                                        this.match(SpecscriptGrammarParser.NUEVALINEA);
                                    }
                                }
                                this.state = 118;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 24);
                            this.state = 120;
                            this.desCaracteristica();
                        }
                        break;
                }
                this.state = 126;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 24) {
                    {
                        {
                            this.state = 123;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 128;
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
    };
    SpecscriptGrammarParser.prototype.nombreCaracteristica = function () {
        var localContext = new NombreCaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 8, SpecscriptGrammarParser.RULE_nombreCaracteristica);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 130;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 129;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 132;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.antecedentes = function () {
        var localContext = new AntecedentesContext(this.context, this.state);
        this.enterRule(localContext, 10, SpecscriptGrammarParser.RULE_antecedentes);
        try {
            var alternative = void 0;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 134;
                this.match(SpecscriptGrammarParser.T__8);
                this.state = 136;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 135;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 138;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 140;
                this.desAntecedente();
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
    };
    SpecscriptGrammarParser.prototype.escEsp = function () {
        var localContext = new EscEspContext(this.context, this.state);
        this.enterRule(localContext, 12, SpecscriptGrammarParser.RULE_escEsp);
        var _la;
        try {
            var alternative = void 0;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 142;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 144;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 143;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 146;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 17, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 148;
                this.desEspecificacion();
                this.state = 152;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 24) {
                    {
                        {
                            this.state = 149;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 154;
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
    };
    SpecscriptGrammarParser.prototype.esqEscEsp = function () {
        var localContext = new EsqEscEspContext(this.context, this.state);
        this.enterRule(localContext, 14, SpecscriptGrammarParser.RULE_esqEscEsp);
        var _la;
        try {
            var alternative = void 0;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 155;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1047552) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 157;
                this.errorHandler.sync(this);
                alternative = 1;
                do {
                    switch (alternative) {
                        case 1:
                            {
                                {
                                    this.state = 156;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                            }
                            break;
                        default:
                            throw new antlr.NoViableAltException(this);
                    }
                    this.state = 159;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 19, this.context);
                } while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER);
                this.state = 161;
                this.desEsqEspecificacion();
                this.state = 165;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 24) {
                    {
                        {
                            this.state = 162;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 167;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 168;
                this.match(SpecscriptGrammarParser.T__4);
                this.state = 170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 169;
                            this.match(SpecscriptGrammarParser.NUEVALINEA);
                        }
                    }
                    this.state = 172;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 24);
                this.state = 174;
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
    };
    SpecscriptGrammarParser.prototype.desCaracteristica = function () {
        var localContext = new DesCaracteristicaContext(this.context, this.state);
        this.enterRule(localContext, 16, SpecscriptGrammarParser.RULE_desCaracteristica);
        var _la;
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
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0))) {
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.desAntecedente = function () {
        var localContext = new DesAntecedenteContext(this.context, this.state);
        this.enterRule(localContext, 18, SpecscriptGrammarParser.RULE_desAntecedente);
        var _la;
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
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0))) {
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.desEscenario = function () {
        var localContext = new DesEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 20, SpecscriptGrammarParser.RULE_desEscenario);
        var _la;
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
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0))) {
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.desEsqEscenario = function () {
        var localContext = new DesEsqEscenarioContext(this.context, this.state);
        this.enterRule(localContext, 22, SpecscriptGrammarParser.RULE_desEsqEscenario);
        var _la;
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
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0))) {
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.desEspecificacion = function () {
        var localContext = new DesEspecificacionContext(this.context, this.state);
        this.enterRule(localContext, 24, SpecscriptGrammarParser.RULE_desEspecificacion);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 197;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 196;
                            _la = this.tokenStream.LA(1);
                            if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0))) {
                                this.errorHandler.recoverInline(this);
                            }
                            else {
                                this.errorHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 199;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 109051904) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.desEsqEspecificacion = function () {
        var localContext = new DesEsqEspecificacionContext(this.context, this.state);
        this.enterRule(localContext, 26, SpecscriptGrammarParser.RULE_desEsqEspecificacion);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 205;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        this.state = 205;
                        this.errorHandler.sync(this);
                        switch (this.tokenStream.LA(1)) {
                            case SpecscriptGrammarParser.NUMERO:
                                {
                                    this.state = 201;
                                    this.match(SpecscriptGrammarParser.NUMERO);
                                }
                                break;
                            case SpecscriptGrammarParser.T__20:
                                {
                                    this.state = 202;
                                    this.variableEsquema();
                                }
                                break;
                            case SpecscriptGrammarParser.PALABRA:
                                {
                                    this.state = 203;
                                    this.match(SpecscriptGrammarParser.PALABRA);
                                }
                                break;
                            case SpecscriptGrammarParser.ESPACIO:
                                {
                                    this.state = 204;
                                    this.match(SpecscriptGrammarParser.ESPACIO);
                                }
                                break;
                            default:
                                throw new antlr.NoViableAltException(this);
                        }
                    }
                    this.state = 207;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 111149056) !== 0));
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
    };
    SpecscriptGrammarParser.prototype.tablaEncabezado = function () {
        var localContext = new TablaEncabezadoContext(this.context, this.state);
        this.enterRule(localContext, 28, SpecscriptGrammarParser.RULE_tablaEncabezado);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 209;
                this.encabezado();
                this.state = 210;
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
    };
    SpecscriptGrammarParser.prototype.encabezado = function () {
        var localContext = new EncabezadoContext(this.context, this.state);
        this.enterRule(localContext, 30, SpecscriptGrammarParser.RULE_encabezado);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 212;
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
    };
    SpecscriptGrammarParser.prototype.filasDatos = function () {
        var localContext = new FilasDatosContext(this.context, this.state);
        this.enterRule(localContext, 32, SpecscriptGrammarParser.RULE_filasDatos);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 215;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 214;
                            this.match(SpecscriptGrammarParser.FILATABLA);
                        }
                    }
                    this.state = 217;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 29);
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
    };
    SpecscriptGrammarParser.prototype.lista = function () {
        var localContext = new ListaContext(this.context, this.state);
        this.enterRule(localContext, 34, SpecscriptGrammarParser.RULE_lista);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 232;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 219;
                            this.match(SpecscriptGrammarParser.T__19);
                            this.state = 223;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 26) {
                                {
                                    {
                                        this.state = 220;
                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                    }
                                }
                                this.state = 225;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 226;
                            this.match(SpecscriptGrammarParser.CELDA);
                            this.state = 228;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 227;
                                        this.match(SpecscriptGrammarParser.NUEVALINEA);
                                    }
                                }
                                this.state = 230;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 24);
                        }
                    }
                    this.state = 234;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 20);
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
    };
    SpecscriptGrammarParser.prototype.clavevalor = function () {
        var localContext = new ClavevalorContext(this.context, this.state);
        this.enterRule(localContext, 36, SpecscriptGrammarParser.RULE_clavevalor);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 250;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                        {
                            this.state = 236;
                            this.match(SpecscriptGrammarParser.T__19);
                            this.state = 240;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            while (_la === 26) {
                                {
                                    {
                                        this.state = 237;
                                        this.match(SpecscriptGrammarParser.ESPACIO);
                                    }
                                }
                                this.state = 242;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            }
                            this.state = 243;
                            this.clave();
                            this.state = 244;
                            this.valor();
                            this.state = 246;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                            do {
                                {
                                    {
                                        this.state = 245;
                                        this.match(SpecscriptGrammarParser.NUEVALINEA);
                                    }
                                }
                                this.state = 248;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                            } while (_la === 24);
                        }
                    }
                    this.state = 252;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 20);
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
    };
    SpecscriptGrammarParser.prototype.clave = function () {
        var localContext = new ClaveContext(this.context, this.state);
        this.enterRule(localContext, 38, SpecscriptGrammarParser.RULE_clave);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 254;
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
    };
    SpecscriptGrammarParser.prototype.valor = function () {
        var localContext = new ValorContext(this.context, this.state);
        this.enterRule(localContext, 40, SpecscriptGrammarParser.RULE_valor);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 256;
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
    };
    SpecscriptGrammarParser.prototype.operacion = function () {
        var localContext = new OperacionContext(this.context, this.state);
        this.enterRule(localContext, 42, SpecscriptGrammarParser.RULE_operacion);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 258;
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
    };
    SpecscriptGrammarParser.prototype.variableEsquema = function () {
        var localContext = new VariableEsquemaContext(this.context, this.state);
        this.enterRule(localContext, 44, SpecscriptGrammarParser.RULE_variableEsquema);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 260;
                this.match(SpecscriptGrammarParser.T__20);
                this.state = 261;
                this.match(SpecscriptGrammarParser.PALABRA);
                this.state = 262;
                this.match(SpecscriptGrammarParser.T__21);
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
    };
    SpecscriptGrammarParser.prototype.datos = function () {
        var localContext = new DatosContext(this.context, this.state);
        this.enterRule(localContext, 46, SpecscriptGrammarParser.RULE_datos);
        var _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 264;
                _la = this.tokenStream.LA(1);
                if (!(_la === 23 || _la === 27)) {
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
    };
    Object.defineProperty(SpecscriptGrammarParser, "_ATN", {
        get: function () {
            if (!SpecscriptGrammarParser.__ATN) {
                SpecscriptGrammarParser.__ATN = new antlr.ATNDeserializer().deserialize(SpecscriptGrammarParser._serializedATN);
            }
            return SpecscriptGrammarParser.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarParser.prototype, "vocabulary", {
        get: function () {
            return SpecscriptGrammarParser.vocabulary;
        },
        enumerable: false,
        configurable: true
    });
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
    SpecscriptGrammarParser.T__15 = 16;
    SpecscriptGrammarParser.T__16 = 17;
    SpecscriptGrammarParser.T__17 = 18;
    SpecscriptGrammarParser.T__18 = 19;
    SpecscriptGrammarParser.T__19 = 20;
    SpecscriptGrammarParser.T__20 = 21;
    SpecscriptGrammarParser.T__21 = 22;
    SpecscriptGrammarParser.NUMERO = 23;
    SpecscriptGrammarParser.NUEVALINEA = 24;
    SpecscriptGrammarParser.PALABRA = 25;
    SpecscriptGrammarParser.ESPACIO = 26;
    SpecscriptGrammarParser.CADENA = 27;
    SpecscriptGrammarParser.CELDA = 28;
    SpecscriptGrammarParser.FILATABLA = 29;
    SpecscriptGrammarParser.RULE_prog = 0;
    SpecscriptGrammarParser.RULE_escenario = 1;
    SpecscriptGrammarParser.RULE_esquemaEscenario = 2;
    SpecscriptGrammarParser.RULE_caracteristica = 3;
    SpecscriptGrammarParser.RULE_nombreCaracteristica = 4;
    SpecscriptGrammarParser.RULE_antecedentes = 5;
    SpecscriptGrammarParser.RULE_escEsp = 6;
    SpecscriptGrammarParser.RULE_esqEscEsp = 7;
    SpecscriptGrammarParser.RULE_desCaracteristica = 8;
    SpecscriptGrammarParser.RULE_desAntecedente = 9;
    SpecscriptGrammarParser.RULE_desEscenario = 10;
    SpecscriptGrammarParser.RULE_desEsqEscenario = 11;
    SpecscriptGrammarParser.RULE_desEspecificacion = 12;
    SpecscriptGrammarParser.RULE_desEsqEspecificacion = 13;
    SpecscriptGrammarParser.RULE_tablaEncabezado = 14;
    SpecscriptGrammarParser.RULE_encabezado = 15;
    SpecscriptGrammarParser.RULE_filasDatos = 16;
    SpecscriptGrammarParser.RULE_lista = 17;
    SpecscriptGrammarParser.RULE_clavevalor = 18;
    SpecscriptGrammarParser.RULE_clave = 19;
    SpecscriptGrammarParser.RULE_valor = 20;
    SpecscriptGrammarParser.RULE_operacion = 21;
    SpecscriptGrammarParser.RULE_variableEsquema = 22;
    SpecscriptGrammarParser.RULE_datos = 23;
    SpecscriptGrammarParser.literalNames = [
        null, "'Ejemplo'", "'Escenario'", "':'", "'Esquema del escenario:'",
        "'Ejemplos:'", "'Caracteristica'", "'Requisito de Negocio'", "'Requisito'",
        "'Antecedentes:'", "'*'", "'Dado'", "'Dada'", "'Dados'", "'Dadas'",
        "'Cuando'", "'Entonces'", "'Y'", "'E'", "'Pero'", "'|'", "'<'",
        "'>'"
    ];
    SpecscriptGrammarParser.symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null,
        null, "NUMERO", "NUEVALINEA", "PALABRA", "ESPACIO", "CADENA", "CELDA",
        "FILATABLA"
    ];
    SpecscriptGrammarParser.ruleNames = [
        "prog", "escenario", "esquemaEscenario", "caracteristica", "nombreCaracteristica",
        "antecedentes", "escEsp", "esqEscEsp", "desCaracteristica", "desAntecedente",
        "desEscenario", "desEsqEscenario", "desEspecificacion", "desEsqEspecificacion",
        "tablaEncabezado", "encabezado", "filasDatos", "lista", "clavevalor",
        "clave", "valor", "operacion", "variableEsquema", "datos",
    ];
    SpecscriptGrammarParser._serializedATN = [
        4, 1, 29, 267, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7,
        6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13,
        2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20,
        7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 1, 0, 1, 0, 3, 0, 51, 8, 0, 1, 0, 1, 0, 5,
        0, 55, 8, 0, 10, 0, 12, 0, 58, 9, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 4, 1, 65, 8, 1, 11, 1, 12,
        1, 66, 1, 1, 1, 1, 4, 1, 71, 8, 1, 11, 1, 12, 1, 72, 1, 1, 4, 1, 76, 8, 1, 11, 1, 12, 1, 77,
        1, 2, 1, 2, 4, 2, 82, 8, 2, 11, 2, 12, 2, 83, 1, 2, 1, 2, 4, 2, 88, 8, 2, 11, 2, 12, 2, 89,
        1, 2, 4, 2, 93, 8, 2, 11, 2, 12, 2, 94, 1, 2, 4, 2, 98, 8, 2, 11, 2, 12, 2, 99, 1, 2, 1, 2,
        4, 2, 104, 8, 2, 11, 2, 12, 2, 105, 1, 2, 1, 2, 1, 2, 3, 2, 111, 8, 2, 1, 3, 1, 3, 1, 3, 1,
        3, 4, 3, 117, 8, 3, 11, 3, 12, 3, 118, 1, 3, 3, 3, 122, 8, 3, 1, 3, 5, 3, 125, 8, 3, 10, 3,
        12, 3, 128, 9, 3, 1, 4, 4, 4, 131, 8, 4, 11, 4, 12, 4, 132, 1, 5, 1, 5, 4, 5, 137, 8, 5, 11,
        5, 12, 5, 138, 1, 5, 1, 5, 1, 6, 1, 6, 4, 6, 145, 8, 6, 11, 6, 12, 6, 146, 1, 6, 1, 6, 5, 6,
        151, 8, 6, 10, 6, 12, 6, 154, 9, 6, 1, 7, 1, 7, 4, 7, 158, 8, 7, 11, 7, 12, 7, 159, 1, 7,
        1, 7, 5, 7, 164, 8, 7, 10, 7, 12, 7, 167, 9, 7, 1, 7, 1, 7, 4, 7, 171, 8, 7, 11, 7, 12, 7,
        172, 1, 7, 1, 7, 1, 8, 4, 8, 178, 8, 8, 11, 8, 12, 8, 179, 1, 9, 4, 9, 183, 8, 9, 11, 9, 12,
        9, 184, 1, 10, 4, 10, 188, 8, 10, 11, 10, 12, 10, 189, 1, 11, 4, 11, 193, 8, 11, 11, 11,
        12, 11, 194, 1, 12, 4, 12, 198, 8, 12, 11, 12, 12, 12, 199, 1, 13, 1, 13, 1, 13, 1, 13,
        4, 13, 206, 8, 13, 11, 13, 12, 13, 207, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 16, 4, 16,
        216, 8, 16, 11, 16, 12, 16, 217, 1, 17, 1, 17, 5, 17, 222, 8, 17, 10, 17, 12, 17, 225,
        9, 17, 1, 17, 1, 17, 4, 17, 229, 8, 17, 11, 17, 12, 17, 230, 4, 17, 233, 8, 17, 11, 17,
        12, 17, 234, 1, 18, 1, 18, 5, 18, 239, 8, 18, 10, 18, 12, 18, 242, 9, 18, 1, 18, 1, 18,
        1, 18, 4, 18, 247, 8, 18, 11, 18, 12, 18, 248, 4, 18, 251, 8, 18, 11, 18, 12, 18, 252,
        1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22, 1, 22, 1, 23, 1, 23, 1, 23,
        0, 0, 24, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
        42, 44, 46, 0, 5, 1, 0, 1, 2, 1, 0, 6, 8, 2, 0, 23, 23, 25, 26, 1, 0, 10, 19, 2, 0, 23, 23,
        27, 27, 281, 0, 48, 1, 0, 0, 0, 2, 61, 1, 0, 0, 0, 4, 79, 1, 0, 0, 0, 6, 112, 1, 0, 0, 0, 8,
        130, 1, 0, 0, 0, 10, 134, 1, 0, 0, 0, 12, 142, 1, 0, 0, 0, 14, 155, 1, 0, 0, 0, 16, 177,
        1, 0, 0, 0, 18, 182, 1, 0, 0, 0, 20, 187, 1, 0, 0, 0, 22, 192, 1, 0, 0, 0, 24, 197, 1, 0,
        0, 0, 26, 205, 1, 0, 0, 0, 28, 209, 1, 0, 0, 0, 30, 212, 1, 0, 0, 0, 32, 215, 1, 0, 0, 0,
        34, 232, 1, 0, 0, 0, 36, 250, 1, 0, 0, 0, 38, 254, 1, 0, 0, 0, 40, 256, 1, 0, 0, 0, 42, 258,
        1, 0, 0, 0, 44, 260, 1, 0, 0, 0, 46, 264, 1, 0, 0, 0, 48, 50, 3, 6, 3, 0, 49, 51, 3, 10, 5,
        0, 50, 49, 1, 0, 0, 0, 50, 51, 1, 0, 0, 0, 51, 56, 1, 0, 0, 0, 52, 55, 3, 2, 1, 0, 53, 55,
        3, 4, 2, 0, 54, 52, 1, 0, 0, 0, 54, 53, 1, 0, 0, 0, 55, 58, 1, 0, 0, 0, 56, 54, 1, 0, 0, 0,
        56, 57, 1, 0, 0, 0, 57, 59, 1, 0, 0, 0, 58, 56, 1, 0, 0, 0, 59, 60, 5, 0, 0, 1, 60, 1, 1, 0,
        0, 0, 61, 62, 7, 0, 0, 0, 62, 64, 5, 3, 0, 0, 63, 65, 5, 26, 0, 0, 64, 63, 1, 0, 0, 0, 65,
        66, 1, 0, 0, 0, 66, 64, 1, 0, 0, 0, 66, 67, 1, 0, 0, 0, 67, 68, 1, 0, 0, 0, 68, 70, 3, 20,
        10, 0, 69, 71, 5, 24, 0, 0, 70, 69, 1, 0, 0, 0, 71, 72, 1, 0, 0, 0, 72, 70, 1, 0, 0, 0, 72,
        73, 1, 0, 0, 0, 73, 75, 1, 0, 0, 0, 74, 76, 3, 12, 6, 0, 75, 74, 1, 0, 0, 0, 76, 77, 1, 0,
        0, 0, 77, 75, 1, 0, 0, 0, 77, 78, 1, 0, 0, 0, 78, 3, 1, 0, 0, 0, 79, 81, 5, 4, 0, 0, 80, 82,
        5, 26, 0, 0, 81, 80, 1, 0, 0, 0, 82, 83, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 83, 84, 1, 0, 0, 0,
        84, 85, 1, 0, 0, 0, 85, 87, 3, 22, 11, 0, 86, 88, 5, 24, 0, 0, 87, 86, 1, 0, 0, 0, 88, 89,
        1, 0, 0, 0, 89, 87, 1, 0, 0, 0, 89, 90, 1, 0, 0, 0, 90, 92, 1, 0, 0, 0, 91, 93, 3, 14, 7, 0,
        92, 91, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0, 94, 92, 1, 0, 0, 0, 94, 95, 1, 0, 0, 0, 95, 97, 1,
        0, 0, 0, 96, 98, 5, 24, 0, 0, 97, 96, 1, 0, 0, 0, 98, 99, 1, 0, 0, 0, 99, 97, 1, 0, 0, 0, 99,
        100, 1, 0, 0, 0, 100, 101, 1, 0, 0, 0, 101, 103, 5, 5, 0, 0, 102, 104, 5, 24, 0, 0, 103,
        102, 1, 0, 0, 0, 104, 105, 1, 0, 0, 0, 105, 103, 1, 0, 0, 0, 105, 106, 1, 0, 0, 0, 106,
        110, 1, 0, 0, 0, 107, 111, 3, 28, 14, 0, 108, 111, 3, 34, 17, 0, 109, 111, 3, 36, 18,
        0, 110, 107, 1, 0, 0, 0, 110, 108, 1, 0, 0, 0, 110, 109, 1, 0, 0, 0, 111, 5, 1, 0, 0, 0,
        112, 113, 7, 1, 0, 0, 113, 114, 5, 3, 0, 0, 114, 121, 3, 8, 4, 0, 115, 117, 5, 24, 0, 0,
        116, 115, 1, 0, 0, 0, 117, 118, 1, 0, 0, 0, 118, 116, 1, 0, 0, 0, 118, 119, 1, 0, 0, 0,
        119, 120, 1, 0, 0, 0, 120, 122, 3, 16, 8, 0, 121, 116, 1, 0, 0, 0, 121, 122, 1, 0, 0, 0,
        122, 126, 1, 0, 0, 0, 123, 125, 5, 24, 0, 0, 124, 123, 1, 0, 0, 0, 125, 128, 1, 0, 0, 0,
        126, 124, 1, 0, 0, 0, 126, 127, 1, 0, 0, 0, 127, 7, 1, 0, 0, 0, 128, 126, 1, 0, 0, 0, 129,
        131, 7, 2, 0, 0, 130, 129, 1, 0, 0, 0, 131, 132, 1, 0, 0, 0, 132, 130, 1, 0, 0, 0, 132,
        133, 1, 0, 0, 0, 133, 9, 1, 0, 0, 0, 134, 136, 5, 9, 0, 0, 135, 137, 5, 26, 0, 0, 136, 135,
        1, 0, 0, 0, 137, 138, 1, 0, 0, 0, 138, 136, 1, 0, 0, 0, 138, 139, 1, 0, 0, 0, 139, 140,
        1, 0, 0, 0, 140, 141, 3, 18, 9, 0, 141, 11, 1, 0, 0, 0, 142, 144, 7, 3, 0, 0, 143, 145,
        5, 26, 0, 0, 144, 143, 1, 0, 0, 0, 145, 146, 1, 0, 0, 0, 146, 144, 1, 0, 0, 0, 146, 147,
        1, 0, 0, 0, 147, 148, 1, 0, 0, 0, 148, 152, 3, 24, 12, 0, 149, 151, 5, 24, 0, 0, 150, 149,
        1, 0, 0, 0, 151, 154, 1, 0, 0, 0, 152, 150, 1, 0, 0, 0, 152, 153, 1, 0, 0, 0, 153, 13, 1,
        0, 0, 0, 154, 152, 1, 0, 0, 0, 155, 157, 7, 3, 0, 0, 156, 158, 5, 26, 0, 0, 157, 156, 1,
        0, 0, 0, 158, 159, 1, 0, 0, 0, 159, 157, 1, 0, 0, 0, 159, 160, 1, 0, 0, 0, 160, 161, 1,
        0, 0, 0, 161, 165, 3, 26, 13, 0, 162, 164, 5, 24, 0, 0, 163, 162, 1, 0, 0, 0, 164, 167,
        1, 0, 0, 0, 165, 163, 1, 0, 0, 0, 165, 166, 1, 0, 0, 0, 166, 168, 1, 0, 0, 0, 167, 165,
        1, 0, 0, 0, 168, 170, 5, 5, 0, 0, 169, 171, 5, 24, 0, 0, 170, 169, 1, 0, 0, 0, 171, 172,
        1, 0, 0, 0, 172, 170, 1, 0, 0, 0, 172, 173, 1, 0, 0, 0, 173, 174, 1, 0, 0, 0, 174, 175,
        3, 28, 14, 0, 175, 15, 1, 0, 0, 0, 176, 178, 7, 2, 0, 0, 177, 176, 1, 0, 0, 0, 178, 179,
        1, 0, 0, 0, 179, 177, 1, 0, 0, 0, 179, 180, 1, 0, 0, 0, 180, 17, 1, 0, 0, 0, 181, 183, 7,
        2, 0, 0, 182, 181, 1, 0, 0, 0, 183, 184, 1, 0, 0, 0, 184, 182, 1, 0, 0, 0, 184, 185, 1,
        0, 0, 0, 185, 19, 1, 0, 0, 0, 186, 188, 7, 2, 0, 0, 187, 186, 1, 0, 0, 0, 188, 189, 1, 0,
        0, 0, 189, 187, 1, 0, 0, 0, 189, 190, 1, 0, 0, 0, 190, 21, 1, 0, 0, 0, 191, 193, 7, 2, 0,
        0, 192, 191, 1, 0, 0, 0, 193, 194, 1, 0, 0, 0, 194, 192, 1, 0, 0, 0, 194, 195, 1, 0, 0,
        0, 195, 23, 1, 0, 0, 0, 196, 198, 7, 2, 0, 0, 197, 196, 1, 0, 0, 0, 198, 199, 1, 0, 0, 0,
        199, 197, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 200, 25, 1, 0, 0, 0, 201, 206, 5, 23, 0, 0,
        202, 206, 3, 44, 22, 0, 203, 206, 5, 25, 0, 0, 204, 206, 5, 26, 0, 0, 205, 201, 1, 0,
        0, 0, 205, 202, 1, 0, 0, 0, 205, 203, 1, 0, 0, 0, 205, 204, 1, 0, 0, 0, 206, 207, 1, 0,
        0, 0, 207, 205, 1, 0, 0, 0, 207, 208, 1, 0, 0, 0, 208, 27, 1, 0, 0, 0, 209, 210, 3, 30,
        15, 0, 210, 211, 3, 32, 16, 0, 211, 29, 1, 0, 0, 0, 212, 213, 5, 29, 0, 0, 213, 31, 1,
        0, 0, 0, 214, 216, 5, 29, 0, 0, 215, 214, 1, 0, 0, 0, 216, 217, 1, 0, 0, 0, 217, 215, 1,
        0, 0, 0, 217, 218, 1, 0, 0, 0, 218, 33, 1, 0, 0, 0, 219, 223, 5, 20, 0, 0, 220, 222, 5,
        26, 0, 0, 221, 220, 1, 0, 0, 0, 222, 225, 1, 0, 0, 0, 223, 221, 1, 0, 0, 0, 223, 224, 1,
        0, 0, 0, 224, 226, 1, 0, 0, 0, 225, 223, 1, 0, 0, 0, 226, 228, 5, 28, 0, 0, 227, 229, 5,
        24, 0, 0, 228, 227, 1, 0, 0, 0, 229, 230, 1, 0, 0, 0, 230, 228, 1, 0, 0, 0, 230, 231, 1,
        0, 0, 0, 231, 233, 1, 0, 0, 0, 232, 219, 1, 0, 0, 0, 233, 234, 1, 0, 0, 0, 234, 232, 1,
        0, 0, 0, 234, 235, 1, 0, 0, 0, 235, 35, 1, 0, 0, 0, 236, 240, 5, 20, 0, 0, 237, 239, 5,
        26, 0, 0, 238, 237, 1, 0, 0, 0, 239, 242, 1, 0, 0, 0, 240, 238, 1, 0, 0, 0, 240, 241, 1,
        0, 0, 0, 241, 243, 1, 0, 0, 0, 242, 240, 1, 0, 0, 0, 243, 244, 3, 38, 19, 0, 244, 246,
        3, 40, 20, 0, 245, 247, 5, 24, 0, 0, 246, 245, 1, 0, 0, 0, 247, 248, 1, 0, 0, 0, 248, 246,
        1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 251, 1, 0, 0, 0, 250, 236, 1, 0, 0, 0, 251, 252,
        1, 0, 0, 0, 252, 250, 1, 0, 0, 0, 252, 253, 1, 0, 0, 0, 253, 37, 1, 0, 0, 0, 254, 255, 5,
        28, 0, 0, 255, 39, 1, 0, 0, 0, 256, 257, 5, 28, 0, 0, 257, 41, 1, 0, 0, 0, 258, 259, 5,
        25, 0, 0, 259, 43, 1, 0, 0, 0, 260, 261, 5, 21, 0, 0, 261, 262, 5, 25, 0, 0, 262, 263,
        5, 22, 0, 0, 263, 45, 1, 0, 0, 0, 264, 265, 7, 4, 0, 0, 265, 47, 1, 0, 0, 0, 36, 50, 54,
        56, 66, 72, 77, 83, 89, 94, 99, 105, 110, 118, 121, 126, 132, 138, 146, 152, 159,
        165, 172, 179, 184, 189, 194, 199, 205, 207, 217, 223, 230, 234, 240, 248, 252
    ];
    SpecscriptGrammarParser.vocabulary = new antlr.Vocabulary(SpecscriptGrammarParser.literalNames, SpecscriptGrammarParser.symbolicNames, []);
    SpecscriptGrammarParser.decisionsToDFA = SpecscriptGrammarParser._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return SpecscriptGrammarParser;
}(antlr.Parser));
exports.SpecscriptGrammarParser = SpecscriptGrammarParser;
var ProgContext = /** @class */ (function (_super) {
    __extends(ProgContext, _super);
    function ProgContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ProgContext.prototype.caracteristica = function () {
        return this.getRuleContext(0, CaracteristicaContext);
    };
    ProgContext.prototype.EOF = function () {
        return this.getToken(SpecscriptGrammarParser.EOF, 0);
    };
    ProgContext.prototype.antecedentes = function () {
        return this.getRuleContext(0, AntecedentesContext);
    };
    ProgContext.prototype.escenario = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EscenarioContext);
        }
        return this.getRuleContext(i, EscenarioContext);
    };
    ProgContext.prototype.esquemaEscenario = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EsquemaEscenarioContext);
        }
        return this.getRuleContext(i, EsquemaEscenarioContext);
    };
    Object.defineProperty(ProgContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_prog;
        },
        enumerable: false,
        configurable: true
    });
    ProgContext.prototype.accept = function (visitor) {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ProgContext;
}(antlr.ParserRuleContext));
exports.ProgContext = ProgContext;
var EscenarioContext = /** @class */ (function (_super) {
    __extends(EscenarioContext, _super);
    function EscenarioContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EscenarioContext.prototype.desEscenario = function () {
        return this.getRuleContext(0, DesEscenarioContext);
    };
    EscenarioContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    EscenarioContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    EscenarioContext.prototype.escEsp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EscEspContext);
        }
        return this.getRuleContext(i, EscEspContext);
    };
    Object.defineProperty(EscenarioContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_escenario;
        },
        enumerable: false,
        configurable: true
    });
    EscenarioContext.prototype.accept = function (visitor) {
        if (visitor.visitEscenario) {
            return visitor.visitEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EscenarioContext;
}(antlr.ParserRuleContext));
exports.EscenarioContext = EscenarioContext;
var EsquemaEscenarioContext = /** @class */ (function (_super) {
    __extends(EsquemaEscenarioContext, _super);
    function EsquemaEscenarioContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EsquemaEscenarioContext.prototype.desEsqEscenario = function () {
        return this.getRuleContext(0, DesEsqEscenarioContext);
    };
    EsquemaEscenarioContext.prototype.tablaEncabezado = function () {
        return this.getRuleContext(0, TablaEncabezadoContext);
    };
    EsquemaEscenarioContext.prototype.lista = function () {
        return this.getRuleContext(0, ListaContext);
    };
    EsquemaEscenarioContext.prototype.clavevalor = function () {
        return this.getRuleContext(0, ClavevalorContext);
    };
    EsquemaEscenarioContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    EsquemaEscenarioContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    EsquemaEscenarioContext.prototype.esqEscEsp = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(EsqEscEspContext);
        }
        return this.getRuleContext(i, EsqEscEspContext);
    };
    Object.defineProperty(EsquemaEscenarioContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_esquemaEscenario;
        },
        enumerable: false,
        configurable: true
    });
    EsquemaEscenarioContext.prototype.accept = function (visitor) {
        if (visitor.visitEsquemaEscenario) {
            return visitor.visitEsquemaEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EsquemaEscenarioContext;
}(antlr.ParserRuleContext));
exports.EsquemaEscenarioContext = EsquemaEscenarioContext;
var CaracteristicaContext = /** @class */ (function (_super) {
    __extends(CaracteristicaContext, _super);
    function CaracteristicaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    CaracteristicaContext.prototype.nombreCaracteristica = function () {
        return this.getRuleContext(0, NombreCaracteristicaContext);
    };
    CaracteristicaContext.prototype.desCaracteristica = function () {
        return this.getRuleContext(0, DesCaracteristicaContext);
    };
    CaracteristicaContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    Object.defineProperty(CaracteristicaContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_caracteristica;
        },
        enumerable: false,
        configurable: true
    });
    CaracteristicaContext.prototype.accept = function (visitor) {
        if (visitor.visitCaracteristica) {
            return visitor.visitCaracteristica(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return CaracteristicaContext;
}(antlr.ParserRuleContext));
exports.CaracteristicaContext = CaracteristicaContext;
var NombreCaracteristicaContext = /** @class */ (function (_super) {
    __extends(NombreCaracteristicaContext, _super);
    function NombreCaracteristicaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    NombreCaracteristicaContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    NombreCaracteristicaContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    NombreCaracteristicaContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(NombreCaracteristicaContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_nombreCaracteristica;
        },
        enumerable: false,
        configurable: true
    });
    NombreCaracteristicaContext.prototype.accept = function (visitor) {
        if (visitor.visitNombreCaracteristica) {
            return visitor.visitNombreCaracteristica(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return NombreCaracteristicaContext;
}(antlr.ParserRuleContext));
exports.NombreCaracteristicaContext = NombreCaracteristicaContext;
var AntecedentesContext = /** @class */ (function (_super) {
    __extends(AntecedentesContext, _super);
    function AntecedentesContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AntecedentesContext.prototype.desAntecedente = function () {
        return this.getRuleContext(0, DesAntecedenteContext);
    };
    AntecedentesContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(AntecedentesContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_antecedentes;
        },
        enumerable: false,
        configurable: true
    });
    AntecedentesContext.prototype.accept = function (visitor) {
        if (visitor.visitAntecedentes) {
            return visitor.visitAntecedentes(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return AntecedentesContext;
}(antlr.ParserRuleContext));
exports.AntecedentesContext = AntecedentesContext;
var EscEspContext = /** @class */ (function (_super) {
    __extends(EscEspContext, _super);
    function EscEspContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EscEspContext.prototype.desEspecificacion = function () {
        return this.getRuleContext(0, DesEspecificacionContext);
    };
    EscEspContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    EscEspContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    Object.defineProperty(EscEspContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_escEsp;
        },
        enumerable: false,
        configurable: true
    });
    EscEspContext.prototype.accept = function (visitor) {
        if (visitor.visitEscEsp) {
            return visitor.visitEscEsp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EscEspContext;
}(antlr.ParserRuleContext));
exports.EscEspContext = EscEspContext;
var EsqEscEspContext = /** @class */ (function (_super) {
    __extends(EsqEscEspContext, _super);
    function EsqEscEspContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EsqEscEspContext.prototype.desEsqEspecificacion = function () {
        return this.getRuleContext(0, DesEsqEspecificacionContext);
    };
    EsqEscEspContext.prototype.tablaEncabezado = function () {
        return this.getRuleContext(0, TablaEncabezadoContext);
    };
    EsqEscEspContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    EsqEscEspContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    Object.defineProperty(EsqEscEspContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_esqEscEsp;
        },
        enumerable: false,
        configurable: true
    });
    EsqEscEspContext.prototype.accept = function (visitor) {
        if (visitor.visitEsqEscEsp) {
            return visitor.visitEsqEscEsp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EsqEscEspContext;
}(antlr.ParserRuleContext));
exports.EsqEscEspContext = EsqEscEspContext;
var DesCaracteristicaContext = /** @class */ (function (_super) {
    __extends(DesCaracteristicaContext, _super);
    function DesCaracteristicaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesCaracteristicaContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    DesCaracteristicaContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    DesCaracteristicaContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(DesCaracteristicaContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_desCaracteristica;
        },
        enumerable: false,
        configurable: true
    });
    DesCaracteristicaContext.prototype.accept = function (visitor) {
        if (visitor.visitDesCaracteristica) {
            return visitor.visitDesCaracteristica(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesCaracteristicaContext;
}(antlr.ParserRuleContext));
exports.DesCaracteristicaContext = DesCaracteristicaContext;
var DesAntecedenteContext = /** @class */ (function (_super) {
    __extends(DesAntecedenteContext, _super);
    function DesAntecedenteContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesAntecedenteContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    DesAntecedenteContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    DesAntecedenteContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(DesAntecedenteContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_desAntecedente;
        },
        enumerable: false,
        configurable: true
    });
    DesAntecedenteContext.prototype.accept = function (visitor) {
        if (visitor.visitDesAntecedente) {
            return visitor.visitDesAntecedente(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesAntecedenteContext;
}(antlr.ParserRuleContext));
exports.DesAntecedenteContext = DesAntecedenteContext;
var DesEscenarioContext = /** @class */ (function (_super) {
    __extends(DesEscenarioContext, _super);
    function DesEscenarioContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesEscenarioContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    DesEscenarioContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    DesEscenarioContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(DesEscenarioContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_desEscenario;
        },
        enumerable: false,
        configurable: true
    });
    DesEscenarioContext.prototype.accept = function (visitor) {
        if (visitor.visitDesEscenario) {
            return visitor.visitDesEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesEscenarioContext;
}(antlr.ParserRuleContext));
exports.DesEscenarioContext = DesEscenarioContext;
var DesEsqEscenarioContext = /** @class */ (function (_super) {
    __extends(DesEsqEscenarioContext, _super);
    function DesEsqEscenarioContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesEsqEscenarioContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    DesEsqEscenarioContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    DesEsqEscenarioContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(DesEsqEscenarioContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_desEsqEscenario;
        },
        enumerable: false,
        configurable: true
    });
    DesEsqEscenarioContext.prototype.accept = function (visitor) {
        if (visitor.visitDesEsqEscenario) {
            return visitor.visitDesEsqEscenario(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesEsqEscenarioContext;
}(antlr.ParserRuleContext));
exports.DesEsqEscenarioContext = DesEsqEscenarioContext;
var DesEspecificacionContext = /** @class */ (function (_super) {
    __extends(DesEspecificacionContext, _super);
    function DesEspecificacionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesEspecificacionContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    DesEspecificacionContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    DesEspecificacionContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(DesEspecificacionContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_desEspecificacion;
        },
        enumerable: false,
        configurable: true
    });
    DesEspecificacionContext.prototype.accept = function (visitor) {
        if (visitor.visitDesEspecificacion) {
            return visitor.visitDesEspecificacion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesEspecificacionContext;
}(antlr.ParserRuleContext));
exports.DesEspecificacionContext = DesEspecificacionContext;
var DesEsqEspecificacionContext = /** @class */ (function (_super) {
    __extends(DesEsqEspecificacionContext, _super);
    function DesEsqEspecificacionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DesEsqEspecificacionContext.prototype.NUMERO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUMERO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUMERO, i);
        }
    };
    DesEsqEspecificacionContext.prototype.variableEsquema = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableEsquemaContext);
        }
        return this.getRuleContext(i, VariableEsquemaContext);
    };
    DesEsqEspecificacionContext.prototype.PALABRA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.PALABRA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.PALABRA, i);
        }
    };
    DesEsqEspecificacionContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    Object.defineProperty(DesEsqEspecificacionContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_desEsqEspecificacion;
        },
        enumerable: false,
        configurable: true
    });
    DesEsqEspecificacionContext.prototype.accept = function (visitor) {
        if (visitor.visitDesEsqEspecificacion) {
            return visitor.visitDesEsqEspecificacion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DesEsqEspecificacionContext;
}(antlr.ParserRuleContext));
exports.DesEsqEspecificacionContext = DesEsqEspecificacionContext;
var TablaEncabezadoContext = /** @class */ (function (_super) {
    __extends(TablaEncabezadoContext, _super);
    function TablaEncabezadoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    TablaEncabezadoContext.prototype.encabezado = function () {
        return this.getRuleContext(0, EncabezadoContext);
    };
    TablaEncabezadoContext.prototype.filasDatos = function () {
        return this.getRuleContext(0, FilasDatosContext);
    };
    Object.defineProperty(TablaEncabezadoContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_tablaEncabezado;
        },
        enumerable: false,
        configurable: true
    });
    TablaEncabezadoContext.prototype.accept = function (visitor) {
        if (visitor.visitTablaEncabezado) {
            return visitor.visitTablaEncabezado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return TablaEncabezadoContext;
}(antlr.ParserRuleContext));
exports.TablaEncabezadoContext = TablaEncabezadoContext;
var EncabezadoContext = /** @class */ (function (_super) {
    __extends(EncabezadoContext, _super);
    function EncabezadoContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    EncabezadoContext.prototype.FILATABLA = function () {
        return this.getToken(SpecscriptGrammarParser.FILATABLA, 0);
    };
    Object.defineProperty(EncabezadoContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_encabezado;
        },
        enumerable: false,
        configurable: true
    });
    EncabezadoContext.prototype.accept = function (visitor) {
        if (visitor.visitEncabezado) {
            return visitor.visitEncabezado(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return EncabezadoContext;
}(antlr.ParserRuleContext));
exports.EncabezadoContext = EncabezadoContext;
var FilasDatosContext = /** @class */ (function (_super) {
    __extends(FilasDatosContext, _super);
    function FilasDatosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FilasDatosContext.prototype.FILATABLA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.FILATABLA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.FILATABLA, i);
        }
    };
    Object.defineProperty(FilasDatosContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_filasDatos;
        },
        enumerable: false,
        configurable: true
    });
    FilasDatosContext.prototype.accept = function (visitor) {
        if (visitor.visitFilasDatos) {
            return visitor.visitFilasDatos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return FilasDatosContext;
}(antlr.ParserRuleContext));
exports.FilasDatosContext = FilasDatosContext;
var ListaContext = /** @class */ (function (_super) {
    __extends(ListaContext, _super);
    function ListaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ListaContext.prototype.CELDA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.CELDA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.CELDA, i);
        }
    };
    ListaContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    ListaContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    Object.defineProperty(ListaContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_lista;
        },
        enumerable: false,
        configurable: true
    });
    ListaContext.prototype.accept = function (visitor) {
        if (visitor.visitLista) {
            return visitor.visitLista(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ListaContext;
}(antlr.ParserRuleContext));
exports.ListaContext = ListaContext;
var ClavevalorContext = /** @class */ (function (_super) {
    __extends(ClavevalorContext, _super);
    function ClavevalorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClavevalorContext.prototype.clave = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ClaveContext);
        }
        return this.getRuleContext(i, ClaveContext);
    };
    ClavevalorContext.prototype.valor = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(ValorContext);
        }
        return this.getRuleContext(i, ValorContext);
    };
    ClavevalorContext.prototype.ESPACIO = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.ESPACIO);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.ESPACIO, i);
        }
    };
    ClavevalorContext.prototype.NUEVALINEA = function (i) {
        if (i === undefined) {
            return this.getTokens(SpecscriptGrammarParser.NUEVALINEA);
        }
        else {
            return this.getToken(SpecscriptGrammarParser.NUEVALINEA, i);
        }
    };
    Object.defineProperty(ClavevalorContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_clavevalor;
        },
        enumerable: false,
        configurable: true
    });
    ClavevalorContext.prototype.accept = function (visitor) {
        if (visitor.visitClavevalor) {
            return visitor.visitClavevalor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClavevalorContext;
}(antlr.ParserRuleContext));
exports.ClavevalorContext = ClavevalorContext;
var ClaveContext = /** @class */ (function (_super) {
    __extends(ClaveContext, _super);
    function ClaveContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ClaveContext.prototype.CELDA = function () {
        return this.getToken(SpecscriptGrammarParser.CELDA, 0);
    };
    Object.defineProperty(ClaveContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_clave;
        },
        enumerable: false,
        configurable: true
    });
    ClaveContext.prototype.accept = function (visitor) {
        if (visitor.visitClave) {
            return visitor.visitClave(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ClaveContext;
}(antlr.ParserRuleContext));
exports.ClaveContext = ClaveContext;
var ValorContext = /** @class */ (function (_super) {
    __extends(ValorContext, _super);
    function ValorContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ValorContext.prototype.CELDA = function () {
        return this.getToken(SpecscriptGrammarParser.CELDA, 0);
    };
    Object.defineProperty(ValorContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_valor;
        },
        enumerable: false,
        configurable: true
    });
    ValorContext.prototype.accept = function (visitor) {
        if (visitor.visitValor) {
            return visitor.visitValor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return ValorContext;
}(antlr.ParserRuleContext));
exports.ValorContext = ValorContext;
var OperacionContext = /** @class */ (function (_super) {
    __extends(OperacionContext, _super);
    function OperacionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    OperacionContext.prototype.PALABRA = function () {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    };
    Object.defineProperty(OperacionContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_operacion;
        },
        enumerable: false,
        configurable: true
    });
    OperacionContext.prototype.accept = function (visitor) {
        if (visitor.visitOperacion) {
            return visitor.visitOperacion(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return OperacionContext;
}(antlr.ParserRuleContext));
exports.OperacionContext = OperacionContext;
var VariableEsquemaContext = /** @class */ (function (_super) {
    __extends(VariableEsquemaContext, _super);
    function VariableEsquemaContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableEsquemaContext.prototype.PALABRA = function () {
        return this.getToken(SpecscriptGrammarParser.PALABRA, 0);
    };
    Object.defineProperty(VariableEsquemaContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_variableEsquema;
        },
        enumerable: false,
        configurable: true
    });
    VariableEsquemaContext.prototype.accept = function (visitor) {
        if (visitor.visitVariableEsquema) {
            return visitor.visitVariableEsquema(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return VariableEsquemaContext;
}(antlr.ParserRuleContext));
exports.VariableEsquemaContext = VariableEsquemaContext;
var DatosContext = /** @class */ (function (_super) {
    __extends(DatosContext, _super);
    function DatosContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    DatosContext.prototype.NUMERO = function () {
        return this.getToken(SpecscriptGrammarParser.NUMERO, 0);
    };
    DatosContext.prototype.CADENA = function () {
        return this.getToken(SpecscriptGrammarParser.CADENA, 0);
    };
    Object.defineProperty(DatosContext.prototype, "ruleIndex", {
        get: function () {
            return SpecscriptGrammarParser.RULE_datos;
        },
        enumerable: false,
        configurable: true
    });
    DatosContext.prototype.accept = function (visitor) {
        if (visitor.visitDatos) {
            return visitor.visitDatos(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    };
    return DatosContext;
}(antlr.ParserRuleContext));
exports.DatosContext = DatosContext;
