const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  console.log("socket")
  socket.on("pipi", (arg, callback) => {
    console.log("recebido!")
    callback("reCba!")
})
});

io.listen(3000);