"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ng_1 = require("antlr4ng");
const SpecscriptGrammarLexer_js_1 = require("./generated/SpecscriptGrammarLexer.js");
const SpecscriptGrammarParser_js_1 = require("./generated/SpecscriptGrammarParser.js");
const JsJestVisitor_1 = __importDefault(require("./JsJestVisitor"));
const fs_1 = require("fs");
const filePath = './input.sps';
try {
    const input = (0, fs_1.readFileSync)(filePath, 'utf-8');
    const inputStream = antlr4ng_1.CharStream.fromString(input);
    const lexer = new SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer(inputStream);
    const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
    const parser = new SpecscriptGrammarParser_js_1.SpecscriptGrammarParser(tokenStream);
    const tree = parser.prog();
    const visitor = new JsJestVisitor_1.default();
    const result = visitor.visit(tree);
    (0, fs_1.writeFileSync)("./output.test.js", result);
    console.log(result);
}
catch (error) {
    console.error('Error: ', error);
}
