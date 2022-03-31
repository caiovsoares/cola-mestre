import { Server } from 'socket.io';
import clipboard from 'clipboardy';
import {GlobalKeyboardListener} from "node-global-key-listener"

const copy = clipboard.writeSync;
const paste = clipboard.readSync;
const io = new Server({ /* options */ });
const listener = new GlobalKeyboardListener();
const keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const database = {}
const save = (str) => database[str.substring(0,1)] = str.substring(1) 
const retrieve = (str) => database[str]

listener.addListener(function (e, down) {

    if(down['LEFT CTRL'] && down['LEFT SHIFT'] && e.state == "DOWN" && keys.includes(e.name))
        save(e.name+paste())

    if(down['LEFT CTRL'] && down['LEFT ALT'] && e.state == "DOWN" && keys.includes(e.name))
        copy(retrieve(e.name))

});

io.on("connection", (socket) => {

    socket.on("SALVAR", arg => save(arg))

    socket.on("RECEBER", (arg, callback) => {
        callback(retrieve(arg))
    })
});

io.listen(3000);