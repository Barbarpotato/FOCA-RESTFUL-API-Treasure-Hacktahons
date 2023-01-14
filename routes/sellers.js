var express = require('express');
var router = express.Router();
const db = require('../utils/db.config')
const { uuid } = require('uuidv4');
const uniqid = require('uniqid');

/* GET home page. */
router.get('')
  .get('', async (req, res, next) => {
    let data = []
    const getSeller = db.collection('seller')
    const snapshotSeller = await getSeller.get();
    snapshotSeller.forEach(doc => {
      data.push(doc.data())
    })
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json(data)
  })
  .post('/product/:sellerId', async (req, res, next) => {
    const productRef = db.collection('seller')
    const snapshot = await productRef.where('id_seller', '==', req.params.sellerId).get();
    if (snapshot.empty) {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      return res.json({ message: 'seller client not found' })
    }
    const id_product = uuid()
    //! ATTRIBUT
    const { name, qty, desc, prize } = req.body
    await db.collection('products').doc(uniqid()).set({
      name, qty, desc, prize,
      id_product: id_product,
      id_seller: req.params.sellerId
    })
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json')
    res.json({ message: 'successfully added product' })
  })

module.exports = router;
