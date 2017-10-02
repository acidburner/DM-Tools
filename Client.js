var exampleSocket = new WebSocket("ws://192.168.1.64/Server");
exampleSocket.onopen = function(event) {
    exampleSocket.send("Connected...");
};