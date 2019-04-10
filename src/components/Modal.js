import React,{ Component } from 'react';

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
        return (
            <div className="modal">
                <div
                ref={this.modalRef}
                className="modal__wrap">
                    <h3>Modal</h3>
                    <button
                    onClick={() => closeModal()}
                    className="modal__close">&times;</button>
                </div>
            </div>
        )
    }
}

export default Modal;