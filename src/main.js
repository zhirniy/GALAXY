import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory, Redirect} from 'react-router';


import App from './App.jsx';
import MercurPage from './components/MercurPage.jsx';
import VeneraPage from './components/VeneraPage.jsx';
import ZemliaPage from './components/ZemliaPage.jsx';
import MarsPage from './components/MarsPage.jsx';
import JupiterPage from './components/JupiterPage.jsx';
import SaturnPage from './components/SaturnPage.jsx';
import UranPage from './components/UranPage.jsx';
import NeptunPage from './components/NeptunPage.jsx';
import KarlikPage from './components/KarlikPage.jsx';






ReactDOM.render(
    <Router history={hashHistory}>
        <Redirect from='/' to='/Mercur' />
        <Route path='/' component={App}>
            <Route path='/Mercur' component={MercurPage} />
            <Route path='/Venera' component={VeneraPage} />
            <Route path='/Zemlia' component={ZemliaPage} />
            <Route path='/Mars' component={MarsPage} />
            <Route path='/Jupiter' component={JupiterPage} />
            <Route path='/Saturn' component={SaturnPage} />
            <Route path='/Uran' component={UranPage} />
             <Route path='/Neptun' component={NeptunPage} />
            <Route path='/Karlik' component={KarlikPage} />
            <Route path='/' component={MercurPage} />
           

    </Route>
    </Router>,
    document.getElementById('mount-point')
);