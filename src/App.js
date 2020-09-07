import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import CardGroup from "./components/cardGroup";
import Post from "./components/post";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from "react-redux";

class App extends Component{

    state = {
      cards : [
        {
          id : 1,
          title : "Post 1",
          text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imgPath : "https://picsum.photos/id/1/100/150"
        },
        {
          id : 2,
          title : "Post 2",
          text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imgPath : "https://picsum.photos/100/150"
        },
        {
          id : 3,
          title : "Post 3",
          text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          imgPath : "https://picsum.photos/100/150"
        }
      ]
    };

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
                          <Route path="/:id" component={Post}/>
                      </Switch>
                  </main>
              </React.Fragment>
          </Router>

      );
    };

}

//export default App;
const mapStateToProps = (state) => {
    return {
        post : state.postReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePost : (id) => {
            dispatch({
                type : "CHANGE_POST",
                payload : id
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);