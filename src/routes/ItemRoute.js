const express = require('express')
const router = express.Router()


const ItemController = require('../controllers/ItemController.js')

router.get('/all-items',  ItemController.getAllItems)
router.get('/items',  ItemController.getSearchedItems)
router.get('/items/:id',  ItemController.getSingleItem)



module.exports = router; 
