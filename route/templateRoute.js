const templateRoute = require('express').Router()
const { homeController, createController, updateController}=require('../controller/templateController')

templateRoute.get('/', homeController)
templateRoute.get('/create', createController)
templateRoute.get('/update', updateController)

module.exports =templateRoute