import { io } from 'socket.io-client'
import {GlobalKeyboardListener} from "node-global-key-listener"

const socket = io("ws://localhost:3000");
const listener = new GlobalKeyboardListener();

listener.addListener(function (e, down) {
    if(e.state == "DOWN")
    console.log(e.name)
    // if(e.name === "SPACE")
    //     socket.emit("ping","Mensagem Personalizada", (resposta) => {
    //         console.log(resposta)
    //     })


});