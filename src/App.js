import React,{ Component,Fragment } from 'react';
import axios from 'axios';
import products from './products.csv';
import './assets/scss/app.scss';

import Product from './components/Product';
import ProductContainer from './containers/ProductContainer';

class App extends Component{
    state = {
        results: [],
        current: 0,
        pages: 0
    }
    componentDidMount(){
        axios.get(products)
        .then(response => {
            this.props.fetchProducts(response.data)
        })
    }
    handleInputChange = e => {
        const str = e.target.value.toLowerCase();
        if(str === ""){
            this.setState({
                results: [],
                current: 0,
                pages: 0
            });
        }
        else{
            const results = this.props.products.filter(product => product.title.toLowerCase().includes(str));
            this.setState({
                results,
                current: 1,
                pages: Math.ceil(results.length / 100)
            })
        }
    }
    render(){
        const { results,current,pages } = this.state;
        const { modal } = this.props;
        return(
            <Fragment>
                <h1 className="text-center">Products Search</h1>
                <div className="input-container text-center">
                    <input
                    onChange={this.handleInputChange}
                    placeholder="Search for products..."
                    type="text" />
                </div>
                <div className="flex-container flex-wrap">
                    {results.map((product,i) => {
                        if(i < ((current * 100)+1) && i > ((current - 1) * 100)){
                            let index = i - ((current - 1) * 100);
                            return (
                                <ProductContainer product={product} key={`pr${index}`} />
                            )
                        }
                    })}
                </div>
                {pages > 1 &&
                <div className="pagination flex-container justify-center">
                    {Array.from(Array(pages).keys()).map(page => (
                        <button
                        className={`pagination__item ${current === page + 1 ? 'active' : ''}`}
                        onClick={() => this.setState({current: page + 1})} key={page + 1}>
                            {page + 1}
                        </button>
                    ))}
                </div>}
                {modal &&
                <h3>Modal</h3>}
            </Fragment>
        )
    }
}

export default App;