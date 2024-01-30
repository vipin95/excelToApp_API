const express = require("express");
const router = express.Router();
const site = require("./site.controller")

router.get("/list", site.list)
router.post("/create", site.create)
router.put("/update/:id", site.update)
router.delete("/delete/:id", site.delete)

module.exports = router;