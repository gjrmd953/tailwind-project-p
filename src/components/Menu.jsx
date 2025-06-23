import React from 'react';
import Container from './Container';
import Logo from '../assets/logo.png';

const Menu = () => {
  return (
    <div className='bg-menuBg py-4'>
      <Container>
        <div className="flex items-center">
                    <div className="w-4/12">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="w-8/12">
          <ul className='flex justify-end'>
            <li><a className='px-4 text-white' href="#">Home</a></li>
            <li><a className='px-4 text-white' href="#">About</a></li>
            <li><a className='px-4 text-white' href="#">Services</a></li>
            <li><a className='px-4 text-white' href="#">Gallery</a></li>
            <li><a className='px-4 text-white' href="#">Gallery</a></li>
            <li>
                <a className='px-4 text-white' href="#">Blog</a></li>
            <li>
                <a className='px-4 border-2 border-white py-2 text-white' href="#">CONTACT</a>
            </li>
          </ul>
        </div>
        </div>
          
      </Container>
    </div>
  );
};

export default Menu;
