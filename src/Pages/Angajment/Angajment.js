import React from 'react';
import Ang from '../Ang/Ang';
const Angajment = () => {
    const photo = [
        {
            img1: "https://media.istockphoto.com/photos/engagement-ring-with-flower-picture-id697353824?k=20&m=697353824&s=612x612&w=0&h=qdUeEad3gUZv7KuYYuFcWwBVms0aoU08sYHWHewm0Xo="
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0UWofwUb30Wyiqu3s5hTRJgITDoJFDc3fWM0rblFdlWSQi--3a35uIrdeuLYci3wLIE&usqp=CAU"
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3DY0x6ATV5mkuFAhFEbLpMM8fljUzUJSVJihVyWga0jOmfc3CsR1fNn1lGcI9tQW5MI&usqp=CAU"
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbCZG0alR0q-6wu0JNQx02KVzfUogmSZNxCqyvNA8K1FtgszeeKAnEhG5O3EdiBP361SM&usqp=CAU"
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWK3JiqbZaCH8sA5L92F9v6dknQfnnLoa4Q&usqp=CAU"
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMTxMZ0SZmzBUpbLLM3crEi4HfgFDs6E94g&usqp=CAU"
        },
        
    ]
    return (
        <div className='d-flex justify-content-center '>   
            <div class="row row-cols-1 row-cols-md-3 ">
                {
                    photo.map(data => <Ang data={data}></Ang>)

                }

            </div>
        </div>
    );
};

export default Angajment;