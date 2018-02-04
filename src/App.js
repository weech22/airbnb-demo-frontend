import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route } from 'react-router-dom';
import 'flexboxgrid2/flexboxgrid2.css';
import 'normalize.css';
import './Fonts/font.css';
import Header from './Header';
import Landing from './Landing';
import Homes from './Homes';

const App = () => (
  <div>
    <Helmet>
      <title>Airbnb</title>
    </Helmet>
    <Header />
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/homes" component={Homes} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
