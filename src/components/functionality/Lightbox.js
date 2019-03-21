import React from 'react';

const Lightbox = ({lightboxImage, closeLightbox}) => {

    return (
                <div className = "lightbox">
                    <img className = "lightboxImage" src={lightboxImage}></img>
                    <div>
                        <button className = "lightboxButton" onClick={() => closeLightbox()}>Return</button>
                    </div>
                </div>
    );
}

export default Lightbox;