import { CLOSE_MODAL, OPEN_MODAL } from './modalConstants';

export var openModal = ({modalType, modalProps = {}}) => ({
    type: OPEN_MODAL,
    payload: {
        modalType,
        modalProps,
    }
})

export var closeModal = () => ({
    type: CLOSE_MODAL,
})