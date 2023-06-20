const express = require("express");
const { getAllPeople, getPerson, newPerson } = require("../controllers/people");

const router = express.Router();

router.route("/").get(getAllPeople);
router.route("/").post(newPerson);
router.route("/:id").get(getPerson);

module.exports = router;
