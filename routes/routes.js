var appRouter = function(app){
    app.get("/status", function (req, res) {
        return res.send({"text": "Hello Status!"})
    });
    app.get("/", function(req, res){
        return res.send("Hello Meow!")
    });

}

module.exports = appRouter;