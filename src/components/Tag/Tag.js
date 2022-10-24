// IMPORT UTILS
import React from 'react';

// IMPORT STYLE
import '../Tag/Tag.css';


// COMPONENT TAG / -- > props
const Tag = ({tagTitle}) => {
    return (
        <span className='tag-btn'>
            <p>{tagTitle}</p>
        </span>
    );
};

export default Tag;