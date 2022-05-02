import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Card } from 'react-bootstrap';
const Ang = ({ data }) => {
    console.log(data);
    return (
        <div>
            <Card className="singleCard  mx-auto mt-5 mb-5 shadow" style={{ width: '19rem' }}>
                <Card.Img variant="top" className="mx-auto  rounded shadow" style={{ height: "190px", width: "100%" }} src={data.img1} />
            </Card>

        </div>
    );
};

export default Ang;