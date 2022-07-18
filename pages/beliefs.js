import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '@/components/navbar'
import Link from 'next/link'
import { motion } from 'framer-motion';
import Image from 'next/image';
import AtheistIcon from '../lib/icons/not-interested.png'
import BibleIcon from '../lib/icons/bible.png'
import NunIcon from '../lib/icons/nun.png'
import CrossroadsIcon from '../lib/icons/crossroads.png'
import GayIcon from '../lib/icons/gay.png'
import IslamIcon from '../lib/icons/islam.png'
import HinduIcon from '../lib/icons/hindu.png'
import ConfusedIcon from '../lib/icons/confused.png'
import SikhIcon from '../lib/icons/sikh.png'
import BuddhaIcon from '../lib/icons/buddha.png'
import SpiritualIcon from '../lib/icons/meditation.png'
//import {useState} from 'react'
//import styles from "../styles/Articles.module.css";

function ACard(link, title, image, tags) {
  if (image){
    return (
      <Link href={link}><motion.div className="beliefBox">
        <Image src={image} alt='Icon.' width={32} height={32} layout='fixed'/>
        <h4 className="cardT">{title}</h4>
      </motion.div></Link>
    )
  }
  else{
    return (
      <Link href={link}><motion.div className="beliefBox">
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
        ConfusedIcon, ('unsure', 'we can\'t know'))}
        {ACard('../belief_systems/agnosticismHome', 'Agnosticism', 
        CrossroadsIcon, ('unsure', 'we can\'t know'))}
        {ACard('../belief_systems/atheismHome', 'Atheism', AtheistIcon, ('no religion', 'irreligious', 'no God'))}
        {ACard('../belief_systems/buddhismHome', 'Buddhism', BuddhaIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/christianityHome', 'Christianity', BibleIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/catholicismHome', 'Catholicism', NunIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/hinduismHome', 'Hinduism', HinduIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/islamHome', 'Islam', IslamIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/progressiveHome', 'Progressive Christianity', GayIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/sikhismHome', 'Sikhism', SikhIcon, ('unsure', 'we can\'t know'))}
        {ACard('./belief_systems/spiritualismHome', 'Spiritualism', SpiritualIcon, ('spritual not religious', 'we can\'t know'))}
      </div>
    </div>
  );
}