import React, { Component } from 'react'; // import react and react component
import axios from 'axios'; // import axios

// declare GalleryItem class, which extends Component
class GalleryItem extends Component {

    // add state to GalleryItem
    state = {
        isDescriptionDisplayed: false, // declare isDescriptionDisplayed boolean
    }

    // define handleClickImage method
    handleClickImage = () => {
        // set the isDescriptionDisplayed property in state to the opposite of its current value
        // if false, set to true
        // if true, set to false
        this.setState({
            isDescriptionDisplayed: !this.state.isDescriptionDisplayed,
        })
    }

    // define handleClickLike method
    handleClickLike = () => {
        // create axios 'PUT' promise
        axios({
            method: 'PUT',
            // the route to hit on the server
            //  use the props photoItem ID to identify unique path
            url: `/gallery/like/${this.props.photoItem.id}`,
        }).then(() => {
            // call componentDidMount, which is defined in App.js (passed as props into GalleryList, then passed as props to GalleryItem),
            // sets the state of gallery in App.js to updated array stored on the server
            this.props.getGallery();
        });
    }

    // define render method 
    render() {
        return (
            // div for each photo 
            <div className="photo-container" >
                <div className="photo-title">
                    {/* the title of each object stored in gallery array in state at App.js */}
                    {this.props.photoItem.title} 
                </div>

                {/* div to hold the image or the description based on the value of is isDescriptionDisplayed */}
                <div className="image-container" onClick={this.handleClickImage}>
                    {/* ternary operator,
                    if isDescriptionDisplayed is false, display image
                    if isDescriptionDisplayed is true, display description */}
                    {this.state.isDescriptionDisplayed ?
                        <div className="image-description">{this.props.photoItem.description}</div> :
                        <img className="image" src={this.props.photoItem.path} alt={this.props.photoItem.description} />}
                </div>

                {/* button for counting likes,
                onClick calls handleCLickLike */}
                <button className="like-button" onClick={this.handleClickLike}>Like it! {this.props.photoItem.likes}</button>

                {/* displays the value of likes of each object stored in gallery array in state at App.js 
                <div className="photo-likes">
                    {this.props.photoItem.likes}
                </div> */}
            </div>
        );
    }
}
// export GalleryItem class
// imported at GalleryList.js
export default GalleryItem;
