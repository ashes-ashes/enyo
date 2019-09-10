import React from "react";
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/routes_util';

import SplashContainer from "./splash/splash_container"
import LoginFormContainer from "./auth/login_form_container"
import SignupFormContainer from "./auth/signup_form_container"
import ChatContainer from "./chat/chat_container"

const App = () => (
    <div>
        <Route exact path="/" component={SplashContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/servers" component={ChatContainer} />
    </div>
);

export default App;