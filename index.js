const express = require("express");
const app = express();
const {sequelize} = require("./db/connections");
const routes = require("./routes");

app.use(express.json());
// app.use(()=>sequelize.sync({force:true}));

// This is a method holds all the routes as middleware.
routes.bundleOfRoutes(app);

app.listen(8080, () => {
    console.log("Site is listening at : http://localhost:8080");
});