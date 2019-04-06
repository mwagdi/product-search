import React,{ Component,Fragment } from 'react';
import axios from 'axios';
import products from './products.csv';

class App extends Component{
    componentDidMount(){
        axios.get(products)
        .then(response => {
            this.props.fetchProducts(response.data)
        })
    }
    render(){
        return(
            <Fragment>
                <h1>Hello</h1>
            </Fragment>
        )
    }
}

export default App;