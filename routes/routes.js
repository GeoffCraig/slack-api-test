var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        return res.send({"text": "Hello Status!"})
    });
    app.get("/", function(req, res){
        console.log("someone hit ye ole default");
        return res.send("Hello Meow!")
    });

}

module.exports = appRouter;