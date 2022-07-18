import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Card(link, title, description, image, tags) {
  if (image){
    return (
      <Link href={link}><motion.div className="cardBox" key={title}>
        <Image src={image} layout='intrinsic' alt=""/>
        <h4 className="cardT">{title}</h4>
        {description}
      </motion.div></Link>
    )
  }
  else{
    return (
      <Link href={link}><motion.div className="cardBox" key={title}>
        <h4 className="cardT">{title}</h4>
        {description}
      </motion.div></Link>
    )
  }
}