import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

class Gallery extends React.Component {
  render() {
    return (
      <>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label column="lg">View by number of horns:</Form.Label>
            <Form.Select onChange={this.handleNumerals}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        </Container>
      </>
    )
  }
}

export default Gallery;