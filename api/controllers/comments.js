const express = require("express");
const router = express.Router();
const db = require("../models");
const comment = require("../models/comment");
const { Comments, Post } = db;

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

router.get("/com", (req, res) => {
  Comments.findAll({
    include: {
      model: Post,
      required: true,
    },
  }).then((data) => {
    //console.log(data);

    return res.json(data);
  });
});

router.post("/", (req, res) => {
  let { content, pid } = req.body;

  Comments.create({ content: content, postId: pid })
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Comments.findAll({
    where: {
      postId: id,
    },
  }).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    return res.json(post);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Comments.findByPk(id).then((post) => {
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
  Comments.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.destroy();
    res.sendStatus(204);
  });
});

//update barf, meh fire

router.post("/counter", (req, res) => {
  let { id, bmf } = req.body;

  switch (bmf) {
    case 1:
      Comments.increment({ barf: 1 }, { where: { id: id } })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      break;
    case 2:
      Comments.increment({ meh: 1 }, { where: { id: id } })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      break;
    case 3:
      Comments.increment({ fire: 1 }, { where: { id: id } })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      break;
    default:
      console.log("bmf error");
      break;
  }
});

module.exports = router;
