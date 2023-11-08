class TicketManager {
    constructor() {
        this.eventos = [];
        this.precioDeGanancia = 1.15;
        this.idAutoincrementable = 1;
    }

    getEventos() {
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50) {
        let fechaHoy = new Date().toLocaleDateString();
        let precioConGanancia = precio * this.precioDeGanancia;
        let evento = {
            ID: this.idAutoincrementable,
            Nombre: nombre,
            Lugar: lugar,
            Precio: precioConGanancia,
            Capacidad: capacidad,
            Fecha: fechaHoy,
            Participantes: []
        };
        this.eventos.push(evento);
        this.idAutoincrementable++;
    }
}

class ProductManager {
    constructor() {
        this.productos = [];
    }

    getProductos() {
        return this.productos;
    }

    agregarProducto(title, description, price, thumbnail, code, stock) {
        let producto = {
            title: title,
            Description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };
        this.productos.push(producto);
    }

    getProductById(id) {
        let productoEncontrado = this.productos.find(producto => producto.code === id);
        if (productoEncontrado) {
            return productoEncontrado;
        } else {
            console.log("Error: Producto no encontrado");
            return null;
        }
    }
}

// Ejemplo de uso
let managerEventos = new TicketManager();
managerEventos.agregarEvento("Concierto", "Estadio", 100);
managerEventos.agregarEvento("Fiesta", "Club", 50, 200);

let managerProductos = new ProductManager();
managerProductos.agregarProducto("Producto 1", "Descripción del Producto 1", 50, "thumbnail1.jpg", "P001", 100);
managerProductos.agregarProducto("Producto 2", "Descripción del Producto 2", 75, "thumbnail2.jpg", "P002", 150);

let eventos = managerEventos.getEventos();
for (let evento of eventos) {
    console.log(`Evento - ID: ${evento.ID}, Nombre: ${evento.Nombre}, Lugar: ${evento.Lugar}, Precio: ${evento.Precio}, Capacidad: ${evento.Capacidad}, Fecha: ${evento.Fecha}, Participantes: ${evento.Participantes}`);
}

let productos = managerProductos.getProductos();
for (let producto of productos) {
    console.log(`Producto - Título: ${producto.title}, Descripción: ${producto.Description}, Precio: ${producto.price}, Thumbnail: ${producto.thumbnail}, Código: ${producto.code}, Stock: ${producto.stock}`);
}

let productoEncontrado = managerProductos.getProductById("P001");
if (productoEncontrado) {
    console.log(`Producto encontrado - Título: ${productoEncontrado.title}, Descripción: ${productoEncontrado.Description}, Precio: ${productoEncontrado.price}, Thumbnail: ${productoEncontrado.thumbnail}, Código: ${productoEncontrado.code}, Stock: ${productoEncontrado.stock}`);
} else {
    console.log("Not found.");
}