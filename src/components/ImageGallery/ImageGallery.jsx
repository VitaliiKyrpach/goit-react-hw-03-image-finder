import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <ul className="ImageGallery">
      {data.map(pic => (
        <ImageGalleryItem
          key={pic.id}
          smImage={pic.webformatURL}
          bgImage={pic.largeImageURL}
        />
      ))}
    </ul>
  );
};
