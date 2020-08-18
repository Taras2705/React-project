import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi.How are you?', likesCount: 15},
    {id: 2, message: 'Its my first post', likesCount: 126},

];
let dialogs = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Petro'},
    {id: 3, name: 'Oleksandr'},
    {id: 4, name: 'Taras'},
    {id: 4, name: 'Stepan'}
];
let messages=[
    {id: 1,message: 'Hi hi'},
    {id: 2, message: 'Hi how are you?'},
    {id: 3, message: 'Hi.Nice to meet you'},

];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs}  messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
