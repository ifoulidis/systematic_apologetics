import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '../../../components/navbar';

export default function ChristianityHome(){
    return(
        <div className="App">
            <NavigationBar/>
            <div className="MainContentContainer">
                <h4 className="articleTitle">Christianity</h4>
            </div>
        </div>
    );
}