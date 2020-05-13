import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ProductTable extends Component {


    render() {
        return (
            <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="right">Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="center">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.products.map((product) => (
                  <TableRow key={product.productCode}>
                    <TableCell align="left">
                      {product.name}
                    </TableCell>
                    <TableCell align="right">{product.category}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="center">{product.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
}

export default ProductTable;