import React from 'react';
import SectionTitleAndMore from '../../UI/SectionTitleAndMore';
import { SliderBlock, Slider } from '../../UI/UI';
import Card from './Card';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';

const Reservation = () => (
  <div className="container">
    <SectionTitleAndMore name="Popular reservations around the world" />

    <SliderBlock>
      <Slider>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card img={img1} type="Speakeasy" name="Chumley’s" price={60} />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card img={img2} type="Korean gastropub" name="Hanjan" price={50} />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card img={img3} type="German american" name="Prime Meats" price={55} />
        </div>
        <div className="col-xs-6 col-md-4 col-lg-3">
          <Card img={img4} type="Fine seafood" name="Seaprice" price={70} />
        </div>
      </Slider>
    </SliderBlock>
  </div>
);

export default Reservation;
