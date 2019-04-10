import React,{ Component,Fragment } from 'react';
import axios from 'axios';
import products from './products.csv';

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
        return(
            <Fragment>
                <h1>Products Search</h1>
                <div className="input-container">
                    <input
                    onChange={this.handleInputChange}
                    placeholder="Search for products..."
                    type="text" />
                </div>
                {results.map((product,i) => {
                    if(i < (current * 100) && i > ((current - 1) * 100)){
                        let index = i - ((current - 1) * 100);
                        return (
                            <div key={`pr${index}`}>
                                {product.title}
                            </div>
                        )
                    }
                })}
                {pages > 1 &&
                <div className="pagination">
                    {Array.from(Array(pages).keys()).map(page => (
                        <a onClick={() => this.setState({current: page + 1})} key={page + 1}>{page + 1}</a>
                    ))}
                </div>}
            </Fragment>
        )
    }
}

export default App;