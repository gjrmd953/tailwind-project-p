import React from 'react'
import Container from './Container'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram  } from "react-icons/fa";









const Header = () => {
  return (
    <header className="bg-headerColor py-3">
       <Container>
            <div className="flex items-center">
                <div className="w-3/12">
                <div className="flex items-center gap-3">
                    <MdOutlineEmail className='text-white'/>
                    <p className='text-white font-pops text-[12px] font-normal'>mail@yourcompany.com</p>
                </div>
                </div>
                <div className="w-3/12">
                  <div className="flex items-center gap-3">
                    <IoCallOutline className='text-white'/>
                    <p className='text-white font-pops text-[12px] font-normal'>+896 120 5889 (Toll free)</p>
                </div>
                </div>
                <div className="w-6/12">
                <div className="flex justify-end gap-5">
                     <FaFacebookF className='text-white'/>
                     <FaTwitter className='text-white'/>
                     <FaLinkedinIn className='text-white'/>
                     <FaInstagram className='text-white'/>
                </div>
                </div>
            </div>
       </Container>
    </header>
  )
}

export default Header