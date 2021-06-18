import React,{Fragment} from 'react';
import AboutUs from './Components/AboutUs';
import Booking from './Components/Booking';
import Feature from './Components/Feature';
import Header from './Components/Header'
import Section from './Components/Section';
import TourCard from './Components/TourCard';
import Footer from './Components/Footer';
import './sass/main.css';
import Navigation from './Components/Navigation';
import Modal from './Components/Modal';

import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Discover from './Components/Discover';
// import Fetch from './Components/Fetch';


function App() {
  return (

<Router>



  <Switch>
  <Route path='/DiscoverTours'>
     <Discover/>
   </Route>
<Fragment >
<Navigation/>

   <Modal/>   

   <Header/>
   <AboutUs />
   <Feature/>
   <TourCard/>
   <Section/>
   <Booking/>
 
   <Footer/>
  
   
  
   </Fragment>
    
   </Switch>
   </Router>
  );
}

export default App;
