import React from 'react';
import "./Time.css";
import img from "../images/1-1.jpg"

const Time = () => {
    return (
        <div className=" ">
            <main className="main time ">

                <section className="ccard-area">
                    <section className="ccard-section">
                        <div className="ccard">
                            <div className="flip-ccard">
                                <div className="flip-ccard__container">
                                    <div className="ccard-front">
                                        <div className="ccard-front__tp ccard-front__tp--city">
                                            <h2 className="ccard-front__heading">
                                                Wedding Ceromony
                                            </h2>
                                            <p className="ccard-front__text-price">
                                                At bronx New York
                                            </p>
                                        </div>
                                        <div className="ccard-front__bt">
                                            
                                        </div>
                                    </div>
                                    <div className="ccard-back">
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="inside-page">
                                <div className="inside-page__container">
                                    <h3 className="inside-page__heading inside-page__heading--city">
                                        Date 22/12/2022
                                    </h3>
                                    <p className="inside-page__text">
                                        As cities never sleep, there are always something going on, no matter what time!
                                    </p>
                                    {/* <a href="#" className="inside-page__btn inside-page__btn--city">View deals</a> */}
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="ccard-section">
                        <div className="ccard">
                            <div className="flip-ccard">
                                <div className="flip-ccard__container">
                                    <div className="ccard-front">
                                        <div className="ccard-front__tp ccard-front__tp--ski">

                                            <h2 className="ccard-front__heading">
                                                Wedding Party
                                            </h2>
                                            <p className="ccard-front__text-price">
                                                At Hotel Grant,New York
                                            </p>
                                        </div>

                                        
                                    </div>

                                    
                                </div>
                            </div>

                            <div className="inside-page">
                                <div className="inside-page__container">
                                    <h3 className="inside-page__heading inside-page__heading--ski">
                                        Requst to attend
                                    </h3>
                                    <p className="inside-page__text">
                                        Love snow? Why not take up exciting ski-in sessions and hit the slope?
                                    </p>
                                    {/* <a href="#" className="inside-page__btn inside-page__btn--ski">View deals</a> */}
                                </div>
                            </div>
                        </div>
                    </section>


                 
                </section>
               
            </main>

        </div>
    );
};

export default Time;