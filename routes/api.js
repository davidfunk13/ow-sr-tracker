
const path = require("path");
const router = require("express").Router();
const applicationController = require('../controllers/applicationController')

// router.route("/")
//   .get(applicationController.getAll)
  // .post(postsController.saveArticle);

// router.route('/api/scraper')
//   .post(postsController.scraper)
//   .get(postsController.scraper)

//   router.route('/api/articles')
//     .post(postsController.saveArticle)

//     router.route('/api/saved')
//     .get(postsController.getAll)

//     router.route('/api/delete')
//     .post(postsController.deleteArticle)

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;