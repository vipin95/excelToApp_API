function bundleOfRoutes(app) {
    app.use("/user", require("./route/user/user.routes"));
    app.use("/site", require("./route/sites/sites.route"));
}

module.exports ={
    bundleOfRoutes
};