import { OPEN_MODAL,CLOSE_MODAL } from '../types';

export default (state={ open: false },action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                open: true,
                product: action.product
            };
        case CLOSE_MODAL:
            return {
                open: false,
            }
        default:
            return state;
    }
}