import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Truth from '../public/truth.jpg';
import Darwin from '../public/darwin.jpg';
import IslamImage from '../public/islam_symbol.png';
import EarthImage from '../public/Earth.jpg';
import SpaceImage from '../public/Space1.jpg';
import MatrixImage from '../public/matrix.jpg';
import HourGlass from '../public/hourglass1.jpg';

export default function Card(link, title, description, image) {
    return (
    <Link href={link}><motion.button className="articleGrid">
      <Image src={image} layout='intrinsic'/>
      <h4 className="cardT">{title}</h4>
      {description}
    </motion.button></Link>
  )
}