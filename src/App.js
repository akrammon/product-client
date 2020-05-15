import React, { Component } from 'react';

import ProductTable from './js/components/ProductTable';

import './App.css';
import ProductAdder from './js/components/ProductAdder';
import { Grid, Typography } from '@material-ui/core';

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
        <Grid container justify='center' direction='column' spacing={3}>
          <Grid item>
            <Typography variant='h2' gutterBottom>Product Demo Application</Typography>
          </Grid>
          <Grid item>
            <ProductTable products={this.state.products}></ProductTable>
          </Grid>
          <Grid item>
            <ProductAdder saveCallback = { this.productAddCallback }></ProductAdder>
          </Grid>
        </Grid>
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

  productAddCallback = (product) => {
    this.setState({
      products: this.state.products.concat(product)
    })
  }

}

export default App;
