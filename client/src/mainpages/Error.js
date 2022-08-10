import React from 'react';
import Default from '../Components/Default';
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <Default>
            <div className="parentError">
                <div className="banner">
                    <h1 style={{color: 'white'}}>404</h1>
                    <div />
                    <p>Page not found</p>
                    <Link to="/" className="btn-primary">return home</Link>
                </div>
            </div>
            </Default>
        </div>
    )
}