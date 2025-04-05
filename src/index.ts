import { CharStream, CommonTokenStream } from "antlr4ng";
import { SpecscriptGrammarLexer } from "./generated/SpecscriptGrammarLexer.js";
import { SpecscriptGrammarParser } from "./generated/SpecscriptGrammarParser.js";
import JsJestVisitor from "./JsJestVisitor"
import { readFileSync, writeFileSync } from 'fs';

const filePath = './input.sps';
try{
  const input = readFileSync(filePath, 'utf-8'); 
  const inputStream = CharStream.fromString(input);
  const lexer = new SpecscriptGrammarLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new SpecscriptGrammarParser(tokenStream);
  const tree = parser.prog();
  const visitor = new JsJestVisitor();
  const result = visitor.visit(tree) as string;
  writeFileSync("./output.test.js",result);
  console.log(result);
}
catch(error){
  console.error('Error: ',error)
}
