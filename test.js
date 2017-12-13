
let io = require('socket.io-client');

class Connection {
    constructor() {
        var token = this.randomString(15);
        const sock = io('https://v3.palringo.com:3051/' + '?token=' + token + '&device=bot', { transports: ['websocket'] });
        return sock;
    }

    randomString(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}

var sock = new Connection();

sock.on('connect', function() {
    console.log('connected');
});
