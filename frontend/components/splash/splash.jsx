import React from 'react';

const Splash = (props) => (
    <div className="splash">
        <header className="splash-header">
            <a href="/" className="full-logo">
                
                <h1>enyo</h1>
            </a>
                {!!props.currentUser ? 
                <ul>
                    <li><button>open</button></li>
                </ul> :
                <ul>
                    <li><button>log in</button></li>
                    <li><button>sign up</button></li>
                </ul> }
        </header>
        <div class="splash-text">
            <h2>speak now or forever hold your peace.</h2>
            <p>enyo is a chat client for the belligerent and strange.</p>
        </div>
    </div>
)

export default Splash;