// basic requires
const express = require('express');

// accesses the schema of the model for "car". Remove the ".js" if it still doesn't work, I added it after
const QuestionSchema = require('../models/question.js');

// Initialize the router
const router = express();

const path = require('path');
const multer = require('multer');

// Get all
router.get('/api/question_get_all/', async (req, res) => {
    const findQuestion = await QuestionSchema.find();
    res.json(findQuestion);
});

// Get Single
router.get('/api/question_get_single/:id', async (req, res) => {
    const findQuestionSingle = await QuestionSchema.findById(req.params.id)
    res.json(findQuestionSingle)
});

//search questions
router.get('/api/searchquestion/:search', async (req, res) => {
    try {
        const searchTerm = req.params.search
        const questions = await QuestionSchema.find({
            $or: [
                { title: new RegExp(searchTerm, 'i') },
                { text: new RegExp(searchTerm, 'i') }
            ]
        });
        res.json(questions)
    } catch (error) {
        console.log(error)
        console.log('none')
    }

});

router.get('/api/userquestions/:userid', async (req, res) => {
    try {
        const id = req.params.userid
        const questions = await QuestionSchema.find({user: id})
        res.json(questions)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal server error' });
    }
})


//Middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

// Update
router.put('/api/question/:id', upload.single('image'), async (req, res) => {
    // If an image was sent with
    if (req.file) {
        let data = JSON.parse(req.body.data);
        const question = ({
            user: data.id,
            title: data.title,
            text: data.text,
            date: data.date,
            comments: data.comments,
            image: req.file.filename
        })
        await QuestionSchema.findByIdAndUpdate(req.params.id, question)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    } else {
        let data = req.body;
        const question = ({
            user: data.id,
            title: data.title,
            text: data.text,
            date: data.date,
            comments: data.comments
        })
        await QuestionSchema.findByIdAndUpdate(req.params.id, question)
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    }
});

// Create
router.post('/api/addquestion', upload.single('image'), async (req, res) => {
    let data = JSON.parse(req.body.data)
    if (req.file) {
        const question = new QuestionSchema({
            user: data.id,
            title: data.title,
            text: data.text,
            date: data.date,
            comments: data.comments,
            image: req.file.filename
        })
        await question.save()
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error)) // status 500 is an internal service error
    } else {
        const question = new QuestionSchema({
            user: data.id,
            title: data.title,
            text: data.text,
            date: data.date,
            comments: data.comments,
            image: ""
        })
        await question.save()
            .then(response => res.json(response))
            .catch(error => res.status(500).json(error))
    }

});

//Delete
router.delete('/api/question_delete/:id', async (req, res) => {
    await QuestionSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;