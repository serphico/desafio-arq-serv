class ProductObj {
    #id
    #title
    #price
    #description
    #photo
    #category
    
    constructor({ id, title, price, description, photo, category }) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.photo = photo
        this.category = category
    }

    get id() { return this.#id }

    set id(id) {
        if (!id) throw new Error('"id" es un campo requerido')
        this.#id = id
    }

    get title() { return this.#title }

    set title(title) {
        if (!title) throw new Error('"title" es un campo requerido')
        this.#title = title
    }

    get description() { return this.#description }

    set description(description) {
        if (!description) throw new Error('"description" es un campo requerido')
        this.#description = description
    }

    get price() { return this.#price }

    set price(price) {
        if (!price) throw new Error('"price" es un campo requerido')
        if (isNaN(price)) throw new Error('"price" es un campo de caracteres exclusivamente numéricos')
        this.#price = price
    }

    get photo() { return this.#photo }

    set photo(photo) {
        if (!photo) throw new Error('"photo" es un campo requerido')
        this.#photo = photo
    }

    get category() { return this.#category }

    set category(category) {
        if (!category) throw new Error('"category" es un campo requerido')
        this.#category = category
    }
}

module.exports = ProductObj;