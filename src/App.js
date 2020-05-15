import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

import ProductTable from './js/components/ProductTable';
import ProductAdder from './js/components/ProductAdder';

import './App.css';

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
