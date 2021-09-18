const express = require('express')
const atob = require('atob')
const rangeFile = require('./occupied-ranges.json')
const router = express.Router()

router.get('/', (req, res) => {
    // Return occupied array
    res.send('OCCUPIED ARRAY')
})

router.post('/edit', logger, (req, res) => {
    // EDIT occupied array json file
    // Some code for saving data
    console.log(req.body)
    
})

function logger(req, res, next) { // occupied/edit?name=fsdffsf&password=sfddsf&loggedin=true
    const trueName = 'lucka'
    const truePassword = 'Lucy2021'
    const loggedIn = req.query.loggedin
    const name = atob(req.query.name)
    const password = atob(req.query.password)
    if (name === trueName && password === truePassword && loggedIn === true) return next()
    if (name === trueName && password === truePassword) {
        res.json({ loggedIn: true, message: 'User logged in...' })
        next()
    } else {
        if (name !== trueName) return res.status(400).json({ loggedIn: false, message: 'Wrong name...' })
        if (password !== truePassword) return res.status(400).json({ loggedIn: false, message: 'Wrong password...' })
        res.status(400).json({ loggedIn: false, message: 'Something is wrong...' })
    }
}

module.exports = router