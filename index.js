var Express = require('express'),
    App = Express(),
    // Mongoose = require('mongoose'),
    Morgan = require('morgan'),
    BodyParser = require('body-parser'),
    Path = require('path'),
    MethodOverride = require('method-override');

App.use('/app', Express.static(Path.join(__dirname + '/app')));
App.use('/dist', Express.static(Path.join(__dirname + '/dist')));
App.use(Morgan('dev'));                                         // log every request to the console
App.use(BodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
App.use(BodyParser.json());                                     // parse application/json
App.use(BodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
App.use(MethodOverride());

var port;
port = process.env.PORT || 8080;

// function ReturnData(resp, model, entity) {
//     // We might not want to default to returning all data from the db as this can cause high server load.
//     if (Settings.returnAllEntitiesOnPost) {
//         // We want to return all entities, call find() on our model and return err/data
//         model.find(function (err, data) {
//             if (err)
//                 resp.send(err);

//             resp.json(data);
//         })
//     } else {
//         // We only want to return our newly created entity
//         resp.json(entity);
//     }
// }

App.get('/app/routes/:name', function (req, res) {
    var name = req.params.name;
    res.sendFile('/static/routes' + name);
});

App.get('/*', function (req, res, next) {
    // We're not calling the API, return index and let Angular handle the request
    res.sendFile('/app/index.html', { root: __dirname });
});
App.listen(port, function () {
    console.log('Listening on port ' + port);
});