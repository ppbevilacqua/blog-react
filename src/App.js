import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import CardGroup from "./components/cardGroup";
import Post from "./components/post";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import data from "../src/fetchCards";

class App extends Component{

    state = data;

    Home = () => {
        return <div>
            home page
        </div>
    };

    render(){
      return (
          <Router>
              <React.Fragment>
                  <NavBar/>
                  <main className="container">
                      <CardGroup cards = {this.state.cards} />
                      <Switch>
                          <Route path="/:id" component={Post} cards = {this.state.cards} />
                      </Switch>
                  </main>
              </React.Fragment>
          </Router>

      );
    };

}

export default App;