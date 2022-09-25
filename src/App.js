import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBeast: false,
    }
  }

  handleCloseModal = () => {
    this.setState({ showBeast: false });
  }

  handleShowModal = () => {
    this.setState({ showBeast: true })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          handleOpen={this.handleShowModal}
        />
        <SelectedBeast
          show={this.state.showBeast}
          handleClose={this.handleCloseModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;


// import {card, button} from react-bootstrap
// import modal from bootstrap
// <Button onclick = {this.method} Meow </Button>
// function = (meow) => { this.setState({count: this.state.money + dollars, money: this.state.money - dollars}); 
//}
// this.props.function();
//class OverdratModal extends React.Component {
//   render ()
// }