import React, { Component } from 'react';

import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  state = {
    gallery: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const oldQuery = prevProps.query

    if (query !== oldQuery) {
        console.log("query changed")
    }
  }

  render() {
    return <Gallery></Gallery>;
  }
}

export default ImageGallery;
