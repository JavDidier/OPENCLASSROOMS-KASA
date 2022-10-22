// IMPORT UTILS
import React from 'react';

// IMPORT STYLE
import '../Tag/Tag.css';


// COMPONENT TAG
const Tag = ({props}) => {
    return (
        <span className='tag-btn'>
            <p>{props}</p>
        </span>
    );
};

export default Tag;