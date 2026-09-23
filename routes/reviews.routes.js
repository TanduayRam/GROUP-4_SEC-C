

const router = require ('express').Router();

router.get('/', (req, res) => res.json ({ reviews:[
    {
        id: 123,
        rating: 10,
        Comment: good
    }]}));

    router.post('/', (req, res) => res.status(201).json(req.body));
    router.get('/:id', (req, res) => res.json({reviews: req.params.id}));
    router.delete('/', (req, res) => res.status(204).send());

    module.exports = router;