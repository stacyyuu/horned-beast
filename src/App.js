import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />  
    </div>
    );
  }
}

export default App;
