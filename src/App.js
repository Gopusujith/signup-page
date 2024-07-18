import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import React from 'react';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
//prevent default it is used  to cancel when action is in pending or action is in trigging .
// routes :It is used to navigate the pages without loading
//use state: it allows state values in functional components
//use effect: it is a life cycle method it executes after the return statement .for example: In counter application when we click on increment or decrement button it shows how many times the button is clicked
