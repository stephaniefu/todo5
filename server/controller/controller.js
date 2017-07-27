const express = require('express');
const Model = require('../../db/models/model');
const Sequelize = require('sequelize');

module.exports = {
  addTodo: (req, res) => {
    Model.create({
      item: req.body.item
    })
    .then(() => {
      Model.findAll({})
        .then(data => {
          res.send(data)
        })
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },

  getTodos: (req, res) => {
    Model.findAll({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
  },

  deleteTodo: (req, res) => {
    console.log('this is the req.body',req.body)
    Model.destroy({
      where: {id: req.params.todoid}
    })
    // .then(() => {
    //   Model.findAll({})
    //   .then(data=>{
    //     res.send(data)
    //   })
    // })
    .then(deleted => {
      res.status(200).send('deleted');
    })
    .catch(err => {
      res.status(404).send(err)
    })
  }
}