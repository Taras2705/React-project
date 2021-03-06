import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";



const App=(props) =>{
  return (

    <div className="app-wrapper">
     <Header/>
      <div className="nav-menu">
      <Navbar/>
      <div className="app-wrapper-content">
      <Route  path='/profile' render={()=><Profile profilePage={props.state.profilePage} dispatch={props.dispatch}  />}/>
      <Route  path='/dialogs' render={()=><Dialogs store={props.store} />}/>
      <Route path='/news' render={()=><News/>}/>
      <Route path='/music' render={()=><Music/>}/>
      <Route path='/settings' render={()=><Settings/>}/>
      </div>
      </div>
    </div>
  );
};

export default App;
