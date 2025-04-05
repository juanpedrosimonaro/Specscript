import { SpecscriptGrammarVisitor } from "./generated/SpecscriptGrammarVisitor.js";
import { SpecscriptGrammarLexer as Lexer } from "./generated/SpecscriptGrammarLexer.js";
import { ParseTree, ParserRuleContext, CommonToken, TerminalNode } from 'antlr4ng';
import { 
	ProgContext,
  EscenarioContext,
  EsquemaEscenarioContext,
	CaracteristicaContext,
	NombreCaracteristicaContext,
  VariableExternaContext,
  AntecedentesContext,
  OperacionSimpleContext,
  FuncionAgregacionContext,
  ComprobarResultadoContext,
  ComprobarFuncionVariablesContext,
  AsignacionVariableContext,
  DatoContext
} from './generated/SpecscriptGrammarParser';

export default class JsJestVisitor extends SpecscriptGrammarVisitor <string | number | string[]>{

private nombreClase: string;
private codigoGenerado: string;
private globales: string[];

constructor(){
    super();
    this.nombreClase = "";
    this.codigoGenerado = "";
    this.globales = [];
}

public visitProg = (ctx: ProgContext): string => {
    const caracteristica = ctx.caracteristica();
    const antecedentes = ctx.antecedentes();
    const escenarios = ctx.children.filter( (child: ParseTree) => child instanceof EscenarioContext 
    );

    const datosCaracteristica : string[] = this.visit(caracteristica) as string[] || [] ; //caracteristica.getText();
    this.codigoGenerado += `import ${this.nombreClase} from "./codigoParaProbar/${this.nombreClase}"\n`;
    if (antecedentes) {
      const antArray = this.visit(antecedentes) as string[];
      this.globales = antArray.slice(1); 
      this.codigoGenerado += `import {${this.globales.join(", ")}} from "./datos.json"\n`;
      this.codigoGenerado += `\nbeforeAll(()=>{ \n`;
      if(datosCaracteristica?.length>=2){
        this.codigoGenerado += `\tconsole.log("${datosCaracteristica[0]}\\n${datosCaracteristica[1]}");  \n`;
        this.codigoGenerado += `\tconsole.log("Antecedente: ${antArray[0]}");  \n`;
      }
    }
    else {
      this.codigoGenerado += `\nbeforeAll(()=>{ \n \tconsole.log("${datosCaracteristica[0]}\\n${datosCaracteristica[1]}");\n`;
    }
    this.codigoGenerado += "});\n"

    this.codigoGenerado += escenarios.reduce((acum,cur)=>acum+(this.visit(cur) as string),"");

    return this.codigoGenerado;
}

public visitCaracteristica = (ctx: CaracteristicaContext): string[] => {
    let caracteristica: string[] = [];
      caracteristica.push(this.visit(ctx.nombreCaracteristica()) as string ||"");
    if(ctx.desCaracteristica()){
        caracteristica.push(ctx.desCaracteristica()?.getText() || "");
    }
    return caracteristica; 
}

public visitNombreCaracteristica = (ctx: NombreCaracteristicaContext): string => {
    this.nombreClase = ctx._nombreClase?.text || "";
    this.nombreClase = this.nombreClase[0].toUpperCase() + this.nombreClase.slice(1);

    return ctx.getText(); 
}

public visitAntecedentes = (ctx: AntecedentesContext): string[] => {
  const nombre = ctx.nombreAntecedentes().getText();
  const variablesExternas = ctx.children.filter(child=>child instanceof VariableExternaContext).map(varEx=>varEx._nombreVariable?.text || "");
  return [nombre,...variablesExternas];
}

public visitEscenario = (ctx: EscenarioContext): string => {
  let variables : string[] = []; 
  let codigoEscenario = "";
  let i = 1;
  let nomRes = "resultado1"
  codigoEscenario += `\ntest("${ctx.nombreEscenario().getText()}",()=>{\n`;
  ctx.escEsp().forEach(escEsp=>{
    const child = escEsp.desEspecificacion();
    if(child instanceof OperacionSimpleContext){
      const nombreFuncion = child._funcion?.text || "";
      while(variables.indexOf(nomRes)>=0){i++; nomRes ="resultado"+i;}
      variables.push(nomRes);
      const datosArray = child.datos().children.filter(dato=> {
        const tokenType = (((dato as TerminalNode).symbol) as CommonToken).type; 
        return tokenType == Lexer.NUMERO || tokenType == Lexer.PALABRA || tokenType == Lexer.CADENA;
      } ).map(dato=>dato.getText());
      codigoEscenario += `\tconst ${nomRes} = ${this.nombreClase}.${nombreFuncion}(${datosArray?.join(", ")});\n` 
    }
    else if(child instanceof FuncionAgregacionContext){
      const nombreFuncion = child._funcion?.text || "";
      const prevNomRes = nomRes;
      while(variables.indexOf(nomRes)>=0){i++; nomRes ="resultado"+i;}
      variables.push(nomRes);
      const datosArray = child.datos().children.filter(dato=> {
        const tokenType = (((dato as TerminalNode).symbol) as CommonToken).type; 
        return tokenType == Lexer.NUMERO || tokenType == Lexer.PALABRA || tokenType == Lexer.CADENA;
      } ).map(dato=>dato.getText());
      codigoEscenario += `\tconst ${nomRes} = ${this.nombreClase}.${nombreFuncion}(${prevNomRes}${!!datosArray ? ', '+datosArray.join(", "):''});\n` ;
    }
    else if(child instanceof ComprobarResultadoContext){
      codigoEscenario += `\texpect(${nomRes}).toBe(${child.dato().getText()});\n`; 
    }
    else if(child instanceof AsignacionVariableContext){
      const nombreVariable = child._nombreVariable?.text || "";
      if(variables.indexOf(nombreVariable)>=0) throw Error("Variable ya declarada");
      variables.push(nombreVariable);
      codigoEscenario += `\tconst ${nombreVariable} = ${child.dato().getText()};\n`;
    }
    else if(child instanceof ComprobarFuncionVariablesContext){
      const nombreFuncion = child._funcion?.text || "";
      const variableArray = child.variables().PALABRA().map(variable=>variable.getText());
      codigoEscenario += `\texpect(${this.nombreClase}.${nombreFuncion}(${variableArray.join(", ")})).toBe(${child.dato().getText()});\n`;
    }
  })
  codigoEscenario += `});`;
  return codigoEscenario;
}


}

