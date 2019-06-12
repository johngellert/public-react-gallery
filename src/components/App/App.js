import React, { Component } from 'react'; // import react and react component
import axios from 'axios'; // import axios 
import './App.css'; // import stylesheet
import Header from '../Header/Header'; // import and declare Header component
import GalleryList from '../GalleryList/GalleryList'; // import and declare GalleryList component

// declare App class, which extends Component
class App extends Component {

  // add state to App
  state = {
    gallery: [], // add gallery property set to empty array
  }

  // call component did mount method
  // send get request to server
  // response is an array of objects
  componentDidMount = () => {
    this.getGallery();
  }


  getGallery = () => {
      // axios promise
      axios({
        method: 'GET',
        url: '/gallery',
      }).then((response) => {
        // set state property gallery to the array of objects stored in the server
        this.setState({
          gallery: response.data, 
        });
      });
  }

  // define render method
  render() {
    
    
    return (
      <div className="App">
        {/* Header component with no props */}
        <Header /> 

        {/* Gallery component with gallery prop and componentDidMount prop  */}
        <GalleryList
          gallery={this.state.gallery}
          getGallery={this.getGallery}
        />
      </div>
    );
  }
}

// export the App class
// imported at index.js
export default App;


// BASE MODE COMPLETE