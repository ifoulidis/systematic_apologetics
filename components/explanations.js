import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import { useRouter } from 'next/router'
import GetResponse from './logicmap';


export function cosmological_argument(){
    return(
        <div>
            <h1 className="eTitle">The Universe Must Have Had a Cause</h1>
            <br/>
            <p>(1) Whatever begins to exist has a cause;</p>
            <p>(2) The Universe began to exist;</p>
            <p>(3) Therefore, the Universe has a cause.</p>
            <p>Since infinite regress in this fashion is impossible, something did not begin to exist which predates the Universe.</p>
            <p>The above is a powerful argument, but modern people often still believe they have found a way of escaping it. You should believe Universe had a beginning if you're on this page, but you do not believe in God. That probably means (unless you have convinced yourself of one of the other kooky pseudoscientific explanations) that you believe the Universe came from nothing somehow.</p>
            <p>Can something come from nothing?</p>
            <p>The answer can be determined entirely by logic, and it is no. We can reasonably suppose that one thing could be endowed with the power to create another thing. However, nothing has no power whatever. It is not that it has very little power; it has none. What can arise when there is no force to make it and no power to give it?</p>
            <p>Perhaps you believe that chance is the answer, but an example should clear this up: if you have no connection to any betting agency and have placed no bets on horses, what chance do you have of winning millions of dollars on horse racing today anyway? None. Likewise, chance could not have made the Universe pop into existence from nothing. If there was nothing, there was no power to act, and therefore nothing for chance to describe. The point is that chance only describes the likelihood of one thing causing another; it is not a cause itself.</p>
            <p>Now, since there are things in existence rather than nothing, something has always existed. (Note than even a so-called illusion could not actually be merely an illusion if there were nothing else&ndash;it would be reality.) Again, there could never have been nothing, or nothing would have ever come to exist. This reasoning does not only apply to our universe, but to any number of universes and supernatural entities. Something must have never begun to exist yet does exist.</p>
            <p>Since this entity has always existed, it must be able to exist outside of time&ndash;but when things subject to time were created, time began. This occasion could aptly be called The Beginning. Further, this entity must have chosen to act, since if it did not have a rational nature, it could not have created something so consistent and logical and brilliant as the Universe; nor would there be any reason for our universe being sustained in existence and not colliding with countless other universes at any given moment. Indeed, the conclusion is that there is a God.</p>
            <br/>
        </div>  
    )
}

export function infinite_regress(){
    return(
        <div>
            <h1 className="eTitle">The Past Cannot Have Been Infinite</h1>
            <br/>
            <p>The Universe is ruled by time in a sense&ndash;it changes with time. Because of this, the Universe cannot have always existed. There cannot have been an infinite amount of time in the past, as that does not make sense. If there were infinite moments before this moment, we would never have reached the current one. Hence, nothing bound by time has not always existed.</p>
            <p>The appropriate follow-up question is: how can time and the Universe have begun then? Both exist now, clearly, but they cannot have always existed.</p>
            <p>Whatever created time must be able to exist in its absence. If this is news to you, alarm bells should be rining in your head: "Was I wrong about everything?" The answer is probably yes, but I promise you that this means better news than you could ever hope for.</p>
            <p>Right now, all I have proved is that an entity which is outside of time and space exists. You may have already thought ahead and drawn other conclusions from that information. If you have, I suggest <Link href="/philosophies/christianity/comparing_religions"><a>Comparing Religions</a></Link>. If you have not, allow me to recommend the following.</p>
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
            <p>Yet to be filled out.</p>
 
        </div>
    )
}

export function e3(){
    return(
        <div>
            <p>Yet to be filled out.</p>
 
        </div>
    )
}

export function atheismEx(){
    return(
        <div>
            <h1 className="eTitle">Atheism Does Not Make Sense</h1>
            <br/>
            <p>No matter how many scientsts profess to be atheists, no matter how many people claim that the idea of a God is baseless, and no matter how many times the word evidence is flung around: atheism still will not make sense.</p>
            <p>There are reasons that show atheism to be impossible, and reasons that show it to be completely unreasonable.</p>
            <p>First, there is the problem of infinite regress being impossible. See ... </p>
            <p>Second, there is the </p>
            <Link href="/philosophies/atheism/"><a></a></Link>
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