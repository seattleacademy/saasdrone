function sensors(name, deps) {
    deps.io.sockets.on('connection', function(socket) { //SEE SDK 2.0 starting at page 70
            var client = deps.client;
            console.log('sensors plugin running');
    });
};
module.exports = sensors;
