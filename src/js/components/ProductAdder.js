import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';

const CustomTextField = styled(TextField)({
   marginLeft: 4,
   marginRight: 4,
   width: '25ch',
   margin: 8
});

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
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                        <Grid item xs={3}>
                            <CustomTextField required id="productCode" label="Product Code" variant="outlined" onChange={ this.onProductCodeFieldChangeHandler }/>
                        </Grid>
                        <Grid item xs={3}>
                            <CustomTextField required id="category" label="Category" variant="outlined" onChange={ this.onCategoryFieldChangeHandler } />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomTextField id="name" label="Name" variant="outlined" onChange={ this.onNameFieldChangeHandler } />
                        </Grid>
                        <Grid item xs={3}>
                            <CustomTextField id="price" label="Price" variant="outlined" type="number" InputLabelProps={{shrink: true}} onChange={ this.onPriceFieldChangeHandler } />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomTextField id="description" multiline label="Description" variant="outlined" onChange={ this.onDescriptionFieldChangeHandler } />
                        </Grid>
                    <Grid container xs={6} justify="center" alignItems="center" direction="row">
                        <Grid item xs={3}>
                            <Button variant='contained' color='primary' onClick={ this.onClickSaveHandler }> Save </Button>
                        </Grid>    
                        <Grid item xs={3}>
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