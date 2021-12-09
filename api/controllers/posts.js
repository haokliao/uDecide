const express = require("express");
const router = express.Router();
const db = require("../models");
const { Post } = db;

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
  Post.findAll({ order: [["id", "DESC"]] }).then((posts) => {
    // console.log(posts);
    return res.json(posts);
  });
});

router.post("/", (req, res) => {
  let { content, UserId, title } = req.body;

  Post.create({
    content: content,
    UserId: UserId,
    title: title,
  })
    .then((post) => {
      return res.status(201).json(post);
    })
    .then((post) => {
      return res.json(post.id);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Post.findAll({
    where: {
      id: id,
    },
  }).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    return res.json(post);
  });
});

router.get("/home/:UserId", (req, res) => {
  const { UserId } = req.params;
  Post.findAll({
    where: {
      UserId: UserId,
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
  Post.findByPk(id).then((post) => {
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
  Post.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }

    post.destroy();
    res.sendStatus(204);
  });
});

//update barf, meh fire

router.post("/counter", (req, res) => {
  let { postId, bmf } = req.body;

  switch (bmf) {
    case 1:
      Post.increment({ barf: 1 }, { where: { id: postId } })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      Post.increment({ commTotal: 1 }, { where: { id: postId } });
      break;
    case 2:
      Post.increment({ meh: 1 }, { where: { id: postId } })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      Post.increment({ commTotal: 1 }, { where: { id: postId } });
      break;
    case 3:
      Post.increment({ fire: 1 }, { where: { id: postId } })
        .then((post) => {
          res.status(201).json(post);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
      Post.increment({ commTotal: 1 }, { where: { id: postId } });
      break;
    default:
      console.log("bmf error");
      break;
  }
});

module.exports = router;
