import React from 'react';
import WeddingsImg from '../WeddingsImg/WeddingsImg';
const Wedding = () => {
    const imgs = [

        {
            img: "https://www.dipakstudios.com/gallery/14594121173.jpeg"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2-PjkSZs1j7rMyRJrHLa9-q38dvK18hSNqcXQin9P9BBxlgKl159d8pUIA18Mj-jxl0&usqp=CAU"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6z8RIRCK3PAUpr58RWfCs5dD1eolCmW3rKdt5gqupnC4aqhcqqaSz_ST_DGYEtIGK420&usqp=CAU"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpZEfCMb8dA8I6wA-L-wEQeOHa_3rvV1oreOl8NGP1qz62K50wdNo8cWeOdDz34vRd78&usqp=CAU"
        },
        {
            img: "https://i.ibb.co/JysFWvZ/w1.jpg"
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN2nZwIoz-vTvAbWenOQeYbKClOKm3exzWjWwPufD0ox4B7pgnHuEZz8Xh489Zf8vAJk&usqp=CAU"
        },
    ]
    return (
        <div className='d-flex justify-content-center '>


           
            <div class="row row-cols-1 row-cols-md-3 g-2 mt5">
                {
                    imgs.map(data => <WeddingsImg da={data}></WeddingsImg>)

                }
                

            </div>
        </div>
    );
};

export default Wedding;