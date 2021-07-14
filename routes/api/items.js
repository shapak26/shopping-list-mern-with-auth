const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Item Model

const Item = require('../../models/item');

//@route GET api/item
//@desc Get All item
//@access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            res.json(items);
            console.log('very good get bro ;)')
        })
});

//@route POST api/item
//@desc Create A Post
//@access Public

router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })

    newItem.save().then(item => {
        res.json(item);
        console.log('very good post bro')
    });
});

//@route DELETE api/item/:id
//@desc Delete A Post
//@access Public

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => console.log('Delete laew krub')))
        .catch(err => res.status(404).json("delete failed"))
});


module.exports = router