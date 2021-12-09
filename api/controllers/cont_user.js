const express = require("express");
// const { json } = require("sequelize/types");
const router = express.Router();
const db = require("../models");
const { Users } = db; //import model user from db above (table name)

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?

router.get("/", (req, res) => {
  console.log("why the f");
  Users.findAll({}).then((param_user) => res.json(param_user));
});

router.post("/", (req, res) => {
  //console.log(req.body)
  let { firstName, lastName, userName, password } = req.body;

  Users.create({
    firstName: firstName,
    lastName: lastName,
    userName: userName,
    password: password,
  })

    .then((param_user) => {
      res.status(201).json(param_user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/login", (req, res) => {
  //console.log(req.body)
  let { userName, password } = req.body;

  Users.findOne({
    where: {
      userName: userName,
      password: password,
    },
  })
    //Users.create({ firstName: firstName, lastName: lastName, userName: userName, password: password })

    .then((param_user) => {
      if (!param_user) {
        console.log(userName + " " + password + " does not exist");
        return res.sendStatus(404);
      } else {
        console.log(userName);
        res.status(201).json(param_user);
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/logout", (req, res) => {
  console.log("Hi");
  localStorage.removeItem("uname");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    res.json(post);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  tbl_User.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.content = req.body.content;
    post
      .save()
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  tbl_User.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
