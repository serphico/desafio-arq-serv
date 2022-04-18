const ProductDaoFactory = require('../DAOs/factoryConnect/factoryConnect')
const {asProdDto} = require('../DTOs/productDto')
const ProductObj = require('../models/Products')


 class ProdRepo {
    #dao

    constructor() {
        this.#dao = ProductDaoFactory.getDao()
        this.#dao.init();
    }

    async getAll() {
        const products = await this.#dao.getAll()
        return products.map(p => new ProductObj(p))
    }

    async getById(idSearch) {
        const dto = await this.#dao.getById(idSearch)
        return new ProductObj(dto)
    }

    async add(newProduct) {
        await this.#dao.save(asProdDto(newProduct))
    }

    async removeById(idSearch) {
        const deleted = await this.#dao.deleteById(idSearch)
        return new ProductObj(deleted)
    }

    async removeAll() {
        await this.#dao.deleteAll()
    }
}

module.exports = ProdRepo;