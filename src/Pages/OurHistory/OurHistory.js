import React from 'react';
import img from "../images/3-1.jpg";
import "./OurHistory.css"

const OurHistory = () => {
    return (
        <div>
            <div className='row' id='containerr' >
                <div class="product-details col-12 col-md-6 p-3">
                    <h4 className=''><i>Our love</i></h4>
                    <p className=''>OUR STORY</p>
                    <span className=''>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. Dunya erat volutpat edat themo the druanye semper.</span>
                </div>

                <div class="product-image  col-12 col-md-6">
                    <img src={img} />
                    <div class="info ps-3">
                        <h3> Our Love</h3>
                        <span>We will love each other untill last brathing</span>
                        <span>we think love is life</span>
                        <span>love is peace of mind</span>
                   </div>
                </div>
            </div>
     </div>

    );
};

export default OurHistory;