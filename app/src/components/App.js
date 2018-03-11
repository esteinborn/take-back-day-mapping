import React, { Component } from 'react';
import '../styles/css/App.css';
import Map from './Map.jsx';
import EventsListContainer from '../containers/EventsListContainer';
import SearchSection from './SearchSection.jsx';
import RsvpModal from './RsvpModal.jsx';

import mockData from '../mockData';

const defaultState = {
  locations: [],
  selectedLocationId: null,
};

class App extends Component {
  state = defaultState;

  componentDidMount() {
    this.setState(state => ({
      locations: mockData,
    }));
  }

  handleLocationSelect = selectedId => {
    this.setState(state => ({
      selectedLocationId: selectedId,
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Map
            locations={this.state.locations}
            selectedMarker={this.state.selectedLocationId}
            onLocationSelect={this.handleLocationSelect}
          />
          <div>
            <SearchSection />
            <EventsListContainer events={mockData} onLocationSelect={this.handleLocationSelect} />
          </div>
        </div>
        <RsvpModal visible={this.props.selectedLocation} />
      </div>
    );
  }
}

export default App;
