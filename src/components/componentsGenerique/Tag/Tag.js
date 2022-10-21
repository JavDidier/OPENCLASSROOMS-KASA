import React from 'react';

// STYLE
import '../Tag/Tag.css';

const Tag = ({props}) => {
    return (
        <span className='tag-btn'>
            <p>{props}</p>
        </span>
    );
};

export default Tag;