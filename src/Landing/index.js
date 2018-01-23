import React from 'react';
import Explore from './Explore';
import Experience from './Experience';
import Homes from './Homes';
import Reservation from './Reservations';
import Featured from './Featured';
import Footer from '../Footer';

const FrontPage = () => (
  <div>
    <Explore />
    <Experience />
    <Homes />
    <Reservation />
    <Featured />
    <Footer />
  </div>
);

export default FrontPage;
