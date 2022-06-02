import Link from 'next/link';
import React from 'react';
import {NavigationBar} from '../../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';

export default function AtheismHome(){
    return(
        <div className="App">
            <NavigationBar/>
            <div className="MainContentContainer">
                <h1 className="articleTitle">Atheism</h1>
                <br/><br/>
                <p>Atheism is the belief that there is no supreme God, and many atheists also believe that there is
                    nothing supernatural at all. If you believe that there may be a God, but you are not sure or think
                    that nobody knows, you should visit the <Link href="./agnosticism/">agnosticism page</Link>.
                </p>
                <p>
                    Atheism is an untrue belief. Reason certainly points to the existence
                    of an uncreated God, and the proofs range from extremely simple to complex. But of course, 
                    convincing anyone that any of their firmly held beliefs
                    is wrong is normally challenging. Often, beliefs are tangled up with emotions, memories, hopes, 
                    fears, etc.
                    Sometimes, we even vow to ourselves not to even entertain certain possibilities because of bitterness.
                    If you believe yourself prepared to consider thoughtfully whether you are wrong, then we can begin.
                    If not, I suggest you talk your issue(s) through with someone sensible, and preferrably someone who
                    is not an atheist. You might also be interested in content by former atheists. For example, 
                    see David Wood's testimony below.
                </p>
                <br/>
                <div class="iframeVideo">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DakEcY7Z5GU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br/>
                <p>
                    The first and easiest way to disprove atheism is to present begin with the fact that things exist and 
                    continue from there. Since entities bound by time (ourselves and matter) exist, they must have begun
                    at some point. An infinite regress is impossible: If there were infinite weeks before this week, we would 
                    never have reached the current week. Therefore, ourselves and matter were created. Yet whatever created the 
                    time-bound must itself be timeless. Therefore, there is at least one timeless thing outside of nature.
                </p>
                <p>
                    Next, we can easily establish that a being which exists outside of time could not be <em>made</em> to do
                    anything. Irrational forces must be triggered, but without time, there can be no trigger. I certainly 
                    admit that how rational beings act is quite beyond me, but the fact remains that they do, and they 
                    do so freely. Therefore, you must see that the timeless being outside of nature which can make choices
                    and is rational is certainly God. (Please see <Link href="./agnosticism/isRealityAnIllusion">Ridiculous Ideas about Reality</Link>)
                </p>
                <p>
                    To put it in the simplest terms I can: Something had to start everything, and that something had make decisions
                    on its own, since there was nothing else to force it to do anything. Therefore, that which made all things
                    is supremely intelligent and powerful; His works are all around us; and we ought to call him God.
                </p>
                <br/><br/>
            </div>
        </div>
    );
}