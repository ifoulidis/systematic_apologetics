import Link from 'next/link';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from '@/components/navbar.js';

export default function ComparingReligions(){
    return(
        <div className="App">
            <NavigationBar/>
            <div className="MainContentContainer">
                <div className="articleTitle"><h1>Comparing Religions</h1></div>
                <br/><br/>
                <p>We must of course acknowledge that it is impossible that all religions are somehow simultaneously correct, as some suggest. That is logically nonsensical, since they all outright contradict each other. Might they all have gotten some things right but have gotten much wrong? Perhaps, but a clever person really ought to examine each religion to determine this. The logical place for us to start is Christianity, is it not? Firstly, it is the religion that has had the greatest impact on the world, and for Western readers, on your lives. Secondly, it is not philosophically untenable, whereas many religions do not actually explain anything self-existent, but rather “gods” who themselves were created. Thirdly, the evidence for its chief historical claim—the resurrection of Jesus—is extremely strong.</p>
                <p>If you would first like to consider other options though, we can do this surprisingly quickly, at least, if we are focusing on what religions might be entirely true. It can be done by using the following checklist:</p>
                <h5>What any sound religion must affirm</h5>
                <p>There is an uncreated God</p>
                <br/><br/>
            </div>
        </div>
    );
}