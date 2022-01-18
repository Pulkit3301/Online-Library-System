const router = require("express").Router();
const {
  getLogin,
  getSignUp,
  getBooks,
  getBook,
  createBook,
} = require("../controllers/viewController");
const authController = require("../controllers/authController");
router.use(authController.isLoggedIn);

router.get("/", getBooks);
router.get("/book/:title", authController.protect, getBook);
router.get("/login", getLogin);
router.get("/signup", getSignUp);
router.get("/createBook", createBook);
module.exports = router;
