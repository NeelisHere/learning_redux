import {useState, useEffect} from 'react'
import io from 'socket.io-client';

// const socket = io.connect('http://localhost:4000');

const ChatBox = ({ toggle, socket }) => {
    
    useEffect(() => {
        console.log('ChatBox')
        socket.to('1').on('receive_message', (data) => {
            console.log('>>', data)
        })
        // return () => socket.off('receive_message');
    }, [toggle])

    return (
        <div>
            chat box
        </div>
    )
}

export default ChatBox
