import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';


import App from './App.jsx';
import MercurPage from './components/MercurPage.jsx';
import VeneraPage from './components/VeneraPage.jsx';
import ZemliaPage from './components/ZemliaPage.jsx';
import MarsPage from './components/MarsPage.jsx';




ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/Mercur' component={MercurPage} />
            <Route path='/Venera' component={VeneraPage} />
            <Route path='/Zemlia' component={ZemliaPage} />
            <Route path='/Mars' component={MarsPage} />

    </Route>
    </Router>,
    document.getElementById('mount-point')
);