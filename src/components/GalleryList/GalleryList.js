import React, { Component } from 'react'; // import react and react component
import GalleryItem from '../GalleryItem/GalleryItem' // import GalleryItem component

// declare GalleryList class, which extends Component
class GalleryList extends Component {

    // define render method
    render() {
        return (
            // div container for gallery
            <div className="gallery-container">
                {/* mapping gallery props, which is the array stored in state in App.js */}
                {this.props.gallery.map(photo => {
                    // retuning GalleryItem component
                    // sending props key, photo (object stored in gallery array), and componentDidMount function form App.js
                    return <GalleryItem key={photo.id} photoItem={photo} getGallery={this.props.getGallery}/>;
                })}
            </div>
        );
    }
}

// export GalleryList class
// imported at App.js
export default GalleryList;
