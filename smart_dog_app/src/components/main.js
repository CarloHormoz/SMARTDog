import React from 'react';
import LandingPage from './landingpage';
import About from './about';
import Works from './works';
import Login from './login';
import Track from './track';
import {useAuth0} from '../auth0-wrapper';
import PrivateRoute from './Private';
//import SignUp from "./containers/SignUpForm.js"

import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path ="/" component= {LandingPage} />
        <Route path ="/about" component= {About} />
        <Route path ="/works" component= {Works} />
        <PrivateRoute path ="/track" component= {Track} />
    </Switch>
)

export default Main;