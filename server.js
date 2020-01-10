const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const recipesRouter = require('./recipes/recipes-router');

const router = express();
router.use(helmet());
router.use(cors());
router.use(express.json());

router.use('/api/recipes', recipesRouter);

router.use('/', (req, res) => {
    res.send('api is up');
})

router.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ errorMessage: "server error, sorry try again later." })
})

module.exports = router;