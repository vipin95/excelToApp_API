function bundleOfRoutes(app) {
    app.use("/user", require("./route/user/routes"));
}

module.exports ={
    bundleOfRoutes
};