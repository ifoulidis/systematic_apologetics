import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Card(link, title, description, image, tags) {
  if (image){
    return (
      <Link href={link}><motion.button className="articleGrid">
        <Image src={image} layout='intrinsic'/>
        <h4 className="cardT">{title}</h4>
        {description}
      </motion.button></Link>
    )
  }
  else{
    return (
      <Link href={link}><motion.button className="articleGrid">
        <h4 className="cardT">{title}</h4>
        {description}
      </motion.button></Link>
    )
  }
}