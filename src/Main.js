import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newState: '',
      newBeast: {},
    }
  }

  updateMainState = () => this.props.updateState(this.state.newState, this.state.newBeast);

  render() {
    return (
      <>
        <Row xs={2} sm={3} md={4} lg={5} className="g-4">
          {data.map(beast => <HornedBeast
            title={(beast.title)}
            imageUrl={(beast.image_url)}
            onClick={() => this.setState({newState: true, newBeast: beast})(this.updateMainState())}
            description={(beast.description)} 
            /> )}
        </Row>
      </>
    )
  }
}

export default Main;

