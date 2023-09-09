

import { Gallery } from 'components/ImageGallery/ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';

export const GalleryPendingView = ({ cards }) => {
  return (
    <>
      <Gallery>
        {cards.map(({ webformatURL, id, tags }) => {
          return <ImageGalleryItem tags={tags} key={id} url={webformatURL} />;
        })}
      </Gallery>
      <Loader/>
    </>
  );
};
