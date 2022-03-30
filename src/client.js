const { io } = require("socket.io-client");
const {GlobalKeyboardListener} = require("node-global-key-listener")

const socket = io("ws://localhost:3000");
const listener = new GlobalKeyboardListener();

listener.addListener(function (e, down) {

    if(e.name === "F1")
        console.log("foi um F1 nego")
    if(e.name === "SPACE")
        socket.emit("pipi","Sera?", (resposta) => {
            console.log(resposta)
        })
});