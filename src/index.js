import React from 'react';
import reactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null,errorMessage: '' };
    this.state = { long: null };
  };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        //we called setstate 
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      err => (
        this.setState({ errorMessage: err.message() })
      ),

    );

    return (
      <div>
        <div>Latitude: {this.state.lat} </div>
        <div>Longtitude: {this.state.long}</div>
        <b />
        <div>Error: {this.state.err}</div>
      </div>
    );

  };
};
reactDom.render(<App />,document.querySelector("#root"));