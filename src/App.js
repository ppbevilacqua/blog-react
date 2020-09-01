import React from 'react';
import NavBar from "./components/navbar";
import CardGroup from "./components/cardGroup";
import Post from "./components/post";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <main className="container">
        <CardGroup/>
        <Post/>
      </main>
    </React.Fragment>
  );
}

export default App;
