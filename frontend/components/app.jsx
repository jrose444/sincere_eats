import GreetingContainer from "./greeting/greeting_container";
import React from "react";
import withRouter from 'react-dom'
import SignupFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal'
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import PostContainer from './posts/post_container'

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
                    <Modal />
                    {/* < signup_form_container /> */}
                </div>
        <PostContainer />
    </div>
);

export default App;