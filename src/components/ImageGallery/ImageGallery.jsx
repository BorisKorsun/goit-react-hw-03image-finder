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
    page: 1,
    error: null,
    status: STATE_MACHINE.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const oldPage = prevState.page;
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

    if (page !== oldPage) {
      this.setState({ status: STATE_MACHINE.PENDING });
      service
        .getPageImage(page)
        .then(({ data }) =>
          this.setState({
            gallery: data.hits,
            status: STATE_MACHINE.RESOLVED,
          }).catch(error => this.setState({error, status: STATE_MACHINE.REJECTED}))
        );
    }
  }

  onLoadMoreClick = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    const { status, gallery } = this.state;

    if (status === STATE_MACHINE.PENDING) {
      return <GalleryPendingView />;
    }

    if (status === STATE_MACHINE.REJECTED) {
      return <GalleryRejectedView />;
    }

    if (status === STATE_MACHINE.RESOLVED) {
      return (
        <GalleryResolvedView
          onBtnClick={this.onLoadMoreClick}
          cards={gallery}
        />
      );
    }
  }
}

export default ImageGallery;
