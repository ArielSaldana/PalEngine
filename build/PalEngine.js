(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "socket.io-client"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var io = require("socket.io-client");
    var Connection = /** @class */ (function () {
        function Connection() {
            var token = this.randomString(15);
            this.sock = io('https://v3.palringo.com:3051/' + '?token=' + token + '&device=bot', { transports: ['websocket'] });
            return this;
        }
        Connection.prototype.randomString = function (length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };
        return Connection;
    }());
    exports.Connection = Connection;
    var connection = new Connection().sock;
    connection.on('connect', function () {
        console.log('connected');
    });
});
