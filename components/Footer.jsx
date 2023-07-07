import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 AM All rights reserverd </p>
      <p className='icons'>
      <Link href="https://www.instagram.com/animestore_manipur" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
        </Link>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer