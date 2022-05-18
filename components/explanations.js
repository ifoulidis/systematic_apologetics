import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';



export function cosmological_argument(){
    return(
        <div>
            <p>Cosmological argument.</p>
        </div>  
    )
}

export function infinite_regress(){
    return(
        <div>
            <p>The Universe is subject to time&ndash;it changes with time. However, there cannot have been an infinite amount of time in the past, as that does not make sense. If there were infinite weeks before this week, we would never have reached the current week. Therefore, the Universe has not always existed.</p>
            <p>The appropriate follow-up question is: how can time and the Universe have begun then? Both exist now, clearly, but they cannot have always existed.</p>
            <p>First, whatever created the Universe must be outside of what we think of as nature. Second, whatever created time is timeless. Third, this entity must be intelligent for many reaons.</p>
            <div>
                <p>Why the Creator must have free will.</p>
                <p>Why our reason must have a supernatural source</p>
            </div>
        </div>
    )
}

export function placeholder(){
    return(
        <div>
            <p>Problem.</p>
 
        </div>
    )
}

export function e3(){
    return(
        <div>
            <p>Explanation 3.</p>
 
        </div>
    )
}

export function atheismEx(){
    return(
        <div>
            <p>Atheism.</p>
            <Link href="/philosophies/atheism/"><a>Atheism</a></Link>
        </div>
    )
}

export function islamEx(){
    return(
        <div>
            <p>Islam.</p>
            <Link href="/philosophies/islam/"><a>Islam</a></Link>
        </div>
    )
}

export function ChristianityEx(){
    return(
        <div>
            <p>Christianity.</p>
        </div>
    )
}