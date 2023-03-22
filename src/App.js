import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import { ScrollDownBar } from 'react-chat-engine';
import './App.css';


const projectID = '8f9275fe-3586-4cfa-8dac-9796d041a3b8';




const App=()=>{
    const projectID = '8f9275fe-3586-4cfa-8dac-9796d041a3b8';
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
