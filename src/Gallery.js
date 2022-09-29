import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import data from './data.json';

class Gallery extends React.Component {

  selectedHorns = (event) => {
    event.preventDefault();
    const selection = parseInt(event.target.value);
    let numHorns = data;

    if (selection) {
      numHorns = data.filter(beast => beast.horns === selection);
    } else if (selection === 0) {
      numHorns = data;
    }
    this.props.updateGallery(numHorns);
  }

  render() {
    return (
      <>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label column="lg">View by number of horns:</Form.Label>
              <Form.Select className="w-25 p-2 mx-auto mb-2" onChange={this.selectedHorns}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
                <option value="0">View All</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Container>
      </>
    )
  }
}

export default Gallery;