const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json()); // content-type - application/json
app.use(express.urlencoded({ extended:true })); // content-type - application/x-www-form-urlencoded

app.get("/", (req, res)=>{
    res.status(200).sendFile('index.html', { root: __dirname });
});

const db = require("./app/models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

const fellowRoutes = require('./app/routes/fellow.routes');

app.use("/api/fellows", fellowRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});