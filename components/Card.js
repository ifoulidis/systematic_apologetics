import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Card(link, title, description, image, tags) {
  if (image){
    return (
      <Link key={title} className="cardBoxLink" href={link}><div className="cardBox">
        <Image src={image} layout='intrinsic' alt=""/>
        <h4 className="cardT">{title}</h4>
        {description}
      </div></Link>
    )
  }
  else{
    return (
      <Link key={title} className="cardBoxLink" href={link}><div className="cardBox">
        <h4 className="cardT">{title}</h4>
        {description}
      </div></Link>
    )
  }
}