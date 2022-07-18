import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '@/components/navbar'
import Recommendations from '@/components/Recommendations';
//import {useState} from 'react'
//import styles from "../styles/Articles.module.css";



export default function Articles(){
  //const [searchTerm, setSearchTerm] = useState('')
  return(
    <div className="App">
      <NavigationBar/>
      <div className='titleBox'>
        <h1>Articles</h1>
      </div>
      {/*<div className={styles.filterBox}>
        <input type='text' 
        placeholder='Search...' 
        onChange={event => {setSearchTerm(event.target.value)}}
        />
      </div>*/}
      <div className="grid-container">
        {Recommendations(['What Is Truth?', 'Is Reality An Illusion?', 'The Existence of God', 'The Cosmological Argument', 'Christianity', 'Time vs. Naturalism'])}
      </div>
    </div>
  );
}