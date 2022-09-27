import React from 'react';
import HornedBeast from './HornedBeast';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  render() {
    return (
      <>
        <Row xs={2} sm={3} md={4} lg={5} className="g-4">
          {this.props.data.map(beast => <HornedBeast
            key={(beast._id)}
            title={(beast.title)}
            imageUrl={(beast.image_url)}
            description={(beast.description)}
            onClick={() => this.props.updateState(beast)}
          />)}
        </Row>
      </>
    )
  }
}

export default Main;

