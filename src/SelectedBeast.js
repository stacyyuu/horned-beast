import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal size="lg" show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Modal.Title>{this.props.selectBeast.title}</Modal.Title>
                        {this.props.selectBeast.description}
                    </Modal.Body>
                    <Image fluid src={this.props.selectBeast.image_url} alt={this.props.selectBeast.title} title={this.props.selectBeast.title} />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;