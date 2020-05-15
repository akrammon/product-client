import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

class ProductAdder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addingProduct: false,
            productCode: null,
            category: null,
            name: null,
            price: null,
            description: null
        }
    }

    render() {
        if(!this.state.addingProduct) {
            return(
                <Grid container justify='center'>
                    <Button color='primary' variant='outlined' size='large' onClick={ this.onClickAddProductHandler }>Add New Product</Button>
                </Grid>
            )
        } else {
            return(
                <Grid container direction="column">
                    <Grid container direction="row">
                        <Grid item>
                            <TextField id="productCode" size="small" label="Product Code" variant="outlined" onChange={ this.onProductCodeFieldChangeHandler }></TextField>
                        </Grid>
                        <Grid item>
                            <TextField id="category" size="small" label="Category" variant="outlined" onChange={ this.onCategoryFieldChangeHandler }></TextField>
                        </Grid>
                        <Grid item>
                            <TextField id="name" size="small" label="Name" variant="outlined" onChange={ this.onNameFieldChangeHandler }></TextField>
                        </Grid>
                        <Grid item>
                            <TextField id="price" size="small" label="Price" variant="outlined" onChange={ this.onPriceFieldChangeHandler }></TextField>
                        </Grid>
                        <Grid item>
                            <TextField id="description" size="small" label="description" variant="outlined" onChange={ this.onDescriptionFieldChangeHandler }></TextField>
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item>
                            <Button variant='contained' color='primary' onClick={ this.onClickSaveHandler }> Save </Button>
                        </Grid>    
                        <Grid item>
                            <Button variant='contained' color='secondary' onClick={ this.onClickCancelHandler }>Cancel</Button>
                        </Grid>
                    </Grid>  
                </Grid>
            );

        }
    }

    onClickAddProductHandler = () => {
        this.setState({
            addingProduct: true
        });
    }

    onClickSaveHandler = () => {
        let callbackData = this.state;
        fetch('http://localhost:8080/api/v1/product', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                productCode: this.state.productCode,
                category: this.state.category,
                name: this.state.name,
                price: this.state.price,
                description: this.state.description
            })
        })
        .then(resp => resp.json())
        .then(response => {
            this.props.saveCallback(response);
            this.setState({
                addingProduct: false,
                productCode: null,
                category: null,
                name: null,
                price: null,
                description: null
            })
        })
        .catch(err => {
            console.log("There was an error while saving product:" + err);
            this.setState({
                addingProduct: false,
                productCode: null,
                category: null,
                name: null,
                price: null,
                description: null
            })
        })
    }

    onClickCancelHandler = () => {
        this.setState({
            addingProduct: false,
            productCode: null,
            category: null,
            name: null,
            price: null,
            description: null
        })
    }

    onProductCodeFieldChangeHandler = (e) => {
        this.setState({
            productCode: e.target.value
        });
    }

    onCategoryFieldChangeHandler = (e) => {
        this.setState({
            category: e.target.value
        });
    }

    onNameFieldChangeHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onPriceFieldChangeHandler = (e) => {
        this.setState({
            price: e.target.value
        });
    }

    onDescriptionFieldChangeHandler = (e) => {
        this.setState({
            description: e.target.value
        });
    }

}

export default ProductAdder;