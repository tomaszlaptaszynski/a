import React, { Component } from 'react';

import Thumbnail from './Thumbnail/Thumbnail';
import Modal from './Modal/Modal';
import MapContainer from './MapContainer/MapContainer';

import './App.css';

class App extends Component {

  items =
    [
      {
        id: 1,
        visible: true, // TODO
        title: "01",
        description: "Pyramids",
        coordsX: 51.6954650,
        coordsY: 19.4091357
      },
      {
        id: 2,
        visible: true,
        title: "02",
        description: "Horse",
        coordsX: 51.6954650,
        coordsY: 19.4091357
      },
      {
        id: 3,
        visible: true,
        title: "03",
        description: "Niemodlin",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 4,
        title: "04",
        description: "Teofilow",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 5,
        title: "05",
        description: "Lego",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },
      {
        id: 6,
        title: "06",
        description: "Konskie",
        coordsX: -25.363,
        coordsY: 131.044
      },

    ];

   


  render() {

    return (
      <div className="App">
      <div className="row">
        <div className="col-6 row wrap">
          {this.items.map(item => <Thumbnail key={item.id} id={item.id} />)}
        </div>
        <div>
          {this.items.map(item => <Modal key={item.id} id={item.id} title={item.title} description={item.description} coordsX={item.coordsX} coordsY={item.coordsY} />)}
        </div>
        <div className="col-6">
          <MapContainer coordsX="51.6954650" coordsY="19.4091357" />
        </div>
        </div>
      </div>
    );

  }
}

export default App;
