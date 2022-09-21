import React from 'react';
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends React.Component {
  render() {
    return (
      // <ThemeProvider
      //   breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      //   minBreakpoint="xxs"
      // >
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      // </ThemeProvider>
    );
  }
}

export default App;
