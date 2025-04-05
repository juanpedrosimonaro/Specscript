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
exports.SpecscriptGrammarVisitor = void 0;
var antlr4ng_1 = require("antlr4ng");
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SpecscriptGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
var SpecscriptGrammarVisitor = /** @class */ (function (_super) {
    __extends(SpecscriptGrammarVisitor, _super);
    function SpecscriptGrammarVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SpecscriptGrammarVisitor;
}(antlr4ng_1.AbstractParseTreeVisitor));
exports.SpecscriptGrammarVisitor = SpecscriptGrammarVisitor;
