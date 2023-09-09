const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');


const app = express();
const http = require('http');
const server = http.createServer(app);

app.use(cors()); // Add cors middleware


// Add this
app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/bathroom', (req, res) => {
    res.send('Hello world');
});

app.get('/bedroom', (req, res) => {
    res.send('Hello world');
});

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

io.on("connection", (socket) => {
    console.log('socket connection established');

    socket.on('join-room', (data) => {
        console.log(data)
        const { roomId, username } = data
        // switch (roomId) {
        //     case '1':{
        //         socket.join('1')
        //         io.sockets.in('1').emit('receive_message', {
        //             roomId: '1',
        //             username,
        //             __createdtime__: Date.now(),
        //         })
        //     }
        //     case '2':{
        //         socket.join('2')
        //         io.sockets.in('2').emit('receive_message', {
        //             roomId: '2',
        //             username,
        //             __createdtime__: Date.now(),
        //         })
        //     }
        // }
        socket.join(roomId)
        io.sockets.in(roomId).emit('receive_message', {
            roomId,
            username,
            __createdtime__: Date.now(),
        })
        // io.emit('receive_message', {
        //     message: `${username} has joined the chat room`,
        //     username,
        //     __createdtime__: Date.now(),
        // })
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server is running on port 4000')
});