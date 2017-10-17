(function () { //IIFE

    const express = require("express");
    const bodyParser = require("body-parser");
    const path = require("path");

    const app = express();
    const PORT = 3000;

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });

    // routing reference: https://stackoverflow.com/questions/6059246/how-to-include-route-handlers-in-multiple-files-in-express
    require("./app/routing/htmlRoutes.js")(app);
    require("./app/routing/apiRoutes.js")(app);

})(); // IIFE