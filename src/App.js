
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


function App() {
  return (

<div className="App">

   <Modal/>   

   <Navigation/>
   <Header/>
   <AboutUs />
   <Feature/>
   <TourCard/>
   <Section/>
   <Booking/>
   <Footer/>
  

  
   </div>
  );
}

export default App;
