// Generated from SpecscriptGrammar.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./SpecscriptGrammarParser.js";
import { EscenarioContext } from "./SpecscriptGrammarParser.js";
import { EsquemaEscenarioContext } from "./SpecscriptGrammarParser.js";
import { CaracteristicaContext } from "./SpecscriptGrammarParser.js";
import { NombreCaracteristicaContext } from "./SpecscriptGrammarParser.js";
import { AntecedentesContext } from "./SpecscriptGrammarParser.js";
import { EscEspContext } from "./SpecscriptGrammarParser.js";
import { EsqEscEspContext } from "./SpecscriptGrammarParser.js";
import { DesCaracteristicaContext } from "./SpecscriptGrammarParser.js";
import { DesAntecedenteContext } from "./SpecscriptGrammarParser.js";
import { DesEscenarioContext } from "./SpecscriptGrammarParser.js";
import { DesEsqEscenarioContext } from "./SpecscriptGrammarParser.js";
import { DesEspecificacionContext } from "./SpecscriptGrammarParser.js";
import { DesEsqEspecificacionContext } from "./SpecscriptGrammarParser.js";
import { TablaEncabezadoContext } from "./SpecscriptGrammarParser.js";
import { EncabezadoContext } from "./SpecscriptGrammarParser.js";
import { ListaContext } from "./SpecscriptGrammarParser.js";
import { ClavevalorContext } from "./SpecscriptGrammarParser.js";
import { ClaveContext } from "./SpecscriptGrammarParser.js";
import { ValorContext } from "./SpecscriptGrammarParser.js";
import { OperacionContext } from "./SpecscriptGrammarParser.js";
import { NombreModuloContext } from "./SpecscriptGrammarParser.js";
import { DatosContext } from "./SpecscriptGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SpecscriptGrammarParser`.
 */
export class SpecscriptGrammarListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.escenario`.
     * @param ctx the parse tree
     */
    enterEscenario?: (ctx: EscenarioContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.escenario`.
     * @param ctx the parse tree
     */
    exitEscenario?: (ctx: EscenarioContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.esquemaEscenario`.
     * @param ctx the parse tree
     */
    enterEsquemaEscenario?: (ctx: EsquemaEscenarioContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.esquemaEscenario`.
     * @param ctx the parse tree
     */
    exitEsquemaEscenario?: (ctx: EsquemaEscenarioContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.caracteristica`.
     * @param ctx the parse tree
     */
    enterCaracteristica?: (ctx: CaracteristicaContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.caracteristica`.
     * @param ctx the parse tree
     */
    exitCaracteristica?: (ctx: CaracteristicaContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.nombreCaracteristica`.
     * @param ctx the parse tree
     */
    enterNombreCaracteristica?: (ctx: NombreCaracteristicaContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.nombreCaracteristica`.
     * @param ctx the parse tree
     */
    exitNombreCaracteristica?: (ctx: NombreCaracteristicaContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.antecedentes`.
     * @param ctx the parse tree
     */
    enterAntecedentes?: (ctx: AntecedentesContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.antecedentes`.
     * @param ctx the parse tree
     */
    exitAntecedentes?: (ctx: AntecedentesContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.escEsp`.
     * @param ctx the parse tree
     */
    enterEscEsp?: (ctx: EscEspContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.escEsp`.
     * @param ctx the parse tree
     */
    exitEscEsp?: (ctx: EscEspContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.esqEscEsp`.
     * @param ctx the parse tree
     */
    enterEsqEscEsp?: (ctx: EsqEscEspContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.esqEscEsp`.
     * @param ctx the parse tree
     */
    exitEsqEscEsp?: (ctx: EsqEscEspContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.desCaracteristica`.
     * @param ctx the parse tree
     */
    enterDesCaracteristica?: (ctx: DesCaracteristicaContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.desCaracteristica`.
     * @param ctx the parse tree
     */
    exitDesCaracteristica?: (ctx: DesCaracteristicaContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.desAntecedente`.
     * @param ctx the parse tree
     */
    enterDesAntecedente?: (ctx: DesAntecedenteContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.desAntecedente`.
     * @param ctx the parse tree
     */
    exitDesAntecedente?: (ctx: DesAntecedenteContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.desEscenario`.
     * @param ctx the parse tree
     */
    enterDesEscenario?: (ctx: DesEscenarioContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.desEscenario`.
     * @param ctx the parse tree
     */
    exitDesEscenario?: (ctx: DesEscenarioContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.desEsqEscenario`.
     * @param ctx the parse tree
     */
    enterDesEsqEscenario?: (ctx: DesEsqEscenarioContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.desEsqEscenario`.
     * @param ctx the parse tree
     */
    exitDesEsqEscenario?: (ctx: DesEsqEscenarioContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     */
    enterDesEspecificacion?: (ctx: DesEspecificacionContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.desEspecificacion`.
     * @param ctx the parse tree
     */
    exitDesEspecificacion?: (ctx: DesEspecificacionContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.desEsqEspecificacion`.
     * @param ctx the parse tree
     */
    enterDesEsqEspecificacion?: (ctx: DesEsqEspecificacionContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.desEsqEspecificacion`.
     * @param ctx the parse tree
     */
    exitDesEsqEspecificacion?: (ctx: DesEsqEspecificacionContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.tablaEncabezado`.
     * @param ctx the parse tree
     */
    enterTablaEncabezado?: (ctx: TablaEncabezadoContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.tablaEncabezado`.
     * @param ctx the parse tree
     */
    exitTablaEncabezado?: (ctx: TablaEncabezadoContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.encabezado`.
     * @param ctx the parse tree
     */
    enterEncabezado?: (ctx: EncabezadoContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.encabezado`.
     * @param ctx the parse tree
     */
    exitEncabezado?: (ctx: EncabezadoContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.lista`.
     * @param ctx the parse tree
     */
    enterLista?: (ctx: ListaContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.lista`.
     * @param ctx the parse tree
     */
    exitLista?: (ctx: ListaContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.clavevalor`.
     * @param ctx the parse tree
     */
    enterClavevalor?: (ctx: ClavevalorContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.clavevalor`.
     * @param ctx the parse tree
     */
    exitClavevalor?: (ctx: ClavevalorContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.clave`.
     * @param ctx the parse tree
     */
    enterClave?: (ctx: ClaveContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.clave`.
     * @param ctx the parse tree
     */
    exitClave?: (ctx: ClaveContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.valor`.
     * @param ctx the parse tree
     */
    enterValor?: (ctx: ValorContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.valor`.
     * @param ctx the parse tree
     */
    exitValor?: (ctx: ValorContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.operacion`.
     * @param ctx the parse tree
     */
    enterOperacion?: (ctx: OperacionContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.operacion`.
     * @param ctx the parse tree
     */
    exitOperacion?: (ctx: OperacionContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.nombreModulo`.
     * @param ctx the parse tree
     */
    enterNombreModulo?: (ctx: NombreModuloContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.nombreModulo`.
     * @param ctx the parse tree
     */
    exitNombreModulo?: (ctx: NombreModuloContext) => void;
    /**
     * Enter a parse tree produced by `SpecscriptGrammarParser.datos`.
     * @param ctx the parse tree
     */
    enterDatos?: (ctx: DatosContext) => void;
    /**
     * Exit a parse tree produced by `SpecscriptGrammarParser.datos`.
     * @param ctx the parse tree
     */
    exitDatos?: (ctx: DatosContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

