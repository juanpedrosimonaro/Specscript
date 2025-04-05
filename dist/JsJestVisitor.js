"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpecscriptGrammarVisitor_js_1 = require("./generated/SpecscriptGrammarVisitor.js");
const SpecscriptGrammarLexer_js_1 = require("./generated/SpecscriptGrammarLexer.js");
const SpecscriptGrammarParser_1 = require("./generated/SpecscriptGrammarParser");
class JsJestVisitor extends SpecscriptGrammarVisitor_js_1.SpecscriptGrammarVisitor {
    constructor() {
        super();
        this.visitProg = (ctx) => {
            const caracteristica = ctx.caracteristica();
            const antecedentes = ctx.antecedentes();
            const escenarios = ctx.children.filter((child) => child instanceof SpecscriptGrammarParser_1.EscenarioContext);
            const datosCaracteristica = this.visit(caracteristica) || []; //caracteristica.getText();
            this.codigoGenerado += `import ${this.nombreClase} from "../codigoParaProbar/${this.nombreClase}"\n`;
            if (antecedentes) {
                const antArray = this.visit(antecedentes);
                this.globales = antArray.slice(1);
                this.codigoGenerado += `import {${this.globales.join(", ")}} from "../datos.json"\n`;
                this.codigoGenerado += `\nBeforeAll(()=>{ \n`;
                if (datosCaracteristica?.length >= 2) {
                    this.codigoGenerado += `\tconsole.log("${datosCaracteristica[0]}\\n${datosCaracteristica[1]}");  \n`;
                    this.codigoGenerado += `\tconsole.log("Antecedente: ${antArray[0]}");  \n`;
                }
            }
            else {
                this.codigoGenerado += `\nBeforeAll(()=>{ \n \tconsole.log("${datosCaracteristica[0]}\\n${datosCaracteristica[1]}");\n`;
            }
            this.codigoGenerado += "});\n";
            this.codigoGenerado += escenarios.reduce((acum, cur) => acum + this.visit(cur), "");
            return this.codigoGenerado;
        };
        this.visitCaracteristica = (ctx) => {
            let caracteristica = [];
            caracteristica.push(this.visit(ctx.nombreCaracteristica()) || "");
            if (ctx.desCaracteristica()) {
                caracteristica.push(ctx.desCaracteristica()?.getText() || "");
            }
            return caracteristica;
        };
        this.visitNombreCaracteristica = (ctx) => {
            this.nombreClase = ctx._nombreClase?.text || "";
            this.nombreClase = this.nombreClase[0].toUpperCase() + this.nombreClase.slice(1);
            return ctx.getText();
        };
        this.visitAntecedentes = (ctx) => {
            const nombre = ctx.nombreAntecedentes().getText();
            const variablesExternas = ctx.children.filter(child => child instanceof SpecscriptGrammarParser_1.VariableExternaContext).map(varEx => varEx._nombreVariable?.text || "");
            return [nombre, ...variablesExternas];
        };
        this.visitEscenario = (ctx) => {
            let variables = [];
            let codigoEscenario = "";
            let i = 1;
            let nomRes = "resultado1";
            codigoEscenario += `\ndescribe("${ctx.nombreEscenario().getText()}",()=>{\n`;
            ctx.escEsp().forEach(escEsp => {
                const child = escEsp.desEspecificacion();
                if (child instanceof SpecscriptGrammarParser_1.OperacionSimpleContext) {
                    const nombreFuncion = child._funcion?.text || "";
                    while (variables.indexOf(nomRes) >= 0) {
                        i++;
                        nomRes = "resultado" + i;
                    }
                    variables.push(nomRes);
                    const datosArray = child.datos().children.filter(dato => {
                        const tokenType = (dato.symbol).type;
                        return tokenType == SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer.NUMERO || tokenType == SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer.PALABRA || tokenType == SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer.CADENA;
                    }).map(dato => dato.getText());
                    codigoEscenario += `\tconst ${nomRes} = ${this.nombreClase}.${nombreFuncion}(${datosArray?.join(", ")});\n`;
                }
                else if (child instanceof SpecscriptGrammarParser_1.FuncionAgregacionContext) {
                    const nombreFuncion = child._funcion?.text || "";
                    const prevNomRes = nomRes;
                    while (variables.indexOf(nomRes) >= 0) {
                        i++;
                        nomRes = "resultado" + i;
                    }
                    variables.push(nomRes);
                    const datosArray = child.datos().children.filter(dato => {
                        const tokenType = (dato.symbol).type;
                        return tokenType == SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer.NUMERO || tokenType == SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer.PALABRA || tokenType == SpecscriptGrammarLexer_js_1.SpecscriptGrammarLexer.CADENA;
                    }).map(dato => dato.getText());
                    codigoEscenario += `\tconst ${nomRes} = ${this.nombreClase}.${nombreFuncion}(${prevNomRes}${!!datosArray ? ', ' + datosArray.join(", ") : ''});\n`;
                }
                else if (child instanceof SpecscriptGrammarParser_1.ComprobarResultadoContext) {
                    codigoEscenario += `\texpect(${nomRes}).toBe(${child.dato().getText()});\n`;
                }
                else if (child instanceof SpecscriptGrammarParser_1.AsignacionVariableContext) {
                    const nombreVariable = child._nombreVariable?.text || "";
                    if (variables.indexOf(nombreVariable) >= 0)
                        throw Error("Variable ya declarada");
                    variables.push(nombreVariable);
                    codigoEscenario += `\tconst ${nombreVariable} = ${child.dato().getText()};\n`;
                }
                else if (child instanceof SpecscriptGrammarParser_1.ComprobarFuncionVariablesContext) {
                    const nombreFuncion = child._funcion?.text || "";
                    const variableArray = child.variables().PALABRA().map(variable => variable.getText());
                    codigoEscenario += `\texpect(${this.nombreClase}.${nombreFuncion}(${variableArray.join(", ")})).toBe(${child.dato().getText()});\n`;
                }
            });
            codigoEscenario += `});`;
            return codigoEscenario;
        };
        this.nombreClase = "";
        this.codigoGenerado = "";
        this.globales = [];
    }
}
exports.default = JsJestVisitor;
