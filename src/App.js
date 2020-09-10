import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import CardGroup from "./components/cardGroup";
import Post from "./components/post";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <CardGroup />
                    <Switch>
                        <Route path="/:id" component={Post} />
                    </Switch>
                </main>
            </React.Fragment>
        </Router>
    );
}

export default App;