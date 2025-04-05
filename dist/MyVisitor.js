"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SpecscriptGrammarVisitor_js_1 = require("./generated/SpecscriptGrammarVisitor.js");
const SpecscriptGrammarParser_1 = require("./generated/SpecscriptGrammarParser");
class MyVisitor extends SpecscriptGrammarVisitor_js_1.SpecscriptGrammarVisitor {
    constructor() {
        super();
        this.visitProg = (ctx) => {
            let codigoGenerado = "";
            console.log("Obteniendo valores");
            const caracteristica = ctx.caracteristica();
            const antecedentes = ctx.antecedentes();
            const escenariosYEsquemas = ctx.children.filter((child) => child instanceof SpecscriptGrammarParser_1.EscenarioContext || child instanceof SpecscriptGrammarParser_1.EsquemaEscenarioContext);
            console.log("Hijo obtenidos, obteniendo textos");
            codigoGenerado += this.visit(caracteristica); //caracteristica.getText();
            console.log("Caracteristica obtenido");
            if (antecedentes) {
                codigoGenerado += antecedentes.getText();
            }
            console.log("Antecedentes obtenido");
            escenariosYEsquemas.forEach((child, index) => {
                codigoGenerado += child.getText();
            });
            console.log("Escenarios y Esquemas obtenidos");
            return codigoGenerado;
        };
        this.visitCaracteristica = (ctx) => {
            let codigoGenerado = "";
            codigoGenerado += this.visit(ctx.nombreCaracteristica());
            if (ctx.desCaracteristica()) {
                codigoGenerado += ctx.desCaracteristica()?.getText() || "";
            }
            return codigoGenerado; //ctx.children.reduce((acum: string,cur: ParseTree)=>acum+cur.getText(),"");
        };
        this.visitNombreCaracteristica = (ctx) => {
            let codigoGenerado = "";
            //codigoGenerado += "previo: "+ctx._anterior?.text;
            //codigoGenerado += "\ten el: "+ctx._enArt?.text;
            this.nombreClase = ctx._nombreClase?.text || "";
            this.nombreClase = this.nombreClase[0].toUpperCase() + this.nombreClase.slice(1);
            codigoGenerado += `import ${this.nombreClase} from "./codigoParaProbar/${this.nombreClase}" \n`;
            console.log("", codigoGenerado);
            return codigoGenerado; //ctx.children.reduce((acum: string,cur: ParseTree)=>acum+cur.getText(),"");
        };
        this.nombreClase = "";
        this.codigoGenerado = "";
        this.variables = [];
    }
}
exports.default = MyVisitor;
