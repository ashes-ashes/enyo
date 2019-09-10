import React from 'react';

import { Link } from 'react-router-dom';

// import { ReactComponent as PileOfArms } from '../../../app/assets/images/pileofarms.svg';

const Splash = (props) => (
    <div className="splash">
        <header className="splash-header">
            <a href="/" className="full-logo">
                
                <h1>enyo</h1>
            </a>
                {!!props.currentUser ? 
                <ul>
                    <li><button>open</button></li>
                    <li><button onClick={props.logout}>log out</button></li>
                </ul> :
                <ul>
                    <li><Link to="/login">log in</Link></li>
                    <li><Link to="/signup">sign up</Link></li>
                </ul> }
        </header>
        <div className="splash-text">
            <h2>speak now or forever hold your peace.</h2>
            <p>enyo is a chat client for the belligerent and strange.</p>
        </div>
        
    </div>
)

export default Splash;