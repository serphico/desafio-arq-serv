const {Router} = require('express')
const productSv = require('../services/productSv/productSv')

const productRoute = Router()



productRoute.get('/', (req, res) => {
    let resp =res
    productSv.findAll()
    .then( res =>{
        resp.send(res)
    })
})

productRoute.get('/:id', (req, res) => {
        let resp = res
        let id = req.params.id
        productSv.findById(id)
        .then( res =>{
            resp.send(res)
        })
})

productRoute.post('/', (req, res) => {
    let resp = res
    productSv.saveNewProd(req.body)
    .then( res =>{
        resp.send(res)
    })
})

productRoute.delete('/:id', (req, res) => {
    let resp = res
    productSv.deleteAProd(req.params.id)
    .then( res =>{
        resp.send(res)
    })
})

productRoute.delete('/', (req, res) => {
    let resp = res
    productSv.deleteAllProd()
    .then( res =>{
        resp.send(`borrado todo`)
    })
})


module.exports = {productRoute};