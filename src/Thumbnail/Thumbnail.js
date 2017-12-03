import React, { Component } from 'react';

import './Thumbnail.css';

export class Thumbnail extends Component {

    render() {

        const url = "./images/" + this.props.id + ".jpg"; // TODO change to imageName or NOT

        return (
            <div className="col-md-4 col-lg-3 no-stretch">
                <div className="card border-0">
                    <img src={url}
                        className="img-thumbnail rounded-0"
                        alt=""
                        onMouseOver={this.props.onThumbnailOver(this.props.id)}
                        onMouseOut={this.props.onThumbnailOver(null)}
                    />
                </div>
            </div>
        )
    }
};

export default Thumbnail;
