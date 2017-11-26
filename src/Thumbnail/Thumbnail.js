import React from 'react';

import './Thumbnail.css';

import ThumbnailImage from './ThumbnailImage/ThumbnailImage';

const Thumbnail = (props) => {
    return (
        <div className="col-md">
            <div className="card border-0" data-toggle="modal" data-target={"#myModal" + props.id}>
                <ThumbnailImage id={props.id} />
            </div>
        </div>
    )
};

export default Thumbnail;
