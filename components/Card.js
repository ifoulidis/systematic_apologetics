import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Card(link, title, description, image) {
    return (
    <Link href={link}><motion.button className="articleGrid">
      <Image src={image} layout='intrinsic'/>
      <h4 className="cardT">{title}</h4>
      {description}
    </motion.button></Link>
  )
}