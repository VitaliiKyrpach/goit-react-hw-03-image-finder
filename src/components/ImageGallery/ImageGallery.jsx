import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ photos, showModal }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(pic => (
        <ImageGalleryItem
          key={pic.id}
          id={pic.id}
          smImage={pic.webformatURL}
          bgImage={pic.largeImageURL}
          modal={showModal}
        />
      ))}
    </ul>
  );
};
