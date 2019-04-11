import { connect } from 'react-redux';
import { openModal } from './../store/actions';
import Product from '../components/Product';

export default connect(null,{ openModal })(Product);