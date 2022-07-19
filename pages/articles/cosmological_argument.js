import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '@/components/navbar.js';

export default function CosmologicalArgument(){
  return(
    <div className="App">
      <NavigationBar/>
      <div className="MainContentContainer">
        <h1 className="articleTitle">The Cosmological Argument for God</h1>
        <br/><br/>
        <p>(1) Whatever begins to exist has a cause;</p>
        <p>(2) The Universe began to exist;</p>
        <p>(3) Therefore, the Universe has a cause.</p>
        <p>Since infinite regress in this fashion is impossible, something which predates the Universe did not begin to exist; it always existed. This would make no sense if time always existed, since the past cannot be infinite (see <Link href='./time_vs_naturalism'><a className='articleLinks'>Time vs. Naturalism</a></Link>). Therefore, this entity existed or exists in a timeless state.</p>
        <p>The above is a powerful argument, but modern people often still believe they have found a way of escaping it. You should believe Universe had a beginning if you're on this page, but you do not believe in God. That probably means (unless you have convinced yourself of one of the other kooky pseudoscientific explanations) that you believe the Universe came from nothing somehow.</p>
        <p>Can something come from nothing?</p>
        <p>The answer can be determined entirely by logic, and it is no. We can reasonably suppose that one thing could be endowed with the power to create another thing. However, nothing has no power whatever. It is not that it has very little power; it has none. What can arise when there is no force to make it and no power to give it?</p>
        <p>Perhaps you believe that chance is the answer, but an example should clear this up: if you have no connection to any betting agency and have placed no bets on horses, what chance do you have of winning millions of dollars on horse racing today anyway? None. Likewise, chance could not have made the Universe pop into existence from nothing. If there was nothing, there was no power to act, and therefore nothing for chance to describe. The point is that chance only describes the likelihood of one thing causing another; it is not a cause itself.</p>
        <p>Now, since there are things in existence rather than nothing, something has always existed. (Note than even a so-called illusion could not actually be merely an illusion if there were nothing else&ndash;it would be reality.) Again, there could never have been nothing, or nothing would have ever come to exist. This reasoning does not only apply to our universe, but to any number of universes and supernatural entities. Something must have never begun to exist yet does exist.</p>
        <p>Since this entity has always existed, it must be able to exist outside of time&ndash;but when things subject to time were created, time began. This occasion could aptly be called The Beginning. Further, this entity must have chosen to act, since if it did not have a rational nature, it could not have created something so consistent and logical and brilliant as the Universe; nor would there be any reason for our universe being sustained in existence and not colliding with countless other universes at any given moment. Indeed, the conclusion is that there is a God.</p>
        <p>If you would like to read another strong argument, please see <Link href="./argument_from_reason"><a className='articleLinks'>The Argument from Reason</a></Link>.</p>
        <p>If you would like to move on and consider how we might learn about God, see <Link href="./comparing_religions"><a className='articleLinks'>Comparing Religions</a></Link>.</p>
        <br/><br/>
      </div>
    </div>
  );
}
