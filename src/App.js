import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/PostForm';
import {
  Provider
} from 'react-redux';
import store from './store';

function App() {
  return (
  <Provider store={store} >
    < div className="App" >     
     <header className="App-header" >
        <img src={logo}
          className="App-logo"
          alt="logo" />
        <Postform />
        <hr />
        <Posts />
        </header> 
        </div > 
    </Provider>
          );
        }
        
export default App;