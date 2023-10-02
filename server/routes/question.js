// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const QuestionSchema = require('../models/question.js');

// Initialize the router
const router = express();

// Get all
router.get('/api/question_get_all/', async (req, res) => {
    const findOrder = await OrderSchema.find();
    res.json(findOrder);
});

// Get Single
router.get('/api/question_get_single/:id', async (req, res) => {
    const findOrder = await OrderSchema.findById(req.params.id)
    res.json(findOrder)
});

// Update
router.put('/api/question_update/:id', async (req, res) => {
    const { id } = req.params.id;
    await OrderSchema.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

// Create
router.post('/api/question_add/', async (req, res) => {
    const car = new OrderSchema({

        client: req.body.client,
        orders: req.body.orders,
        totalprice: req.body.totalprice

    });
    await car.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error)) // status 500 is an internal service error
});

//Delete
router.delete('/api/question_delete/:id', async (req, res) => {
    await OrderSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;