// Generated from SpecscriptGrammar.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./SpecscriptGrammarParser.js";
import { EscenarioContext } from "./SpecscriptGrammarParser.js";
import { EsquemaEscenarioContext } from "./SpecscriptGrammarParser.js";
import { CaracteristicaContext } from "./SpecscriptGrammarParser.js";
import { NombreCaracteristicaContext } from "./SpecscriptGrammarParser.js";
import { AntecedentesContext } from "./SpecscriptGrammarParser.js";
import { NombreAntecedentesContext } from "./SpecscriptGrammarParser.js";
import { VariableExternaContext } from "./SpecscriptGrammarParser.js";
import { NombreAntEspecContext } from "./SpecscriptGrammarParser.js";
import { EscEspContext } from "./SpecscriptGrammarParser.js";
import { EsqEscEspContext } from "./SpecscriptGrammarParser.js";
import { DesCaracteristicaContext } from "./SpecscriptGrammarParser.js";
import { NombreEscenarioContext } from "./SpecscriptGrammarParser.js";
import { OperacionSimpleContext } from "./SpecscriptGrammarParser.js";
import { FuncionAgregacionContext } from "./SpecscriptGrammarParser.js";
import { ComprobarResultadoContext } from "./SpecscriptGrammarParser.js";
import { ComprobarFuncionVariablesContext } from "./SpecscriptGrammarParser.js";
import { AsignacionVariableContext } from "./SpecscriptGrammarParser.js";
import { DefectoContext } from "./SpecscriptGrammarParser.js";
import { DesEsqEscenarioContext } from "./SpecscriptGrammarParser.js";
import { DesEsqEspecificacionContext } from "./SpecscriptGrammarParser.js";
import { OracionContext } from "./SpecscriptGrammarParser.js";
import { TablaEncabezadoContext } from "./SpecscriptGrammarParser.js";
import { EncabezadoContext } from "./SpecscriptGrammarParser.js";
import { FilasDatosContext } from "./SpecscriptGrammarParser.js";
import { ListaContext } from "./SpecscriptGrammarParser.js";
import { ClavevalorContext } from "./SpecscriptGrammarParser.js";
import { ClaveContext } from "./SpecscriptGrammarParser.js";
import { ValorContext } from "./SpecscriptGrammarParser.js";
import { OperacionContext } from "./SpecscriptGrammarParser.js";
import { VariableEsquemaContext } from "./SpecscriptGrammarParser.js";
import { DatoContext } from "./SpecscriptGrammarParser.js";
import { DatosContext } from "./SpecscriptGrammarParser.js";
import { VariablesContext } from "./SpecscriptGrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SpecscriptGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SpecscriptGrammarVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.escenario`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEscenario?: (ctx: EscenarioContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.esquemaEscenario`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEsquemaEscenario?: (ctx: EsquemaEscenarioContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.caracteristica`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCaracteristica?: (ctx: CaracteristicaContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.nombreCaracteristica`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNombreCaracteristica?: (ctx: NombreCaracteristicaContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.antecedentes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAntecedentes?: (ctx: AntecedentesContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.nombreAntecedentes`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNombreAntecedentes?: (ctx: NombreAntecedentesContext) => Result;
    /**
     * Visit a parse tree produced by the `VariableExterna`
     * labeled alternative in `SpecscriptGrammarParser.antecedenteEsp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableExterna?: (ctx: VariableExternaContext) => Result;
    /**
     * Visit a parse tree produced by the `NombreAntEspec`
     * labeled alternative in `SpecscriptGrammarParser.antecedenteEsp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNombreAntEspec?: (ctx: NombreAntEspecContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.escEsp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEscEsp?: (ctx: EscEspContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.esqEscEsp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEsqEscEsp?: (ctx: EsqEscEspContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.desCaracteristica`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDesCaracteristica?: (ctx: DesCaracteristicaContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.nombreEscenario`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNombreEscenario?: (ctx: NombreEscenarioContext) => Result;
    /**
     * Visit a parse tree produced by the `OperacionSimple`
     * labeled alternative in `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperacionSimple?: (ctx: OperacionSimpleContext) => Result;
    /**
     * Visit a parse tree produced by the `FuncionAgregacion`
     * labeled alternative in `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncionAgregacion?: (ctx: FuncionAgregacionContext) => Result;
    /**
     * Visit a parse tree produced by the `ComprobarResultado`
     * labeled alternative in `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComprobarResultado?: (ctx: ComprobarResultadoContext) => Result;
    /**
     * Visit a parse tree produced by the `ComprobarFuncionVariables`
     * labeled alternative in `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComprobarFuncionVariables?: (ctx: ComprobarFuncionVariablesContext) => Result;
    /**
     * Visit a parse tree produced by the `AsignacionVariable`
     * labeled alternative in `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsignacionVariable?: (ctx: AsignacionVariableContext) => Result;
    /**
     * Visit a parse tree produced by the `Defecto`
     * labeled alternative in `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefecto?: (ctx: DefectoContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.desEsqEscenario`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDesEsqEscenario?: (ctx: DesEsqEscenarioContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.desEsqEspecificacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDesEsqEspecificacion?: (ctx: DesEsqEspecificacionContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.oracion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOracion?: (ctx: OracionContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.tablaEncabezado`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablaEncabezado?: (ctx: TablaEncabezadoContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.encabezado`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEncabezado?: (ctx: EncabezadoContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.filasDatos`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilasDatos?: (ctx: FilasDatosContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.lista`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLista?: (ctx: ListaContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.clavevalor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClavevalor?: (ctx: ClavevalorContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.clave`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClave?: (ctx: ClaveContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.valor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValor?: (ctx: ValorContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.operacion`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOperacion?: (ctx: OperacionContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.variableEsquema`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableEsquema?: (ctx: VariableEsquemaContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.dato`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDato?: (ctx: DatoContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.datos`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatos?: (ctx: DatosContext) => Result;
    /**
     * Visit a parse tree produced by `SpecscriptGrammarParser.variables`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariables?: (ctx: VariablesContext) => Result;
}

