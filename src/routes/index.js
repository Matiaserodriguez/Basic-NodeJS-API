const { Router } = require('express')
const router = Router()

router.get('/test', (req, res) => {
    const data = {
        "name": "Matias",
        "surname": "Rodriguez"
    }
    res.json(data);
})

module.exports = router