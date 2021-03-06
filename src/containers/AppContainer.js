import { connect } from 'react-redux';
import { fetchProducts } from './../store/actions/products';
import App from './../App';

const mapStateToProps = state => {
    return {
        products: state.products,
        modal: state.modal.open
    }
}

export default connect(mapStateToProps,{ fetchProducts })(App);
