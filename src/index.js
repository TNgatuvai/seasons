import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        
        // THIS IS THE ONLY TIME we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        // call to get user's location 
    window.navigator.geolocation.getCurrentPosition( 
        position => {
            this.setState({ lat: position.coords.latitude });
        },
        err => {
            this.setState({ errorMessage: err.message });
        }
       );
    }


    // Conditional rendering 
    render() {
       if (this.state.errorMessage && !this.state.lat) {
           return <div>Error: {this.state.errorMessage}</div>
       }

       if (!this.state.errorMessage && this.state.lat) {
           return <div>Latitude: {this.state.lat}</div>;
       }

       return <div>Loading!</div>;

    }
}


ReactDOM.render (<App />, document.querySelector("#root"));