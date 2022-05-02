import React, { useEffect } from 'react';
import "animate.css/animate.min.css";
import { Card } from 'react-bootstrap';

const WalimaImg = ({ data }) => {
    const { img1 } = data
    

    return (
        <div>
            <div >
                    <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
                        <Card.Img variant="top" className="mx-auto  rounded shadow" style={{ height: "190px", width: "100%" }} src={img1} width="300" />
                    </Card>

                </div>
        </div>
    );
};

export default WalimaImg;