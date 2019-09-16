const router = require('express').Router();
let Video = require('../models/videos.model');

router.route('/').get((req, res) => {
    Video.find()
    .then(videos => res.json(videos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const response = req.body.response;
    const _id = req.body._id;

  
    const newVideo = new Video({
        response,
        _id
    });
  
  newVideo.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Video.findById(req.params.id)
      .then(video => res.json(video))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
