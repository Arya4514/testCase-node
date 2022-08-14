const express = require("express");
const router = express.Router();
const Stats = require("./stats");

router.use(
    "/",
    Stats,
);

module.exports = router;
