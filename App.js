import React from "react";
import "./App.css";
import Login from "./components/navBlock/Login";
import Nav from "./components/navBlock/Nav";
import Slideshow from "./components/Slideshow";
import FormHandling from "./components/Challenges/FormHandling";
// import Nav from "./components/navBlock/Nav";
function App() {
  return (
    <div>
      Task Manager
      <Nav />
      <h1>hello</h1>
      <Slideshow />
      <FormHandling />
    </div>
  );
}

export default App;
