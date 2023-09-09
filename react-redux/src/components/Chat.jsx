import { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom'
import ChatBox from './ChatBox'

// const socket = io.connect('http://localhost:4000');

const Chat = ({ socket }) => {
    // const navigate = useNavigate()
    // const [roomId, setRoomId] = useState('')
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            {/* <input 
                type="text" 
                onChange={(e) => setRoomId(e.target.value)} 
                value={roomId}
            /> */}
            <button     
                onClick={() => {
                    socket.emit('join-room', { 
                        roomId: '1',
                        username: 'user-1'
                    })
                    socket.emit('join-room', { 
                        roomId: '2',
                        username: 'user-2'
                    })
                    // navigate('/chatbox')
                }}
            >
                join
            </button>
            <ChatBox toggle={toggle} socket={socket}/>
        </div>
    )
}

export default Chat
