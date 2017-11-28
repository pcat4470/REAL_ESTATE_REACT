
//import './App.css';

import React from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import Invite from './Invite';

//class App extends Component 
    


const App = () => (
	<BrowserRouter>
  	<div className="container">
  		<Header />
  			<Route exact path="/" component={Home} />
  			<Route path="/About" render={ () => <About title='About'/>} />
  			<Route path="/Teachers" render={ () => <Teachers title='Available Apts'/>} />
  			<Route path="/Courses" render={ () => <Courses title='Neighborhoods'/>} />
  			<Route path="/Invite" render={ () => <Invite title='Open House'/>} />

  </div>
  </BrowserRouter>
);

export default App;