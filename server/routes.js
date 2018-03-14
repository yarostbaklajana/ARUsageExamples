const router = require('express').Router();

router.get('/user/:id', (req, res) => {
    res.json({id: req.params.id, user: 'demo', name: 'demo'});
});

module.exports = router;