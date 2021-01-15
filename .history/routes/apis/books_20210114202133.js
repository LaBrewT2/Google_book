const router = require("express").Router();
const booksController = require("../../controllers/controller");

// api books
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);

//api books id
router.route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;