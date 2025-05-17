import ConfigLangVisitor from './generated/ConfigLangVisitor.js';

export default class CustomConfigVisitor extends ConfigLangVisitor {
  constructor() {
    super();
    this.resultado = null;
  }

  visitConfiguracion(ctx) {
    const nombre = ctx.nombre().getText();
    const secciones = ctx.secciones() ? this.visit(ctx.secciones()) : [];

    this.resultado = {
      nombre: nombre,
      secciones: secciones
    };

    return this.resultado;
  }

  visitSecciones(ctx) {
    return ctx.seccion().map(seccion => this.visit(seccion));
  }

  visitSeccion(ctx) {
    const nombre = ctx.nombre().getText();
    const parametros = ctx.parametros() ? this.visit(ctx.parametros()) : [];

    return {
      nombre: nombre,
      parametros: parametros
    };
  }

  visitParametros(ctx) {
    return ctx.parametro().map(p => this.visit(p));
  }

  visitParametro(ctx) {
    const clave = ctx.nombre().getText();
    const valor = this.visit(ctx.valor());

    return {
      clave: clave,
      valor: valor
    };
  }

  visitValor(ctx) {
    if (ctx.numero()) return parseInt(ctx.numero().getText());
    if (ctx.cadena()) return ctx.cadena().getText().slice(1, -1);
    if (ctx.booleano()) return ctx.booleano().getText() === 'verdadero';
    return null;
  }
}
