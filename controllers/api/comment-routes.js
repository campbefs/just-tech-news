const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({
    attributes: ['id', 'comment_text', 'user_id', 'post_id', 'updatedAt', 'createdAt']
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {

  // Comment.create({
  //   comment_text: req.body.comment_text,
  //   user_id: req.body.user_id,
  //   post_id: req.body.post_id
  // })
  //   .then(dbCommentData => res.json(dbCommentData))
  //   .catch(err => {
  //     console.log(err);
  //     res.status(400).json(err);
  //   });

  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', withAuth, (req, res) => {

});

module.exports = router;