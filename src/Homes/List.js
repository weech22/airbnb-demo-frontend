import React, { Component } from 'react';
import styled from 'styled-components';
import 'whatwg-fetch';
import Card from './Card';

const CardWrap = styled.div`
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

class List extends Component {
  state = {
    homes: [],
  };

  componentWillMount() {
    const url = 'https://airbnb-demo-api.now.sh/v1/homes';

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ homes: data.items }));
  }
  render() {
    const [...homes] = this.state.homes;
    return (
      <div className="row">
        {homes.map(card => (
          <div className="col-xs-12 col-md-6">
            <CardWrap>
              <Card
                images={card.images}
                price={card.price}
                name={card.name}
                kind={card.kind}
                bedsCount={card.bedsCount}
                rating={card.rating}
                reviewsCount={card.reviewsCount}
                isSuperhost={card.isSuperhost}
              />
            </CardWrap>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
