const express = require("express");
const { getUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/usersController")


const router = express.Router()

router.route("/").get(getUsers).post(createUser)
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)

module.exports = router