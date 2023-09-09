import PropTypes from 'prop-types';
import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export const GalleryResolvedView = ({ cards }) => {
  return <Gallery>
    {cards.map(({webformatURL, id, tags }) => {
      return <ImageGalleryItem tags={tags} key={id} url={webformatURL}/>
    })}
  </Gallery>;
};

GalleryResolvedView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};