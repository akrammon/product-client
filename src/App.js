import React, { Component } from 'react';

import ProductTable from './js/components/ProductTable';

import './App.css';
import ProductAdder from './js/components/ProductAdder';

class App extends Component {

  state = {
    products : []
  }

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    return (
      <div className="App">
        <header>Product Demo Client</header>
        <ProductTable products={this.state.products}></ProductTable>
        <ProductAdder></ProductAdder>
      </div>
    );
  }

  loadProducts() {
    fetch('http://localhost:8080/api/v1/products')
    .then(result => result.json())
    .then((data) => {
      this.setState({products: data})
    });
  }

}

export default App;
