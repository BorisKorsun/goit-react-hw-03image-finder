import React, { Component } from 'react';

import API from 'service';

import {
  GalleryPendingView,
  GalleryResolvedView,
  GalleryRejectedView,
} from 'components/StateView';

const service = new API();

const STATE_MACHINE = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

class ImageGallery extends Component {
  state = {
    gallery: [],
    error: null,
    status: STATE_MACHINE.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const oldQuery = prevProps.query;

    if (query !== oldQuery) {
      this.setState({ status: STATE_MACHINE.PENDING });
      service
        .getQueryImages(query)
        .then(({ data }) =>
          this.setState({ gallery: data.hits, status: STATE_MACHINE.RESOLVED })
        )
        .catch(error =>
          this.setState({ error, status: STATE_MACHINE.REJECTED })
        );
    }
  }

  render() {
    const { status, gallery } = this.state;

    if (status === STATE_MACHINE.PENDING) {
      return <GalleryPendingView />;
    }

    if (status === STATE_MACHINE.REJECTED) {
      return <GalleryRejectedView />;
    }

    if (status === STATE_MACHINE.RESOLVED) {
      return <GalleryResolvedView cards={gallery} />;
    }
  }
}

export default ImageGallery;
