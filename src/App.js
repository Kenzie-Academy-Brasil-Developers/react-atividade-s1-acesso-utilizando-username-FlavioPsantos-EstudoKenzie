import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './components/WelcomePage'
import './components/GetUserComponent'
import WelcomePage from './components/WelcomePage';
import GetUserComponent from './components/GetUserComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const  [handleUser, setHandleUser] = useState('');
  return (
    
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoggedIn ? (<WelcomePage user={handleUser} setIsLogged={setIsLoggedIn}/>):(<GetUserComponent setUser={setHandleUser} setIsLogged={setIsLoggedIn}/> ) }
      </div>
    </div>
  );
}

export default App;
