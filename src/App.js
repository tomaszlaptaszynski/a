import React, { Component } from 'react';

import Thumbnail from './Thumbnail/Thumbnail';
import Map from './Map/Map';


// import data from './data.json'; // TODO switch JSONs
import data from './data.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemSelected: null
    }
  };

  onThumbnailOver = (value) => (e) => {
    this.setState({
      itemSelected: value
    });
  };

  items = data;

  render() {

    return (
      <div className="App">
        <div className="row">
          <div className="col-6 row wrap">
            {this.items.map(item => <Thumbnail
              key={item.id}
              id={item.id}
              onThumbnailOver={this.onThumbnailOver}
            />)}
          </div>
          <div className="col-6">
            <Map
              zoom={7}
              initialPosition={{ lat: 52.05417, lng: 19.48013 }}
              items={this.items}
              itemSelected={this.state.itemSelected}
            />
          </div>
        </div>
      </div>
    );

  }
}

export default App;
