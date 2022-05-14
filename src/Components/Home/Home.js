import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import HealthCare from './HealthCare';
import Appointment from './Appointment';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from '../Shared/Footer/Footer';




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <HealthCare></HealthCare>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;