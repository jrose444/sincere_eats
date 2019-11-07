import GreetingContainer from "./greeting/greeting_container";
import React from "react";
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

const App = () => (
    <div>
        <header className="the-navbar">
        <h1 className="title">Sincere Eats
        <img className="rest-image" src="/assets/restaurant.png"/>
        </h1>
            <div className="nav-bar-fields">
                <div className="dropdown">
                <h3 className="recipes-tab">Recipes
                    <div className="recipes-dropdown">
                        <h4>item</h4>
                        <h4>another item</h4>
                    </div>
                </h3>
                
                </div>
                <div className="dropdown">
                    <h3 className="recipes-tab">How-Tos
                    <div className="recipes-dropdown">
                            <h4>How-Tos</h4>
                        </div>
                    </h3>
                </div>
                <div className="dropdown">
                    <h3 className="recipes-tab">Dining Out
                    <div className="recipes-dropdown">
                            <h4>How-Tos</h4>
                        </div>
                    </h3>
                </div>
                <div className="dropdown">
                    <h3 className="recipes-tab">Thanksgiving
                    <div className="recipes-dropdown">
                            <h4>How-Tos</h4>
                        </div>
                    </h3>
                </div>
                <div className="dropdown">
                    <h3 className="recipes-tab">Saved Recipes
                    <div className="recipes-dropdown">
                            <h4>How-Tos</h4>
                        </div>
                    </h3>
                </div>
                <div className="greeting-container">
                    < GreetingContainer  />
                </div>
            </div>
        </header>
                <div>
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    {/* < signup_form_container /> */}
                    <AuthRoute exact path="/signup" component={SignupFormContainer} className="Signup-Header"/>
                </div>
        
    </div>
);

export default App;