import React, { useEffect } from 'react';
import "./Couple.css"
import img1 from "../images/bride.jpg"
import img2 from "../images/groom.jpg"
import 'aos/dist/aos.css';
import AOS from 'aos';
const Couple = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    }, []);

    return (
        <div className=' bg pb-5 pt-5'>
            <div className='d-flex justify-content-center row row-cols-1 row-cols-md-3 '>
            <div class="flip-card " >
                <div class="flip-card-inner me-3 ">
                    <div class="flip-card-front ">
                        <img className='shadow  rounded' src={img1} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div class="flip-card-back" >
                        <h4>Karina Jhon</h4>
                        <span>Architect & Engineer</span>
                        
                    </div>
                </div>
            </div>
            <div class="flip-card rounded">
                <div class="flip-card-inner ms-3">
                    <div class="flip-card-front ">
                        <img className='shadow  rounded' src={img2} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div class="flip-card-back">
                        <h4>Alexjender kho</h4>
                        <span>Doctor</span>
                        
                    </div>
                </div>
            </div>
            </div>
            <div className='text-center '>
              <h1 className='mt-5'> Are getting married!</h1>
              <span className=' '>December 15, 2021 — New York, Brooklyn</span>
          </div>
        </div>
       
    );
};

export default Couple;