import React from 'react';
import Card from '../../Homes/Card';
import SectionTitleAndMore from '../../UI/SectionTitleAndMore';
import { SliderBlock, Slider } from '../../UI/UI';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';

const Homes = () => (
  <div className="container">
    <SectionTitleAndMore name="Homes" link="/homes" />
    <SliderBlock>
      <Slider>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            img={img1}
            info="Entire house · 9 beds"
            name="$82 La Salentina, see, nature & relax"
            hosts={97}
          />
        </div>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            img={img2}
            info="Entire house  ·  5 beds"
            name="$82 Your private 3 bedr. riad and exclusi…"
            hosts={161}
          />
        </div>
        <div className="col-xs-8 col-md-5 col-lg-4">
          <Card
            img={img3}
            info="Entire treehouse  ·  1 bed"
            name="$200 Dreamy Tropical Tree House"
            hosts={364}
          />
        </div>
      </Slider>
    </SliderBlock>
  </div>
);

export default Homes;
