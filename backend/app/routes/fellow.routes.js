module.exports = (app) => {
    const router = require("express").Router();
    const fellows = require("../controllers/fellow.controller.js");
    
    router.post("/", fellows.create);
    router.get("/", fellows.getAll);
    router.get("/:id", fellows.getOne);
    router.put("/:id", fellows.updateOne);
    router.delete("/:id", fellows.deleteOne);

    app.use("/api/fellows", router); //Prepending our routes for this file
}