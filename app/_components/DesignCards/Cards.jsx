import React from 'react';

const Cards = ({ title, image, description }) => {
    return (
        <div className="designCards">
            <div className="content">
                <div className="back">
                    <div className="back-content">
                        {/* This can be used for a back image, or additional information */}
                        <img
                            src={image}  // Use the image prop passed from parent
                            alt="Back Image"
                            style={{ width: '50%', height: '50%', objectFit: 'contain', borderRadius: '15px' }}
                        />
                        <strong className='text-2xl'>{title}</strong> {/* Use title prop here */}
                    </div>
                </div>
                <div className="front">
                    <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content">
                        <small className="badge">DESIGN</small>
                        <div className="description">
                            <div className="title">
                                <p className="title text-2xl">
                                    <strong>{title}</strong> {/* Display the title here */}
                                </p>

                                {/* Decorative Icon (Optional) */}
                                <svg
                                    fillRule="nonzero"
                                    height="20px"
                                    width="20px"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        style={{
                                            mixBlendMode: 'normal',
                                            textAnchor: 'none',
                                            fontSize: 'none',
                                            fontWeight: 'none',
                                            fontFamily: 'none',
                                            strokeDashoffset: '0',
                                            strokeDasharray: '',
                                            strokeMiterlimit: '10',
                                            strokeLinejoin: 'miter',
                                            strokeLinecap: 'butt',
                                            strokeWidth: '1',
                                            stroke: 'none',
                                            fillRule: 'nonzero',
                                            fill: '#20c997',
                                        }}
                                    >
                                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                                    </g>
                                </svg>
                            </div>

                            <p className="service-description">
                                {description} {/* Use the description prop here */}
                            </p>

                            {/* <p className="card-footer">
                                30 Mins &nbsp; | &nbsp; 1 Serving
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
