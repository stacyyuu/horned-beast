import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
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
    this.setState({ count: this.state.count + 1 })
  };


  render() {
    return (
      <Col>
        <Card className = "h-100">
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Img variant="top" onClick={this.props.onClick} src={this.props.imageUrl} alt={this.props.title} title={this.props.title}/>
          <Card.Text><FontAwesomeIcon icon = {faHeart} onClick={this.handleClick}/> {this.state.count}</Card.Text>
        </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default HornedBeast;
