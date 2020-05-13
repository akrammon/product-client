import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    products : []
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/v1/products')
    .then(result => result.json())
    .then((data) => {
      this.setState({products: data})
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.products.map((product) => (
          <div>
            Name: {product.name}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
