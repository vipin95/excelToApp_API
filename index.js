const express = require("express");
const app = express();
const {sequelize} = require("./db/connections");
const routes = require("./routes");
var cors = require('cors')

app.use(express.json({limit: '50mb'}));
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));
// app.use(()=>sequelize.sync({alter:true}));

// This is a method holds all the routes as middleware.
routes.bundleOfRoutes(app);

app.listen(8080, () => {
    console.log("Site is listening at : http://localhost:8080");
});