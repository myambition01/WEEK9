const express = require("express")
const router = express.Router()
router.post ('/signup', function(req, res){
    console.log(req.body)
})

module.exports = router