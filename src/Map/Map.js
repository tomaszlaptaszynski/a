import React, { Component } from 'react';

import scriptLoader from 'react-async-script-loader';

import './Map.css';

/* global google */

class Map extends Component {

    // TODO read
    // https://stackoverflow.com/questions/18333679/google-maps-open-info-window-after-click-on-a-link

    constructor(props) {
        super(props);
        this.state = {
            loadMap: true
        }
        this.markers = [];
    }

    componentWillReceiveProps({ isScriptLoadSucceed }) {
        if (isScriptLoadSucceed && this.state.loadMap) { // TODO enable else here

            this.map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: this.props.zoom,
                center: { lat: this.props.initialPosition.lat, lng: this.props.initialPosition.lng }
            });

            this.setState({
                loadMap: false
            })
            console.log('MAP RENDERED');

            this.props.items.map(item => {
                console.groupCollapsed();
                console.log('item', item);

                const marker = new google.maps.Marker({
                    position: { lat: item.coordsX, lng: item.coordsY },
                    // title: item.name,
                    map: this.map
                });

                const contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h6 id="firstHeading" class="firstHeading">' + item.name + '</h6>' +
                    '<br>' +
                    '<div id="bodyContent">' +
                    '<p>' + item.description + '</p>' +
                    '<p>' + item.coordsX + ' ' + item.coordsY + '</p>' +
                    '</div>' +
                    '</div>';
                const infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 300
                });

                marker.addListener('click', function () {
                    infowindow.open(this.map, marker);
                });
                google.maps.event.addListener(this.map, 'click', function () {
                    infowindow.close();
                });

                console.log('infowindow', infowindow);
                console.log('marker', marker);
                console.groupEnd();

                this.markers.push(marker);
            })
            console.log('markers', this.markers);
        }
        else {
            // alert("script not loaded")
        }
    }

    componentDidUpdate() {
        // jak state w App sie zmienil (po najechaniu na zdjecie - do Map idzie nowa wartosc this.props.itemSelected)
        console.log('componentDidUpdate()');
        if (this.props.itemSelected) {
            // wywołanie eventu na konkretnym markerze
            // TODO naprawa bo teraz pokazujemy marker o indeksie [this.props.itemSelected - 1],
            // powinno być wyciąganie z tablicy this.markers po konkretnym id
            google.maps.event.trigger(this.markers[this.props.itemSelected - 1], 'click')
        } else {
            // jak po zjechaniu wartosć this.props.itemSelected idzie na null
            // to wywołuję event kliku na mapie gdziekolwiek, który zamyka otwarte inwoWindow
            google.maps.event.trigger(this.map, 'click')
        }
    }

    render() {
        // console.log('render()', this.markers);
        const mapStyle = {
            width: '100%',
            height: '50em'
            // border: '1px solid black'
        };

        return (
            <div>
                {/* {this.props.itemSelected} */}
                <div id="map" style={mapStyle}></div>
            </div>
        );
    }
};

export default scriptLoader(
    ["https://maps.googleapis.com/maps/api/js?key=AIzaSyDEJZs-NuSBckeZOFNHSFTJN4em4tLpWG4"]
)(Map)
