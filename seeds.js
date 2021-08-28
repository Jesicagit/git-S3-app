const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MOngo Connection open")
    })
    .catch(err => {
        console.log("OH No Mongo Errror")
        console.log(err)
    })

/* single application try
const p = new Product({
name: 'Ruby Grapfruit',
price: 1.99,
category: 'fruit'
})

p.save().then(p => {
console.log(p)
})
.catch(e => {
    console.log(e)
})

End single application try*/

const seedsProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedies watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate whoel Milk',
        price: 2.69,
        category: 'dairy'
    },
]
Product.insertMany(seedsProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })

