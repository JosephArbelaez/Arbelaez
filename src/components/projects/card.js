import React from 'react';

const Card = ({name, thumbnail, image ,icon1, icon2, icon3, icon4, icon5, icon6, link, p1, p2, p3, onThumbnailClick}) => {
    /* 
        Max 30 characters for the text portion.
        6 icons
    */

    return (
                <div className = "card">
                    <h2>{name}</h2>
                    <div className="thumbnail">
                        <img src={thumbnail} onClick={()=> onThumbnailClick(image)}></img>
                    </div>
                    <div>
                        <img src={icon1}></img>
                        <img src={icon2}></img>
                        <img src={icon3}></img>
                        <img src={icon4}></img>
                        <img src={icon5}></img>
                        <img src={icon6} ></img>
                            <p>{p1}</p>
                            <p>{p2}</p>
                            <p>{p3}</p> 
                        <a href={link} className="link"> 
                            <button className="projectButton"> 
                                <p className="projectButtonText">GitHub</p> 
                                <img src='https://lh3.googleusercontent.com/7jbpdZuWJh-9XNyG4VKzQ2Ewr9xWilKyQ-J9w3WUMiFVk_PKYoPVMKAczaylqT74kGjOjqkK50Ig_dmjxqZtccO-lenPg3gDs3HDwOsVS9raz08O2zrrThVd20MxogqJi8og2DTrXQc5wqD7SSiuP8STYqjRrCqaRsEvjRn2s-gm6BgCWhayUhyj6hWZWZDR9XWIH-3w4HhkaaOrYFSIfpv9z8lgRhrP_KkmJ3wiZI6PWbcJovLbx8FqAE3bnKOAkb0me7mAnSgmlVG1kL23it0sbLBk1EMeu6HcxaVrWi3b1fCb5WJd868WkY1Fl8BfRU0kg1nSjOqwvCAtmaCA30udEetg-W2rrWuUgFiXRd6vjd8fw_1ELbrJ-O735tC7Q2al6Uawz1CLL0IFAKZREuvx-oGTPbVMGlWmmzqHtuh9CwKleYrJYYHNbWvFops1VG3QUOvdcCfudDRUB0loxoZnjRCkdT5Jed_a4wSR2vwPmmaa0VdmKycFz6WfFgremKOOpmD8F1PBh2pfJRGOtraMQ_BOWenqLMcg_qgbxbw-fNfNRp1YP2RUWaGZCtEJ0PMhMfl7gzTUtX-2u3fWldO4RxFEO-XpII9RNxuRSSOscNXTEGr8dZSb6Hv5rf_9sHAwUSdya2tnb2uKiDkGt-Jbx125i3Y=s48-no'></img>
                            </button>
                        </a> 
                    </div>
                </div>
    );
}

export default Card;