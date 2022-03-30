import { Server } from 'socket.io';
import clipboard from 'clipboardy';

const copy = clipboard.writeSync;

const io = new Server({ /* options */ });

io.on("connection", (socket) => {

  socket.on("ping", (arg, callback) => {
    copy(arg)
    callback("reCba!")
  })
  
});

io.listen(3000);