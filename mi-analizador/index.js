import antlr4 from 'antlr4';
import fs from 'fs';

import ConfigLangLexer from './generated/ConfigLangLexer.js';
import ConfigLangParser from './generated/ConfigLangParser.js';
import CustomConfigVisitor from './CustomConfigVisitor.js';

// Leer el archivo de entrada
let input = '';
try {
  input = fs.readFileSync('input.txt', 'utf8');
} catch (err) {
  console.error("Error al leer input.txt");
  process.exit(1);
}

// Crear flujo de entrada
const chars = new antlr4.InputStream(input);
const lexer = new ConfigLangLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Mostrar tabla de tokens (PUNTO 2 de la consigna)
tokens.fill(); // rellena el buffer de tokens
console.log(" Tabla de Tokens:");
console.log("----------------------------------------");
console.log("| TOKEN TYPE        | LEXEMA            |");
console.log("----------------------------------------");

const symbolicNames = lexer.constructor.symbolicNames;

for (const token of tokens.tokens) {
  if (token.type === -1) continue; // Ignorar EOF
  const tokenName = symbolicNames[token.type] || 'UNKNOWN';
  const lexema = token.text?.padEnd(18, ' ') ?? ' '.repeat(18);
  console.log(`| ${tokenName.padEnd(17)} | ${lexema}|`);
}


console.log("----------------------------------------\n");

// Crear el parser
const parser = new ConfigLangParser(tokens);
parser.buildParseTrees = true;

// Ejecutar análisis sintáctico
const tree = parser.configuracion();

// Verificar errores
if (parser._syntaxErrors > 0) {
  console.error(" Se encontraron errores de sintaxis.");
  process.exit(1);
}

console.log(" Entrada válida.\n");

// Mostrar árbol sintáctico (PUNTO 3 de la consigna)
console.log(" Árbol de análisis sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));
console.log();

// Interpretar la entrada
const visitor = new CustomConfigVisitor();
const resultado = visitor.visit(tree);

console.log("\n Resultado:");
console.log(JSON.stringify({ configuracion: resultado }, null, 2));
