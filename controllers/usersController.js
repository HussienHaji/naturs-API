const fs = require("fs");

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

////////// users
function getUsers(req, res) {
    res.status(200).json({
        status: "success",
        data: users
    })
}
function getUser(req, res) {
    res.json("Get Single User")
}
function updateUser(req, res) {
    res.json("Update Users")
}
function createUser(req, res) {
    res.json("Create New Users")
}
function deleteUser(req, res) {
    res.json("Delete A Users")
}

module.exports = {
    getUsers, getUser, createUser, updateUser, deleteUser
}