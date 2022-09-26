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
      selectBeast: {},
    }
  }

  updateState = (newState, newBeast) => this.setState({ showBeast: newState, selectBeast: newBeast});
  handleCloseModal = () => this.setState({ showBeast: false, selectBeast: {}});

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          updateState = {this.updateState}
        />
        <SelectedBeast
          show={this.state.showBeast}
          selectBeast={this.state.selectBeast}
          handleClose={this.handleCloseModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;