export const ImageGalleryItem = ({ smImage, bgImage }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={smImage} alt="" />
    </li>
  );
};
