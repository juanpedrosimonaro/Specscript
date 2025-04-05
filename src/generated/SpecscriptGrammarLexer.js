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
exports.SpecscriptGrammarLexer = void 0;
var antlr = require("antlr4ng");
var SpecscriptGrammarLexer = /** @class */ (function (_super) {
    __extends(SpecscriptGrammarLexer, _super);
    function SpecscriptGrammarLexer(input) {
        var _this = _super.call(this, input) || this;
        _this.interpreter = new antlr.LexerATNSimulator(_this, SpecscriptGrammarLexer._ATN, SpecscriptGrammarLexer.decisionsToDFA, new antlr.PredictionContextCache());
        return _this;
    }
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "grammarFileName", {
        get: function () { return "SpecscriptGrammar.g4"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "literalNames", {
        get: function () { return SpecscriptGrammarLexer.literalNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "symbolicNames", {
        get: function () { return SpecscriptGrammarLexer.symbolicNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "ruleNames", {
        get: function () { return SpecscriptGrammarLexer.ruleNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "serializedATN", {
        get: function () { return SpecscriptGrammarLexer._serializedATN; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "channelNames", {
        get: function () { return SpecscriptGrammarLexer.channelNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "modeNames", {
        get: function () { return SpecscriptGrammarLexer.modeNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer, "_ATN", {
        get: function () {
            if (!SpecscriptGrammarLexer.__ATN) {
                SpecscriptGrammarLexer.__ATN = new antlr.ATNDeserializer().deserialize(SpecscriptGrammarLexer._serializedATN);
            }
            return SpecscriptGrammarLexer.__ATN;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SpecscriptGrammarLexer.prototype, "vocabulary", {
        get: function () {
            return SpecscriptGrammarLexer.vocabulary;
        },
        enumerable: false,
        configurable: true
    });
    SpecscriptGrammarLexer.T__0 = 1;
    SpecscriptGrammarLexer.T__1 = 2;
    SpecscriptGrammarLexer.T__2 = 3;
    SpecscriptGrammarLexer.T__3 = 4;
    SpecscriptGrammarLexer.T__4 = 5;
    SpecscriptGrammarLexer.T__5 = 6;
    SpecscriptGrammarLexer.T__6 = 7;
    SpecscriptGrammarLexer.T__7 = 8;
    SpecscriptGrammarLexer.T__8 = 9;
    SpecscriptGrammarLexer.T__9 = 10;
    SpecscriptGrammarLexer.T__10 = 11;
    SpecscriptGrammarLexer.T__11 = 12;
    SpecscriptGrammarLexer.T__12 = 13;
    SpecscriptGrammarLexer.T__13 = 14;
    SpecscriptGrammarLexer.T__14 = 15;
    SpecscriptGrammarLexer.T__15 = 16;
    SpecscriptGrammarLexer.T__16 = 17;
    SpecscriptGrammarLexer.T__17 = 18;
    SpecscriptGrammarLexer.T__18 = 19;
    SpecscriptGrammarLexer.T__19 = 20;
    SpecscriptGrammarLexer.T__20 = 21;
    SpecscriptGrammarLexer.T__21 = 22;
    SpecscriptGrammarLexer.NUMERO = 23;
    SpecscriptGrammarLexer.NUEVALINEA = 24;
    SpecscriptGrammarLexer.PALABRA = 25;
    SpecscriptGrammarLexer.ESPACIO = 26;
    SpecscriptGrammarLexer.CADENA = 27;
    SpecscriptGrammarLexer.CELDA = 28;
    SpecscriptGrammarLexer.FILATABLA = 29;
    SpecscriptGrammarLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];
    SpecscriptGrammarLexer.literalNames = [
        null, "'Ejemplo'", "'Escenario'", "':'", "'Esquema del escenario:'",
        "'Ejemplos:'", "'Caracteristica'", "'Requisito de Negocio'", "'Requisito'",
        "'Antecedentes:'", "'*'", "'Dado'", "'Dada'", "'Dados'", "'Dadas'",
        "'Cuando'", "'Entonces'", "'Y'", "'E'", "'Pero'", "'|'", "'<'",
        "'>'"
    ];
    SpecscriptGrammarLexer.symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null,
        null, "NUMERO", "NUEVALINEA", "PALABRA", "ESPACIO", "CADENA", "CELDA",
        "FILATABLA"
    ];
    SpecscriptGrammarLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    SpecscriptGrammarLexer.ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7",
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15",
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "MINUSCULA",
        "MAYUSCULA", "DIGITO", "ORACION", "ARTICULO", "EN", "NUMERO", "NUEVALINEA",
        "PALABRA", "ESPACIO", "CADENA", "CELDA", "FILATABLA",
    ];
    SpecscriptGrammarLexer._serializedATN = [
        4, 0, 29, 340, 6, -1, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5,
        2, 6, 7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2,
        13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7,
        19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2,
        26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7,
        32, 2, 33, 7, 33, 2, 34, 7, 34, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
        3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1,
        3, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,
        5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1,
        6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 6, 1, 7, 1,
        7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1,
        8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 8, 1, 9, 1, 9, 1, 10, 1, 10, 1, 10, 1, 10, 1, 10, 1, 11,
        1, 11, 1, 11, 1, 11, 1, 11, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 12, 1, 13, 1, 13, 1, 13,
        1, 13, 1, 13, 1, 13, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 14, 1, 15, 1, 15, 1, 15,
        1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 16, 1, 16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 18,
        1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 1, 23, 1, 24,
        1, 24, 1, 25, 1, 25, 4, 25, 248, 8, 25, 11, 25, 12, 25, 249, 4, 25, 252, 8, 25, 11, 25,
        12, 25, 253, 1, 26, 1, 26, 1, 26, 1, 26, 3, 26, 260, 8, 26, 1, 27, 1, 27, 1, 27, 1, 28,
        3, 28, 266, 8, 28, 1, 28, 4, 28, 269, 8, 28, 11, 28, 12, 28, 270, 1, 28, 1, 28, 4, 28,
        275, 8, 28, 11, 28, 12, 28, 276, 3, 28, 279, 8, 28, 1, 29, 3, 29, 282, 8, 29, 1, 29, 1,
        29, 4, 29, 286, 8, 29, 11, 29, 12, 29, 287, 1, 29, 5, 29, 291, 8, 29, 10, 29, 12, 29,
        294, 9, 29, 1, 30, 1, 30, 4, 30, 298, 8, 30, 11, 30, 12, 30, 299, 1, 31, 1, 31, 1, 31,
        1, 31, 1, 32, 1, 32, 5, 32, 308, 8, 32, 10, 32, 12, 32, 311, 9, 32, 1, 32, 1, 32, 1, 33,
        5, 33, 316, 8, 33, 10, 33, 12, 33, 319, 9, 33, 1, 33, 1, 33, 5, 33, 323, 8, 33, 10, 33,
        12, 33, 326, 9, 33, 1, 33, 1, 33, 1, 34, 1, 34, 4, 34, 332, 8, 34, 11, 34, 12, 34, 333,
        1, 34, 4, 34, 337, 8, 34, 11, 34, 12, 34, 338, 1, 309, 0, 35, 1, 1, 3, 2, 5, 3, 7, 4, 9,
        5, 11, 6, 13, 7, 15, 8, 17, 9, 19, 10, 21, 11, 23, 12, 25, 13, 27, 14, 29, 15, 31, 16,
        33, 17, 35, 18, 37, 19, 39, 20, 41, 21, 43, 22, 45, 0, 47, 0, 49, 0, 51, 0, 53, 0, 55,
        0, 57, 23, 59, 24, 61, 25, 63, 26, 65, 27, 67, 28, 69, 29, 1, 0, 5, 1, 0, 97, 122, 1, 0,
        65, 90, 1, 0, 48, 57, 1, 0, 46, 46, 2, 0, 9, 9, 32, 32, 352, 0, 1, 1, 0, 0, 0, 0, 3, 1, 0,
        0, 0, 0, 5, 1, 0, 0, 0, 0, 7, 1, 0, 0, 0, 0, 9, 1, 0, 0, 0, 0, 11, 1, 0, 0, 0, 0, 13, 1, 0, 0,
        0, 0, 15, 1, 0, 0, 0, 0, 17, 1, 0, 0, 0, 0, 19, 1, 0, 0, 0, 0, 21, 1, 0, 0, 0, 0, 23, 1, 0, 0,
        0, 0, 25, 1, 0, 0, 0, 0, 27, 1, 0, 0, 0, 0, 29, 1, 0, 0, 0, 0, 31, 1, 0, 0, 0, 0, 33, 1, 0, 0,
        0, 0, 35, 1, 0, 0, 0, 0, 37, 1, 0, 0, 0, 0, 39, 1, 0, 0, 0, 0, 41, 1, 0, 0, 0, 0, 43, 1, 0, 0,
        0, 0, 57, 1, 0, 0, 0, 0, 59, 1, 0, 0, 0, 0, 61, 1, 0, 0, 0, 0, 63, 1, 0, 0, 0, 0, 65, 1, 0, 0,
        0, 0, 67, 1, 0, 0, 0, 0, 69, 1, 0, 0, 0, 1, 71, 1, 0, 0, 0, 3, 79, 1, 0, 0, 0, 5, 89, 1, 0, 0,
        0, 7, 91, 1, 0, 0, 0, 9, 114, 1, 0, 0, 0, 11, 124, 1, 0, 0, 0, 13, 139, 1, 0, 0, 0, 15, 160,
        1, 0, 0, 0, 17, 170, 1, 0, 0, 0, 19, 184, 1, 0, 0, 0, 21, 186, 1, 0, 0, 0, 23, 191, 1, 0,
        0, 0, 25, 196, 1, 0, 0, 0, 27, 202, 1, 0, 0, 0, 29, 208, 1, 0, 0, 0, 31, 215, 1, 0, 0, 0,
        33, 224, 1, 0, 0, 0, 35, 226, 1, 0, 0, 0, 37, 228, 1, 0, 0, 0, 39, 233, 1, 0, 0, 0, 41, 235,
        1, 0, 0, 0, 43, 237, 1, 0, 0, 0, 45, 239, 1, 0, 0, 0, 47, 241, 1, 0, 0, 0, 49, 243, 1, 0,
        0, 0, 51, 251, 1, 0, 0, 0, 53, 259, 1, 0, 0, 0, 55, 261, 1, 0, 0, 0, 57, 265, 1, 0, 0, 0,
        59, 285, 1, 0, 0, 0, 61, 297, 1, 0, 0, 0, 63, 301, 1, 0, 0, 0, 65, 305, 1, 0, 0, 0, 67, 317,
        1, 0, 0, 0, 69, 329, 1, 0, 0, 0, 71, 72, 5, 69, 0, 0, 72, 73, 5, 106, 0, 0, 73, 74, 5, 101,
        0, 0, 74, 75, 5, 109, 0, 0, 75, 76, 5, 112, 0, 0, 76, 77, 5, 108, 0, 0, 77, 78, 5, 111,
        0, 0, 78, 2, 1, 0, 0, 0, 79, 80, 5, 69, 0, 0, 80, 81, 5, 115, 0, 0, 81, 82, 5, 99, 0, 0, 82,
        83, 5, 101, 0, 0, 83, 84, 5, 110, 0, 0, 84, 85, 5, 97, 0, 0, 85, 86, 5, 114, 0, 0, 86, 87,
        5, 105, 0, 0, 87, 88, 5, 111, 0, 0, 88, 4, 1, 0, 0, 0, 89, 90, 5, 58, 0, 0, 90, 6, 1, 0, 0,
        0, 91, 92, 5, 69, 0, 0, 92, 93, 5, 115, 0, 0, 93, 94, 5, 113, 0, 0, 94, 95, 5, 117, 0, 0,
        95, 96, 5, 101, 0, 0, 96, 97, 5, 109, 0, 0, 97, 98, 5, 97, 0, 0, 98, 99, 5, 32, 0, 0, 99,
        100, 5, 100, 0, 0, 100, 101, 5, 101, 0, 0, 101, 102, 5, 108, 0, 0, 102, 103, 5, 32, 0,
        0, 103, 104, 5, 101, 0, 0, 104, 105, 5, 115, 0, 0, 105, 106, 5, 99, 0, 0, 106, 107, 5,
        101, 0, 0, 107, 108, 5, 110, 0, 0, 108, 109, 5, 97, 0, 0, 109, 110, 5, 114, 0, 0, 110,
        111, 5, 105, 0, 0, 111, 112, 5, 111, 0, 0, 112, 113, 5, 58, 0, 0, 113, 8, 1, 0, 0, 0, 114,
        115, 5, 69, 0, 0, 115, 116, 5, 106, 0, 0, 116, 117, 5, 101, 0, 0, 117, 118, 5, 109, 0,
        0, 118, 119, 5, 112, 0, 0, 119, 120, 5, 108, 0, 0, 120, 121, 5, 111, 0, 0, 121, 122,
        5, 115, 0, 0, 122, 123, 5, 58, 0, 0, 123, 10, 1, 0, 0, 0, 124, 125, 5, 67, 0, 0, 125, 126,
        5, 97, 0, 0, 126, 127, 5, 114, 0, 0, 127, 128, 5, 97, 0, 0, 128, 129, 5, 99, 0, 0, 129,
        130, 5, 116, 0, 0, 130, 131, 5, 101, 0, 0, 131, 132, 5, 114, 0, 0, 132, 133, 5, 105,
        0, 0, 133, 134, 5, 115, 0, 0, 134, 135, 5, 116, 0, 0, 135, 136, 5, 105, 0, 0, 136, 137,
        5, 99, 0, 0, 137, 138, 5, 97, 0, 0, 138, 12, 1, 0, 0, 0, 139, 140, 5, 82, 0, 0, 140, 141,
        5, 101, 0, 0, 141, 142, 5, 113, 0, 0, 142, 143, 5, 117, 0, 0, 143, 144, 5, 105, 0, 0,
        144, 145, 5, 115, 0, 0, 145, 146, 5, 105, 0, 0, 146, 147, 5, 116, 0, 0, 147, 148, 5,
        111, 0, 0, 148, 149, 5, 32, 0, 0, 149, 150, 5, 100, 0, 0, 150, 151, 5, 101, 0, 0, 151,
        152, 5, 32, 0, 0, 152, 153, 5, 78, 0, 0, 153, 154, 5, 101, 0, 0, 154, 155, 5, 103, 0,
        0, 155, 156, 5, 111, 0, 0, 156, 157, 5, 99, 0, 0, 157, 158, 5, 105, 0, 0, 158, 159, 5,
        111, 0, 0, 159, 14, 1, 0, 0, 0, 160, 161, 5, 82, 0, 0, 161, 162, 5, 101, 0, 0, 162, 163,
        5, 113, 0, 0, 163, 164, 5, 117, 0, 0, 164, 165, 5, 105, 0, 0, 165, 166, 5, 115, 0, 0,
        166, 167, 5, 105, 0, 0, 167, 168, 5, 116, 0, 0, 168, 169, 5, 111, 0, 0, 169, 16, 1, 0,
        0, 0, 170, 171, 5, 65, 0, 0, 171, 172, 5, 110, 0, 0, 172, 173, 5, 116, 0, 0, 173, 174,
        5, 101, 0, 0, 174, 175, 5, 99, 0, 0, 175, 176, 5, 101, 0, 0, 176, 177, 5, 100, 0, 0, 177,
        178, 5, 101, 0, 0, 178, 179, 5, 110, 0, 0, 179, 180, 5, 116, 0, 0, 180, 181, 5, 101,
        0, 0, 181, 182, 5, 115, 0, 0, 182, 183, 5, 58, 0, 0, 183, 18, 1, 0, 0, 0, 184, 185, 5,
        42, 0, 0, 185, 20, 1, 0, 0, 0, 186, 187, 5, 68, 0, 0, 187, 188, 5, 97, 0, 0, 188, 189,
        5, 100, 0, 0, 189, 190, 5, 111, 0, 0, 190, 22, 1, 0, 0, 0, 191, 192, 5, 68, 0, 0, 192,
        193, 5, 97, 0, 0, 193, 194, 5, 100, 0, 0, 194, 195, 5, 97, 0, 0, 195, 24, 1, 0, 0, 0, 196,
        197, 5, 68, 0, 0, 197, 198, 5, 97, 0, 0, 198, 199, 5, 100, 0, 0, 199, 200, 5, 111, 0,
        0, 200, 201, 5, 115, 0, 0, 201, 26, 1, 0, 0, 0, 202, 203, 5, 68, 0, 0, 203, 204, 5, 97,
        0, 0, 204, 205, 5, 100, 0, 0, 205, 206, 5, 97, 0, 0, 206, 207, 5, 115, 0, 0, 207, 28,
        1, 0, 0, 0, 208, 209, 5, 67, 0, 0, 209, 210, 5, 117, 0, 0, 210, 211, 5, 97, 0, 0, 211,
        212, 5, 110, 0, 0, 212, 213, 5, 100, 0, 0, 213, 214, 5, 111, 0, 0, 214, 30, 1, 0, 0, 0,
        215, 216, 5, 69, 0, 0, 216, 217, 5, 110, 0, 0, 217, 218, 5, 116, 0, 0, 218, 219, 5, 111,
        0, 0, 219, 220, 5, 110, 0, 0, 220, 221, 5, 99, 0, 0, 221, 222, 5, 101, 0, 0, 222, 223,
        5, 115, 0, 0, 223, 32, 1, 0, 0, 0, 224, 225, 5, 89, 0, 0, 225, 34, 1, 0, 0, 0, 226, 227,
        5, 69, 0, 0, 227, 36, 1, 0, 0, 0, 228, 229, 5, 80, 0, 0, 229, 230, 5, 101, 0, 0, 230, 231,
        5, 114, 0, 0, 231, 232, 5, 111, 0, 0, 232, 38, 1, 0, 0, 0, 233, 234, 5, 124, 0, 0, 234,
        40, 1, 0, 0, 0, 235, 236, 5, 60, 0, 0, 236, 42, 1, 0, 0, 0, 237, 238, 5, 62, 0, 0, 238,
        44, 1, 0, 0, 0, 239, 240, 7, 0, 0, 0, 240, 46, 1, 0, 0, 0, 241, 242, 7, 1, 0, 0, 242, 48,
        1, 0, 0, 0, 243, 244, 7, 2, 0, 0, 244, 50, 1, 0, 0, 0, 245, 252, 3, 61, 30, 0, 246, 248,
        3, 63, 31, 0, 247, 246, 1, 0, 0, 0, 248, 249, 1, 0, 0, 0, 249, 247, 1, 0, 0, 0, 249, 250,
        1, 0, 0, 0, 250, 252, 1, 0, 0, 0, 251, 245, 1, 0, 0, 0, 251, 247, 1, 0, 0, 0, 252, 253,
        1, 0, 0, 0, 253, 251, 1, 0, 0, 0, 253, 254, 1, 0, 0, 0, 254, 52, 1, 0, 0, 0, 255, 256, 5,
        101, 0, 0, 256, 260, 5, 108, 0, 0, 257, 258, 5, 108, 0, 0, 258, 260, 5, 97, 0, 0, 259,
        255, 1, 0, 0, 0, 259, 257, 1, 0, 0, 0, 260, 54, 1, 0, 0, 0, 261, 262, 5, 101, 0, 0, 262,
        263, 5, 110, 0, 0, 263, 56, 1, 0, 0, 0, 264, 266, 5, 45, 0, 0, 265, 264, 1, 0, 0, 0, 265,
        266, 1, 0, 0, 0, 266, 268, 1, 0, 0, 0, 267, 269, 3, 49, 24, 0, 268, 267, 1, 0, 0, 0, 269,
        270, 1, 0, 0, 0, 270, 268, 1, 0, 0, 0, 270, 271, 1, 0, 0, 0, 271, 278, 1, 0, 0, 0, 272,
        274, 7, 3, 0, 0, 273, 275, 3, 49, 24, 0, 274, 273, 1, 0, 0, 0, 275, 276, 1, 0, 0, 0, 276,
        274, 1, 0, 0, 0, 276, 277, 1, 0, 0, 0, 277, 279, 1, 0, 0, 0, 278, 272, 1, 0, 0, 0, 278,
        279, 1, 0, 0, 0, 279, 58, 1, 0, 0, 0, 280, 282, 5, 13, 0, 0, 281, 280, 1, 0, 0, 0, 281,
        282, 1, 0, 0, 0, 282, 283, 1, 0, 0, 0, 283, 286, 5, 10, 0, 0, 284, 286, 5, 13, 0, 0, 285,
        281, 1, 0, 0, 0, 285, 284, 1, 0, 0, 0, 286, 287, 1, 0, 0, 0, 287, 285, 1, 0, 0, 0, 287,
        288, 1, 0, 0, 0, 288, 292, 1, 0, 0, 0, 289, 291, 3, 63, 31, 0, 290, 289, 1, 0, 0, 0, 291,
        294, 1, 0, 0, 0, 292, 290, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0, 293, 60, 1, 0, 0, 0, 294, 292,
        1, 0, 0, 0, 295, 298, 3, 47, 23, 0, 296, 298, 3, 45, 22, 0, 297, 295, 1, 0, 0, 0, 297,
        296, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 297, 1, 0, 0, 0, 299, 300, 1, 0, 0, 0, 300,
        62, 1, 0, 0, 0, 301, 302, 7, 4, 0, 0, 302, 303, 1, 0, 0, 0, 303, 304, 6, 31, 0, 0, 304,
        64, 1, 0, 0, 0, 305, 309, 5, 34, 0, 0, 306, 308, 9, 0, 0, 0, 307, 306, 1, 0, 0, 0, 308,
        311, 1, 0, 0, 0, 309, 310, 1, 0, 0, 0, 309, 307, 1, 0, 0, 0, 310, 312, 1, 0, 0, 0, 311,
        309, 1, 0, 0, 0, 312, 313, 5, 34, 0, 0, 313, 66, 1, 0, 0, 0, 314, 316, 3, 63, 31, 0, 315,
        314, 1, 0, 0, 0, 316, 319, 1, 0, 0, 0, 317, 315, 1, 0, 0, 0, 317, 318, 1, 0, 0, 0, 318,
        320, 1, 0, 0, 0, 319, 317, 1, 0, 0, 0, 320, 324, 3, 57, 28, 0, 321, 323, 3, 63, 31, 0,
        322, 321, 1, 0, 0, 0, 323, 326, 1, 0, 0, 0, 324, 322, 1, 0, 0, 0, 324, 325, 1, 0, 0, 0,
        325, 327, 1, 0, 0, 0, 326, 324, 1, 0, 0, 0, 327, 328, 5, 124, 0, 0, 328, 68, 1, 0, 0, 0,
        329, 331, 5, 124, 0, 0, 330, 332, 3, 67, 33, 0, 331, 330, 1, 0, 0, 0, 332, 333, 1, 0,
        0, 0, 333, 331, 1, 0, 0, 0, 333, 334, 1, 0, 0, 0, 334, 336, 1, 0, 0, 0, 335, 337, 3, 59,
        29, 0, 336, 335, 1, 0, 0, 0, 337, 338, 1, 0, 0, 0, 338, 336, 1, 0, 0, 0, 338, 339, 1, 0,
        0, 0, 339, 70, 1, 0, 0, 0, 20, 0, 249, 251, 253, 259, 265, 270, 276, 278, 281, 285,
        287, 292, 297, 299, 309, 317, 324, 333, 338, 1, 6, 0, 0
    ];
    SpecscriptGrammarLexer.vocabulary = new antlr.Vocabulary(SpecscriptGrammarLexer.literalNames, SpecscriptGrammarLexer.symbolicNames, []);
    SpecscriptGrammarLexer.decisionsToDFA = SpecscriptGrammarLexer._ATN.decisionToState.map(function (ds, index) { return new antlr.DFA(ds, index); });
    return SpecscriptGrammarLexer;
}(antlr.Lexer));
exports.SpecscriptGrammarLexer = SpecscriptGrammarLexer;
