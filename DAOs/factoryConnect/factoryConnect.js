
const MongoProductDao = require('../mongoProductDao/mongoProductDao')
const FileProductDao = require('../fileProductDao/fileProductDao')
const variableEnv = require('../config')
const logger = require('../../utils/logger')
//const parseArgs = require('minimist');

//const args = parseArgs(process.argv.slice(2));

const rutaArchivoPersonas = './products.txt'
const mongo = variableEnv.mongo_atlas

const opcion = process.argv[ 2 ] || 'File'
console.log(opcion)
let dao
switch (opcion) {
    case 'Mongo':
        console.log('entro si')
        dao = new MongoProductDao(mongo)
        logger.info(`base de datos con mongo `)
        dao.init()
        break
    default:
        dao = new FileProductDao(rutaArchivoPersonas)
        dao.init()
        break
}

module.exports = class ProductDaoFactory {
    static getDao() {
        return dao
    }
}