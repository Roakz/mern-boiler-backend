const express = require('express')

const router = express.Router()

router.get("/api/customers", (req, res) => {
    
    const customers = [
        {id: 1, firstName: "John", lastName: "Doe"},
        {id: 2, firstName: "Beverly", lastName: "Hills"},
        {id: 3, firstName: "Meerkat", lastName: "Bob"} 
    ]   

    res.json(customers)
})

module.exports = router