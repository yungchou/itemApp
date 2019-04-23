const Item = require('../models/items.model');

module.exports = {
  // READ/RETRIEVE ALL
  items: (req, res) => {
    Item.find()
      .exec()
      .then( items =>{
        res.status(200).json(items);
      })
      .catch( err => {
        res.status(500).json({ errors: err });
      });
  },

  // READ/RETRIEVE SPECIFIC ONE
  item: (req, res) => {
    Item.findById(req.params.id, (err, item) => {
      if (err) {
        res.json({ errors: err });
      } else res.json(item);
    });
  },

  // CREATE
  itemCreate: (req, res) => {
    Item.create(req.body, (err, item) => {
      if (err) {
        res.status(500).json({ errors: err });
      } else {
        res.status(201).json(item);
      } 
    });
  },

  // UPDATE
  itemUpdate: (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
      if (err) {
        res.json({ errors: err });
      } else res.json(item);
      // By default, mongoose returns what's prior to the update.
    });
  },

  // DELETE
  itemDelete: (req, res) => {
    Item.findByIdAndDelete({ _id: req.params.id }, (err, item) => {
      if (err) {
        res.json({ errors: err });
      } else res.json(item);
      // By default, mongoose returns what's been deleted.
    });
  }
};
