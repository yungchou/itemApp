const items_controller = require('../controllers/items.controller'),
  path = require('path'),
  express = require('express');

module.exports = function(app) {
  app.post  ('/api/items/add', items_controller.itemCreate); // C
  app.get   ('/api/items',     items_controller.items     ); // R
  app.get   ('/api/items/:id', items_controller.item      ); // R
  app.put   ('/api/items/:id', items_controller.itemUpdate); // U
  app.patch ('/api/items/:id', items_controller.itemUpdate); // U
  app.delete('/api/items/:id', items_controller.itemDelete); // D

  app.use(express.static(path.join(__dirname, './../../public/dist/public')));
  //Catch-all route pointing to Angular
  app.all('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './../../public/dist/public/index.html'));
  });
};
