import React, { Component } from 'react';
import 'whatwg-fetch';
import Card from '../../Homes/Card';
import SectionTitleAndMore from '../../UI/SectionTitleAndMore';
import { SliderBlock, Slider } from '../../UI/UI';

class Homes extends Component {
  state = {
    cardList: [],
  };

  componentWillMount() {
    const url = 'https://jsonblob.com/api/1247444908813180928';

    fetch(url)
      .then(response => response.json())
      .then(data =>
        data.items.map(card => ({
          image: card.image,
          price: card.price,
          name: card.name,
          kind: card.kind,
          bedsCount: card.bedsCount,
          rating: card.rating,
          reviewsCount: card.reviewsCount,
          isSuperhost: card.isSuperhost,
        })))
      .then(cardList =>
        this.setState({
          cardList,
        }));
  }
  render() {
    const [...cardList] = this.state.cardList;
    return (
      <div className="container">
        <SectionTitleAndMore name="Homes" link="/homes" />
        <SliderBlock>
          <Slider>
            {cardList.map(card => (
              <div className="col-xs-8 col-md-5 col-lg-4">
                <Card
                  image={card.image}
                  price={card.price}
                  name={card.name}
                  kind={card.kind}
                  bedsCount={card.bedsCount}
                  rating={card.rating}
                  reviewsCount={card.reviewsCount}
                  isSuperhost={card.isSuperhost}
                />
              </div>
            ))}
          </Slider>
        </SliderBlock>
      </div>
    );
  }
}

export default Homes;
