import React from 'react';

import './Modal.css';

import ThumbnailImage from '../Thumbnail/ThumbnailImage/ThumbnailImage';

import MapContainer from '../MapContainer/MapContainer';

const Modal = (props) => {
    return (
        <div className="modal fade" id={"myModal" + props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header rounded-0">
                        <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="card border-0">
                            <ThumbnailImage id={props.id} />
                        </div>
                        <p>{props.description}</p>

                        <div className="row">
                            <MapContainer id={props.id} coordsX={props.coordsX} coordsY={props.coordsY} />
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;
