import React from 'react';
import "./Footer.css"
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
const Footer = () => {
  return (
    <div>
      <footer class="site-footer mt-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6 className='text-dark'>About</h6>
              <p class="text-justify">We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6 className='text-dark'>Categories</h6>
              <h6 className='text-dark'>Quick Links</h6>
              <h6 className='text-dark'>Quick Links</h6>



            </div>

            <div class="col-xs-6 col-md-3">
              <h6 className='text-dark'>Quick Links</h6>
              <h6 className='text-dark'>Quick Links</h6>
              <h6 className='text-dark'>Quick Links</h6>

            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <a className='pe-3 fs-2' href="https://web.facebook.com/profile.php?id=100004528784980"><BsFacebook /></a>
              <a className='pe-3 fs-2' href="#"><AiFillYoutube /></a>
              <a className='pe-3 fs-2' href="#"><AiFillInstagram/></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;