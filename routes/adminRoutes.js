const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatus,
} = require("../controllers/adminCtrl");

const router = express.Router();

router.get("/getAllUsers", authMiddleware, getAllUsersController);
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//Account status
router.post("/changeAccountStatus", authMiddleware, changeAccountStatus);

module.exports = router;
