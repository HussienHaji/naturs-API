
const fs = require("fs");
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

/////////////// tours
// Get all tours
function getTours(req, res) {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    });
}
// get a single tour
function getTour(req, res) {
    const id = +req.params.id
    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid id"
        })
    }

    res.status(200).json({
        status: "success",
        data: {
            tour
        }
    })

}
// create new tour
function createTour(req, res) {

    const id = tours[tours.length - 1].id + 1
    const newTour = Object.assign({ id }, req.body)

    tours.push(newTour)

    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
        res.status(201).json({
            status: "success",
            data: newTour
        })
    })

}
// update a single tour
function updateTour(req, res) {

    const id = +req.params.id
    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid id"
        })
    }

    res.status(201).json({
        status: "success",
        message: "Tour updated"
    })
}
// delete a single tour
function deleteTour(req, res) {


    res.status(204).json({
        status: "success",
        message: null
    })
}

function checkId(req, res, next) {

    const id = +req.params.id
    const tour = tours.find(el => el.id === id)

    if (!tour) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid id"
        })
    }
    next()
}

function checkBody(req, res, next) {
    const body = req.body
    if (!("name" in body) || !("price" in body)) {
        return res.status(400).json({
            status: "fail",
            message: "the name and price property is required"
        })
    }
    next()
}

module.exports = {
    getTours, getTour, createTour, updateTour, deleteTour, checkId, checkBody
}