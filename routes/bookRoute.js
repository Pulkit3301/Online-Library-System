const router = require("express").Router();
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  getBook,
} = require("../controllers/bookController");
/* const {protect}=require("../controllers/authController"); */
router.route("/").get(getAllBooks);
router.route("/createBook").post(createBook);
router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);
module.exports = router;
