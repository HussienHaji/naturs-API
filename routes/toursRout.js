const express = require("express");
const { getTours, getTour, createTour, updateTour, deleteTour, checkId, checkBody } = require("../controllers/toursController")

const router = express.Router()

router.param("id", checkId)

router.route("/").get(getTours).post(checkBody, createTour)
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour)


module.exports = router