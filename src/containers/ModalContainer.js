import { connect } from 'react-redux';
import { closeModal } from '../store/actions';
import Modal from './../components/Modal';

const mapStateToProps = state => {
    return {
        product: state.modal.product
    }
}

export default connect(mapStateToProps,{ closeModal })(Modal);