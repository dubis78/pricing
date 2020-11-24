import React from 'react';

import Header from '../components/Header';
import MainPricing from '../components/MainPricing';
import Footer from '../components/Footer';

class PricingPage extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <MainPricing/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default PricingPage;