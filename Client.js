var exampleSocket = new WebSocket("ws://192.168.1.64/socketserver");
exampleSocket.onopen = function(event) {
    exampleSocket.send("Connected...");
};