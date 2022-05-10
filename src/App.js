import React from 'react';
import Home from "./components/Home.js";
import "./App.js"
import Menu from './components/Menu.js';


class App extends React.Component {
  render(){
  return (
    <div>
      <Menu/>
      <Home/>
    </div>
  );
}
}

export default App;
