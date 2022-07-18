import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar'

export default function PhilosophiesHome(){
    return(
        <div className="App">
            <NavigationBar/>
            {/*Add a search feature so that people can find an argument they remember a few words from.*/}
            {/*Perhaps several articles should be displayed under the category 'where to start'. These would be the cosmological argument, etc.*/}
            {/*The page should have some sort of nice styling. Pictures would probably be a good idea. May need to buy some stock photos.*/}
        </div>
    );
}