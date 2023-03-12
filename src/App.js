import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';



const App = () => {
    if(!localStorage.getItem('userName')) return <loginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID="3bbb2830-18bd-48c8-9a5e-b0f8b93f8acd"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps }/>}


        
        />
    

    );
}

export default App;
