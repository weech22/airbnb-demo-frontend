import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import img6 from './6.png';

const CardWrap = styled.div`
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

const List = () => (
  <div className="row">
    <div className="col-xs-12 col-md-6">
      <CardWrap>
        <Card
          img={img1}
          type="Entire house"
          bedCount={9}
          name="La Salentina, see, nature & relax"
          price={82}
          reviews={97}
        />
      </CardWrap>
    </div>
    <div className="col-xs-12 col-md-6">
      <CardWrap>
        <Card
          img={img2}
          type="Entire house"
          bedCount={5}
          name="Your private 3 bedr. riad and exclusi…"
          price={82}
          reviews={161}
        />
      </CardWrap>
    </div>
    <div className="col-xs-12 col-md-6">
      <CardWrap>
        <Card
          img={img3}
          type="Entire treehouse"
          bedCount={1}
          name="Dreamy Tropical Tree House"
          price={200}
          reviews={364}
        />
      </CardWrap>
    </div>
    <div className="col-xs-12 col-md-6">
      <CardWrap>
        <Card
          img={img4}
          type="Entrie apartment"
          bedCount={1}
          name="La Salentina, see, nature & relax"
          price={82}
          reviews={369}
        />
      </CardWrap>
    </div>
    <div className="col-xs-12 col-md-6">
      <CardWrap>
        <Card
          img={img5}
          type="Entrie apartment"
          bedCount={6}
          name="Lussuoso. Vista incantevole."
          price={83}
          reviews={105}
        />
      </CardWrap>
    </div>
    <div className="col-xs-12 col-md-6">
      <CardWrap>
        <Card
          img={img6}
          type="Entrie house"
          bedCount={3}
          name="In the historical center of Lecce"
          price={72}
          reviews={221}
        />
      </CardWrap>
    </div>
  </div>
);

export default List;
