import React from 'react';
import './RenderImages.css';
import SampleImg from '../../assets/images/sample.jpg';


export default function RenderImages() {


    return (
        <div style={{ marginTop: '15px' }}>
            <div className="gallery">
                <div className='gallery__item gallery__item--1'>
                    <img src={SampleImg} alt="galleryImg" className="galleryImg" />
                </div>
                <div className='gallery__item gallery__item--2'>
                    <img src={SampleImg} alt="galleryImg" className="galleryImg" />
                </div>
                <div className='gallery__item gallery__item--3'>
                    <img src={SampleImg} alt="galleryImg" className="galleryImg" />
                </div>
                <div className='gallery__item gallery__item--4'>
                    <img src={SampleImg} alt="galleryImg" className="galleryImg" />
                </div>
                <div className='gallery__item gallery__item--5'>
                    <img src={SampleImg} alt="galleryImg" className="galleryImg" />
                </div>
                <div className='gallery__item gallery__item--6'>
                    <img src={SampleImg} alt="galleryImg" className="galleryImg" />
                </div>
            </div>
        </div>
    )
}
