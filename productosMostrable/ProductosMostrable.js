
class ProductoMostrable {
    #producto

    constructor(producto) {
        this.producto = producto
    }

    comoTextoPlano() {
        console.log(this.producto)
        const lines = []
        lines.push(`id: ${this.producto.id}`);
        lines.push(`title: ${this.producto.title}`);
        lines.push(`price: ${this.producto.price}`);
        lines.push(`description: ${this.producto.description}`);
        lines.push(`photo: ${this.producto.photo}`);
        lines.push(`category: ${this.producto.category}`);
        return lines.join('\n')
    }
}

module.exports = ProductoMostrable;