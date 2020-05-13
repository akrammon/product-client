import React, { Component } from 'react';

import ProductTable from './js/components/ProductTable';

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
        <header>Product Demo Client</header>
        <ProductTable products={this.state.products}></ProductTable>
      </div>
    );
  }
}

export default App;
