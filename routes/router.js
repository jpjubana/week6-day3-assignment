const express = require('express');
const router = express.Router();
const models = require("../models");

router.get("/", function(req, res) {
    models.todolist.findAll().then(function(todos) {
        res.render('index', { todos: todos });
    })
});

router.post("/todos", function(req, res) {
    models.todolist.create({
        title: req.body.todo
    }).then(function(newTodo) {
        res.redirect('/');
    });
});

router.post("/completed", function(req, res) {
    const id = req.body.submit;
    models.todolist.update({
        title: req.body.edit,
    }, {
        where: {
            id: id
        }
    }).then(function(completed) {
        res.redirect('/');
    })
});

router.post("/completed", function(req, res) {
    const id = req.body.submit;
    models.todolist.update({
        completed_by: req.body.completed
    }, {
        where: {
            id: id
        }
    }).then(function(completed) {
        res.redirect('/');
    })
});

router.get("/", function(req, res) {
    models.todolist.findAll({
        where: {
            completed_by: !NULL
        }
    }).then(function(todos) {
        res.render('index', { todos: todos });
    })
});

module.exports = router;