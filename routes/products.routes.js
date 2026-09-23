const express = require('express')
const router = express.Router()

let products = [
    {
        id: 1,
        name: 'laptop'
        price: 1500

    }
]

router.get('/',(req,res) => {
    
    let result = products
    if (req.query.name) {
        result =
        products.filter(products => 
            products.name.toLowerCase().includes(req.query.name.toLowerCase())
        )
    }

    res.status(200).json({
        "success": true,
        data: result,
        meta: (
            timestamp: new
        Date().toISOString(),
        count: result.length
        )
    })
})

router.get('/:id', (req, res) => {

})