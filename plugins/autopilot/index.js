function autopilot(name, deps) {
    deps.io.sockets.on('connection', function(socket) {
        socket.on('/autopilot/proc1', function(cmd) {
            //console.log("proc1", name, deps.client);
            var client = deps.client;
            client.takeoff();
            client
                .after(3000, function() {
                    this.stop();
                })
                .after(7000, function() {
                    this.stop();
                    this.land();
                });
        });

    });
};
module.exports = autopilot;
