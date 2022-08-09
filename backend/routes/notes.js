const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{

    // this line can convert JS OBJECT into JSON ⤵️⤵️⤵️⤵️
    res.json([])
})

module.exports = router