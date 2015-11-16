(function(window, document, $, undefined) {
    'use strict';


    /*
     * Constructuor
     */
    var Sensors = function Sensors(cockpit) {
        console.log("Loading Sensors plugin.");
        this.cockpit = cockpit;




        $('#cockpit').append('<div id="sensors">Here are the sensors</div>');
        $('#sensors').append('<div id="s1">s1</div>');
        $('#sensors').append('<div id="s2">s2</div>');
        $('#sensors').append('<div id="s3">s3</div>');
        $('#sensors').append('<div id="s4">s4</div>');
        $('#sensors').append('<div id="s5">s5</div>');
        this.cockpit.socket.on('navdata', function(data) {
            //console.log(data);
            $('#s1').text('controlState ' + data.demo.controlState);
            $('#s2').text('altitude ' + data.demo.altitude);
            $('#s3').text('wifi.linkQuality ' + data.wifi.linkQuality);
        });

        // Register the various event handlers
        this.listen();

    };

    /*
     * Register keyboard event listener
     */
    Sensors.prototype.listen = function listen() {
        var sensors = this;
    };



    window.Cockpit.plugins.push(Sensors);

}(window, document, jQuery));
