import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import { ScrollDownBar } from 'react-chat-engine';
import './App.css';

const projectID = '3bbb2830-18bd-48c8-9a5e-b0f8b93f8acd';




const App=()=>{
    const projectID = '3bbb2830-18bd-48c8-9a5e-b0f8b93f8acd';
     const userSecret=localStorage.getItem('password');
     const userName=localStorage.getItem('username');
   return(
   
     userName ? <ChatEngine
          projectID={projectID}
          userName={userName}
          userSecret={userSecret}
        /> : <LoginForm />
   )
   
   }
   
   export default App;
