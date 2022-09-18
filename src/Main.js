import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <img src = {this.props.imageUrl} alt = {this.props.title} title = {this.props.title}></img>
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default Main;