import React from 'react';
// import logo from './logo.svg';
import MainContent from './components/main_page';
import Users from './components/users_page';
import Posts from './components/posts_page';
import Header from './components/header';

// import Users from './components/users_page';
// import Posts from './components/posts_page';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={MainContent} />
          <Route path='/users' component={Users} />
          <Route path='/posts' component={Posts} />
        </Switch>  
    </BrowserRouter>);
}

export default App;
