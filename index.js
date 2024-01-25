const express = require("express");
const app = express();
const {sequelize} = require("./db/connections");
const routes = require("./routes");

app.use(express.json());
// app.use(()=>sequelize.sync());


// This is a method holds all the routes as middleware.
routes.bundleOfRoutes(app);

app.get("/sites/read",(req, res)=>{
    res.end("list sites");
});

app.post("/sites/upload", (req, res) => {
    res.send("Upload sites");
});

app.delete("/site/delete", (req, res) => {
    res.send("Delete site");
});

app.listen(8080, () => {
    console.log("Site is listening at : http://localhost:8080");
});