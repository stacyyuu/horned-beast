import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import data from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectBeast: {},
      showBeast: false,
      gallery: data,
    }
  }

  updateState = (beast) => this.setState({selectBeast: beast, showBeast: true});
  handleCloseModal = () => this.setState({showBeast: false});
  updateGallery = (numHorns) => this.setState({gallery: numHorns});

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          updateState = {this.updateState}
          data = {this.state.gallery}
          updateGallery = {this.updateGallery}
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