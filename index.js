var net = require('net');

module.exports = function (rangeStart) {
  return new Promise(function (fulfill, reject) {
    var portrange = rangeStart || 11000;
    function getPort (cb) {
      var port = portrange
      portrange += 1

      var server = net.createServer()
      server.listen(port, function (err) {
        server.once('close', function () {
          cb(port)
        })
        server.close()
      })
      server.on('error', function (err) {
        getPort(cb)
      })
    }
    getPort(fulfill);
  });
};
