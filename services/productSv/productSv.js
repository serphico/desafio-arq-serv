const ProductoMostrable = require("../../productosMostrable/ProductosMostrable");
const ProdRepo = require("../../Repo/prodRepo");
const ProductObj = require("../../models/Products");
const logger = require("../../utils/logger");



class ProductSv{

    constructor(){
        this.productDao = new ProdRepo();
    }

    async findAll(){
        try {
            const prodFound = mostrar(await this.productDao.getAll());
            console.log(prodFound)
            return prodFound;
        } catch (error) {
            logger.error(`error en la capa de servicio productSv en metodo findAll: ${error}`)  
        }

    }

    async findById(id){
        try {
            const prodFound = mostrar(await this.productDao.getById(id));
            return prodFound;
        } catch (error) {
            logger.error(`error en la capa de servicio productSv en metodo findById: ${error}`)  
        }

    }

    async saveNewProd(newProd){
        try {
            const productNew = new ProductObj(newProd)
            const prodFound = await this.productDao.add(productNew);
            return prodFound;
        } catch (error) {
            logger.error(`error en la capa de servicio productSv en metodo saveNewProd: ${error}`)  
        }

    }

    async deleteAProd(idProd){
        try {
            const prodFound = await this.productDao.removeById(idProd);
            return prodFound;
        } catch (error) {
            logger.error(`error en la capa de servicio productSv en metodo daleteAProd: ${error}`)  
        }

    }

    async deleteAllProd(){
        try {
            const prodFound = await this.productDao.removeAll();
            return prodFound;
        } catch (error) {
            logger.error(`error en la capa de servicio productSv en metodo daleteAProd: ${error}`)  
        }

    }

}


function mostrar(data) {
    if (Array.isArray(data)) {
        
        if (data.length > 0) {
                for (let producto of data) {
                    
                    return new ProductoMostrable(producto).comoTextoPlano()
                }                
        } else {
           return 'no hay datos para mostrar'
        }
    } else {
        return new ProductoMostrable(data).comoTextoPlano()
    }
}

const productSv = new ProductSv();

module.exports = productSv;