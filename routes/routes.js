var appRouter = function(app){
    app.get("/status", function (req, res) {
        console.log("someone hit ye ole status");
        var sentData = req.query.command;
        return res.send({"text": "Boro says " + sentData});
    });
    app.get("/", function(req, res){
        console.log("someone hit ye ole default");
        return res.send("Hello Meow!");
    });

}

module.exports = appRouter;