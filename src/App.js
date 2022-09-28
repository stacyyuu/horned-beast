import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Gallery from './Gallery'
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBeast: {},
      showBeast: false,
    }
  }

  updateState = (beast) => this.setState({selectBeast: beast, showBeast: true});
  handleCloseModal = () => this.setState({showBeast: false});

  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <Main
          updateState = {this.updateState}
          data = {data}
        />
        <SelectedBeast
          selectBeast={this.state.selectBeast}
          show={this.state.showBeast}
          handleClose={this.handleCloseModal}
        />
        <Footer />
      </div>
    );
  }
}

export default App;