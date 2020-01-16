const app = require('express')();

const http = require('http')
              .createServer(app);
const io = require('socket.io')(http);


const __pages_dir = __dirname + '/pages';


app.get('/', (req, res)=>{
  res.sendFile(__pages_dir+'/index.html');
});


io.on('connection',(socket)=>{
  console.log('user has connected');

  socket.on('disconnect',()=>{
    console.log('user has disconnected');
  });
});



http.listen(3000, ()=>{
  console.log('listening on *:3000');
});
