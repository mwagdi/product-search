import React,{ Component } from 'react';

class Gallery extends Component{
    state = {
        current: 0
    }
    render(){
        const { images } = this.props;
        const { current } = this.state;
        return (
            <div className="gallery flex-container">
                <div className="gallery__viewer">
                    <img src={images[current]} alt="gallery view"/>
                </div>
                <div className="gallery__select flex-direction flex-column">
                    {images.map((image,i) => (
                        <div
                        onClick={() => this.setState({ current: i })}
                        key={i}
                        style={{backgroundImage: `url(${image})`}}
                        className={`gallery__select_item ${current === i ? 'active' : ''}`}></div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Gallery;