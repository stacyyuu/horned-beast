import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  };


  render() {
    return (
      <Container>
        <Card style={{width: '18 rem'}}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.handleClick}/>
          <Card.Text><FontAwesomeIcon icon = {faHeart}/> {this.state.count}</Card.Text>
        </Card.Body>
        </Card>
      </Container>
    )
  }
}

export default HornedBeast;
