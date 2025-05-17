# Analizador Sintáctico ConfigLang

Este proyecto implementa un analizador léxico, sintáctico y semántico para un lenguaje de
configuración simple, usando ANTLR4 y JavaScript (Node.js).

## Descripción

El analizador procesa archivos de configuración que contienen secciones y parámetros, y
traduce la entrada a un objeto JavaScript con estructura jerárquica.

## Se utilizan las siguientes tecnologías:

- ANTLR4 para la generación de Lexer, Parser y Visitor.
- Node.js para la ejecución del analizador.
- Visual Studio Code como entorno de desarrollo.

## Estructura del Proyecto

/52028
├── mi-analizador (Proyecto Analizador)
├── input_correcto_1.txt # Ejemplo válido
├── input_correcto_2.txt # Ejemplo válido
├── input_incorrecto_1.txt # Ejemplo con errores
├── input_incorrecto_2.txt # Ejemplo con errores
├── README.md (Instrucciones de uso del proyecto).
└── Reglas.pdf (Documento con las pautas y reglas de la tarea).

## Requisitos Previos

- Tener instalado Node.js (versión 16 o superior recomendada).
- Tener Java instalado (JRE 1.8+), necesario para ANTLR.
- Tener ANTLR4 descargado para regenerar la gramática (opcional).

## Instalación

1. Clonar el repositorio:
git clone https://github.com/RodrigoMarnetti/52028.git
2. cd 52028/mi-analizador
3. Instalar dependencias: npm install

## Ejecución

- Ejecutar el analizador con: npm start
- Esto leerá el archivo input.txt (puede reemplazarse por cualquier archivo de ejemplo) y
mostrará:
1. Tabla de tokens reconocidos.
2. Árbol de análisis sintáctico en texto.
3. Resultado de la interpretación (objeto JavaScript).

## Archivos de prueba

Se incluyen 4 archivos para probar el analizador:
- input_correcto_1.txt y input_correcto_2.txt: entradas válidas.
- input_incorrecto_1.txt y input_incorrecto_2.txt: entradas con errores sintácticos para
verificar detección.

## Visualización del Árbol Sintáctico

Si usas Visual Studio Code con la extensión ANTLR4 instalada, podes hacer debugging con la
configuración provista en .vscode/launch.json para visualizar gráficamente el árbol de
análisis.


### Trabajo realizado para la asignatura Sintaxis y Semántica de Lenguajes - UTN