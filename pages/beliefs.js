import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '@/components/navbar'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image';
//import {useState} from 'react'
//import styles from "../styles/Articles.module.css";

function ACard(link, title, image, tags) {
  if (image){
    return (
      <Link href={link}><motion.div className="cardBox">
        <Image src={image} layout='intrinsic'/>
        <h4 className="cardT">{title}</h4>
      </motion.div></Link>
    )
  }
  else{
    return (
      <Link href={link}><motion.div className="cardBox">
        <h4 className="cardT">{title}</h4>
      </motion.div></Link>
    )
  }
}


export default function Beliefs(){
  //const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
      <NavigationBar/>
      <div className='titleBox'>
        <h1>Investigate a Belief</h1>
      </div>
      {/*<div className={styles.filterBox}>
        <input type='text' 
        placeholder='Search...' 
        onChange={event => {setSearchTerm(event.target.value)}}
        />
      </div>*/}
      <div className="grid-container">
        {ACard('./articles/whatIsTruth', 'I Don\'t Know', 
        undefined, ('unsure', 'we can\'t know'))}
        {ACard('../philosophies/agnosticismHome', 'Agnosticism', 
        undefined, ('unsure', 'we can\'t know'))}
        {ACard('../philosophies/atheismHome', 'Atheism', undefined, ('no religion', 'irreligious', 'no God'))}
        {ACard('../philosophies/buddhismHome', 'Buddhism', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/christianityHome', 'Christianity', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/catholicismHome', 'Catholicism', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/hinduismHome', 'Hinduism', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/islamHome', 'Islam', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/progressiveHome', 'Progressive Christianity', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/sikhismHome', 'Sikhism', undefined, ('unsure', 'we can\'t know'))}
        {ACard('./philosophies/spiritualismHome', 'Spiritualism', undefined, ('spritual not religious', 'we can\'t know'))}
      </div>
    </div>
  );
}