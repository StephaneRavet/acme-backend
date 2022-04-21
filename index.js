const express = require('express')
const app = express()
const cors = require('cors')
const port = 3003

app.use(cors())
app.listen(port, () => console.log(`App listening on port ${port}.`))

app.get('/', (req, res) => {
  res.json(['hello world'])
})

app.get('/product/collection', (req, res) => {
  // (4, 2, 'Stefi', '310945 426', '132.90'),
  // (5, 2, 'Pronto', '310551 974', '119.96'),
  // (6, 2, 'Dorte', '310914 967', '127.46'),
  // (7, 2, 'Anna', '320960 034', '105.00'),
  // (8, 3, 'Gunte', '430100 972', '116.96'),
  // (9, 3, 'Elfie', '430117 990', '125.96'),
  // (10, 3, 'Carla', '430112 303', '180.00')
  res.json([
    {
      categoryId: 1, name: 'Alpinisme', products: [
        { productId: 1, name: 'Alpina', ref: '210317 729', price: '1059.90' },
        { productId: 2, name: 'Oural', ref: '210050 609', price: '240.95' },
        { productId: 3, name: 'Etna', ref: '210029 309', price: '297.41' },
      ],
    },
    {
      categoryId: 2, name: 'Randonnée', products: [
        { productId: 4, name: '', ref: '', price: '' },
      ],
    },
    {
      categoryId: 3, name: 'Escalade', products: [
        { productId: 5, name: '', ref: '', price: '' },
      ],
    },
  ])
})

app.get('/product/detail/:id', (req, res) => {
  res.json()
})

app.post('/user/tobasket', (req, res) => {
  res.json()
})

app.get('/user/basket', (req, res) => {
  res.json()
})

app.post('/user/login', (req, res) => {
  const token = 'blablaToken'
  res.json({ token })
})

app.get('/user/logout', (req, res) => {
  res.json()
})

app.get('/category/crud', (req, res) => {
  res.json([
    { categoryId: 1, name: 'Alpinisme' },
    { categoryId: 2, name: 'Randonnée' },
    { categoryId: 3, name: 'Escalade' },
  ])
})

app.get('/category/crud', (req, res) => {
  res.json()
})
