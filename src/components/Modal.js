import React,{ Component } from 'react';
import Gallery from './Gallery';

class Modal extends Component{
    constructor(props) {
        super(props);
        this.modalRef = React.createRef();
    }
    componentDidMount(){
        document.addEventListener('click',this.handleClick);
    }
    componentWillUnmount(){
        document.removeEventListener('click',this.handleClick);
    }
    handleClick = e => {
        if(this.modalRef.current.contains(e.target)){
            return;
        }
        else{
            this.props.closeModal();
        }
    }
    render(){
        const { product,closeModal } = this.props;
        const images = product.additional_image_link.split(",");
        return (
            <div className="modal flex-container justify-center align-center">
                <div
                ref={this.modalRef}
                className="modal__wrap">
                    <div className="modal__header flex-container align-center">
                        <h3 className="modal__title flex-grow">{product.title}</h3>
                        <button
                        onClick={() => closeModal()}
                        className="modal__close">&times;</button>
                    </div>
                    <div className="modal__body">
                        <Gallery images={images} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;