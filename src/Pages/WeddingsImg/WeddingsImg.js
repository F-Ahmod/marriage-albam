import React from 'react';
import { Card } from 'react-bootstrap';
import "./WeddingImg.css"


const WeddingsImg = ({ da }) => {
    const { img } = da;
    return (
        <div>
            <Card className=" mx-auto mt-5 mb-5 shadow-lg rounded" style={{ width: '19rem' }}>
                <Card.Img  id="imgClass" variant="top" className="mx-auto " src={img}  />
            </Card>
        </div>
    );
};

export default WeddingsImg;