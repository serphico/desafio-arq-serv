
const Products = require('../schemas/prodSchema')
const mongoose = require('mongoose')
const {asProdDto} = require('../../DTOs/productDto')

const logger = require('../../utils/logger')

class MongoProductDao{
    constructor(mongo){
        this.connect = mongo;
        this.product = Products
    }

    async init(){
        await mongoose.connect(this.connect)
        logger.info('conectado a la colección products de mongo atlas')
    }

    async disconnect() {
        await mongoose.disconnect()
        console.log('personas dao en mongodb -> cerrado')
    }

    async getAll(){
        try {
            const products = await this.product.find({})
            return asProdDto(products)
        } catch (error) {
            logger.error(`error en CrudProductDao metodo getAll: ${error}`)
        }
    }

    async getById(idSearching) {
        try {
            const product = await this.product.findOne({ id: idSearching })
            return asProdDto(product)    
        } catch (error) {
            logger.error(`error en CrudProductDao metodo getById: ${error}`)
        }

    }

    async save(newProduct) {
        try {
            await this.product.create(newProduct)
            return asProdDto(newProduct)
        } catch (error) {
            logger.error(`error en CrudProductDao metodo save: ${error}`)
        }

    }

    async deleteById(idByDelete) {
        try {
            const prodDelete = await this.product.findOneAndDelete({ id: idByDelete })
            return asProdDto(prodDelete)
        } catch (error) {
            logger.error(`error en CrudProductDao metodo deleteById: ${error}`)
        }

    }

    async deleteAll() {
        try {
            await this.product.deleteMany({})
        } catch (error) {
            logger.error(`error en CrudProductDao metodo deleteAll: ${error}`)
        }
    }

    async updateById(idByChange, newInput) {
        try {
            const prodUpdate = await this.product.findOneAndUpdate({ id: idByChange }, { $set: newInput })
            return asProdDto(prodUpdate)    
        } catch (error) {
            logger.error(`error en CrudProductDao metodo updateById: ${error}`)
        }

    }
}

module.exports = MongoProductDao;