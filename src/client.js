import { io } from 'socket.io-client'
import {GlobalKeyboardListener} from "node-global-key-listener"
import clipboard from 'clipboardy'
import config from 'config'
const copy = clipboard.writeSync;
const paste = clipboard.readSync;

console.log(config.get('host_address'))

const socket = io(`ws://${config.get('host_address')}:3000`);
const listener = new GlobalKeyboardListener();

const keys = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

listener.addListener(function (e, down) {

    if(down['LEFT CTRL'] && down['LEFT SHIFT'] && e.state == "DOWN" && keys.includes(e.name))
        socket.emit('SALVAR',e.name+paste()); 

    if(down['LEFT CTRL'] && down['LEFT ALT'] && e.state == "DOWN" && keys.includes(e.name))
        socket.emit('RECEBER',e.name, resposta => copy(resposta));

});