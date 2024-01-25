const express = require("express"),
        router = express.Router();
const {user} = require("./index");

router.get("/read", user.list);
router.post("/create", user.create);
router.put("/update/:id", user.update);
router.delete("/delete/:id", user.delete);

module.exports = router;