import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Faq from './Components/Pages/Faq/Faq';
import Blog from './Components/Pages/Blog/Blog';
import Reserv from './Components/Pages/Reservervation/Reserv';
import TermsPage from './Components/Pages/Termspage/TermsPage';
import Service from './Components/Pages/ServicePage/Service';
import Booking from './Components/Pages/booking/Booking';
import Contact from './Components/Pages/contact/Contact';
import About from './Components/Pages/About/About';
import Visa from './Components/Pages/Visapage/Visapage';

function App() {
  return (
   <>
   
   <BrowserRouter>          
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/faq' element={<Faq/ >} />
            <Route path='/blog' element={<Blog/ >} />
            <Route path='/reserve' element={<Reserv/ >} />
            <Route path='/terms' element={<TermsPage/ >} />
            <Route path='/service' element={<Service/ >} />
            <Route path='/booking' element={<Booking/ >} />
            <Route path='/contactus' element={<Contact/ >} />
            <Route path='/aboutus' element={<About/ >} />
            <Route path='/visapage' element={<Visa/ >} />

        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
