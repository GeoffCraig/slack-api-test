var appRouter = function(app){
    app.get("/status", function (req, res) {
        return res.send({"text": "Hello Status!"})
    })

}

module.exports = appRouter;