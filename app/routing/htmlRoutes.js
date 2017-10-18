
module.exports = function(app){

    app.get("/", function(req, res) {
        res.sendFile('home.html', { root: './app/public' });
    });

    app.get("/survey", function(req, res) {
        res.sendFile('survey.html', { root: './app/public' })
    });

    app.get("/clickyLogic.js", function(req, res) {
        res.sendFile('clickyLogic.js', { root: './app/js' })
    })
}