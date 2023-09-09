import {useState, useEffect} from 'react'
import { io } from 'socket.io-client'


const ChatBox = ({ toggle, socket }) => {
    
    useEffect(() => {
        console.log('ChatBox')
        socket.on('receive_message', (data) => {
            console.log('>>', data)
            console.log('->', io.rooms)
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
