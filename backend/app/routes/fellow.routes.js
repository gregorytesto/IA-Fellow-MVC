const express = require('express');
const router = express.Router();

const fellows = require("../controllers/fellow.controller.js");

router.post("/", fellows.create);
router.get("/", fellows.getAll);
router.get("/:id", fellows.getOne);
router.put("/:id", fellows.updateOne);
router.delete("/:id", fellows.deleteOne);

module.exports = router;