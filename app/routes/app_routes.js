'use strict';
module.exports = function (app) {
    const index = require("../controllers/app_controller");

    //URL routes

    app.get('/', index.home);

};