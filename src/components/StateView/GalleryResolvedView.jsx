import PropTypes from 'prop-types';
import { Gallery } from 'components/ImageGallery/ImageGallery.styled';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';

export const GalleryResolvedView = ({ cards, onBtnClick }) => {
  return (
    <>
      <Gallery>
        {cards.map(({ webformatURL, id, tags }) => {
          return <ImageGalleryItem tags={tags} key={id} url={webformatURL} />;
        })}
        
      </Gallery>
      <Button onClick={onBtnClick}>Load more</Button>
      ;
    </>
  );
};

GalleryResolvedView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
