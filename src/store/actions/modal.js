import { OPEN_MODAL,CLOSE_MODAL } from '../types';

export const openModal = product => {
    return {
        type: OPEN_MODAL,
        product
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}