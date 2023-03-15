import { useState } from 'react';
import axios from 'axios';

const projectID = '3bbb2830-18bd-48c8-9a5e-b0f8b93f8acd'

const Modal=  () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret':password};

        try{
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload ();

            setError('');
        }catch (err) 
        { setError('OOOPS WRONG PASSWORD,TRY AGAIN'); }
    };

    return (
        <div className="wrapper">
          <div className="form">
            <h1 className="title">POKE CHAT</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
              <div align="center">
                <button type="submit" className="button">
                  <span>Let's chat!</span>
                </button>
              </div>
            </form>
            <h1>{error}</h1>
          </div>
        </div>
    
      );
    };
    
    export default Modal;