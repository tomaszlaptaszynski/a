import React from 'react';

import './ThumbnailImage.css';

const Thumbnail = (props) => {
    const url = "./images/" + props.id + ".jpg";
    return (
        <img src={url} className="img-thumbnail rounded-0" />
    )
};

export default Thumbnail;
