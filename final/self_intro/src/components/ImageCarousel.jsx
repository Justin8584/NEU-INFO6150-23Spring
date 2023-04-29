import './ImageCarousel.css';
import { useState } from 'react';

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel">
            <img
                className='carousel-image'
                src={images[currentIndex].path}
                alt={`carousel-images ${currentIndex + 1} of ${images.length}: ${images[currentIndex].name || 'Untitled'}`}
            />

            <div className="carousel-controls">
                <i className="gg-chevron-left" tabIndex="0" aria-label='previous image' onClick={handlePrev}></i>
                <p className='carousel-image__title'>{images[currentIndex].name}</p>
                <i className="gg-chevron-right" tabIndex="0" aria-label='next image' onClick={handleNext}></i>
            </div>
        </div>
    );
};
export default ImageCarousel;
