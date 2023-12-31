import './App.css';
// import { Provider } from 'react-redux'
// import { store } from './store';
// import Counter from './components/Counter';
// import Point from './components/Point';
// import Todos from './components/Todos';
import ChatBox from './components/ChatBox';
import Chat from './components/Chat';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hi</div>,
    },
    {
        path: "/chat",
        element: <Chat socket={socket}/>,
    },
    // {
    //     path: "/chatbox",
    //     element: <ChatBox />,
    // },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
