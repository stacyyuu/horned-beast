import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={2} sm={3} md={4} lg={5} className="g-4">
          {data.map(beast => <HornedBeast
            title={(beast.title)}
            imageUrl={(beast.image_url)}
            description={(beast.description)} />)}
        </Row>
      </>
    )
  }
}

export default Main;

