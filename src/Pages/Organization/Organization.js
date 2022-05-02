import React from 'react';
import "./Organization.css";
import img1 from "../images/download (2).jpg"
import img2 from "../images/1-1.jpg"

const Organization = () => {
    return (
        <div>
            <div class="containerrrr bd">
                <div class="cardd">
                    <figure class="cardd__thumb">
                        <img width="100%" src={img1} alt="Picture by Kyle Cottrell" class="cardd__image" />
                        <figcaption class="cardd__caption">
                            <h2 class="cardd__title">CEREMONY</h2>
                            <p class="cardd__snippet">
                                Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                            {/* <a href="" class="cardd__button">Read more</a> */}
                        </figcaption>
                    </figure>
                </div>

                <div class="cardd">
                    <figure class="cardd__thumb">
                    <img width="100%" src={img1} alt="Picture by Kyle Cottrell" class="cardd__image" />
                        <figcaption class="cardd__caption">
                            <h2 class="cardd__title">LUNCH TIME</h2>
                            <p class="cardd__snippet">
                                Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                            {/* <a href="" class="cardd__button">Read more</a> */}
                        </figcaption>
                    </figure>
                </div>

                <div class="cardd">
                    <figure class="cardd__thumb">
                    <img width="100%" src={img1} alt="Picture by Kyle Cottrell" class="cardd__image" />
                        <figcaption class="cardd__caption">
                            <h2 class="cardd__title">PARTY</h2>
                            <p class="cardd__snippet">
                                Delta tristiu the jusone duise vitae diam neque nivami mis est augue artine aringilla the at elit finibus vivera.</p>
                            {/* <a href="" class="cardd__button">Read more</a> */}
                        </figcaption>
                    </figure>
                </div>
            </div>

            
        </div>
    );
};

export default Organization;