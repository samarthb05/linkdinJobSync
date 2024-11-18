const express = require("express");
const router = express.Router();
const { queryJobs } = require("./controller");

router.get("/jobs", async (req, res) => {
  try {
    const queryObject = req.query;
    const jobs = await queryJobs(queryObject);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching jobs." });
  }
});

module.exports = router;
