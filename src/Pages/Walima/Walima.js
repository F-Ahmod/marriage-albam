import React, { useEffect } from 'react';
import WalimaImg from '../WalimaImg/WalimaImg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Walima = () => {
    const photo = [
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeRCj9Ec0hSsXiJBw1vT_ZOnYWEjr6ID-DA&usqp=CAU"

        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPlmyr3LKpfN4ldtGd1CPQt_tsP-28aCGOYA&usqp=CAU"
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZtPmYh4o0PvsR2NbrI-S0Vl50NeyoUZHFA&usqp=CAU"
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XlrTUZgyOlcbLZVBjG9IyndKGnoYFJGu7A&usqp=CAU"
        },
        {
            img1: "https://media.istockphoto.com/photos/portrait-of-a-indian-bride-in-studio-light-asian-bride-picture-id1147912347?b=1&k=20&m=1147912347&s=170667a&w=0&h=HSVuPXYKyBM05evO2_JQphNsmhv7k422IP2BpQRQaYA="
        },
        {
            img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZibw5FLUwB-Tinx6DrVzUasZwrq7RsWKpDdeo6ZMVHFhpmzzo4tMdBoqTwcSNENrC7U&usqp=CAU"
        },
    ]
    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:1000,
            easing: 'ease',
        })
      },[]);
    return (
        <div className='d-flex justify-content-center '>


           
           
            <div class="row row-cols-1 row-cols-md-3 g-2 " >
                {
                    photo.map(data => <WalimaImg data={data} ></WalimaImg>)

                }

            </div>
        </div>
    );
};

export default Walima;