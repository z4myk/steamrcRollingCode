export class Juegos {
    constructor(codigo, nombreDeJuego, categoria, descripcion, imagen1, imagen2, precio, url, publicado) {
        this.codigo = codigo;
        this.nombreDeJuego = nombreDeJuego;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen1 = imagen1;
        this.imagen2 = imagen2;
        this.precio = precio;
        this.url = url;
        this.publicado = false;
        this.destacado = false;
    }
}