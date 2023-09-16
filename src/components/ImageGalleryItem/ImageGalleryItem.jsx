export const ImageGalleryItem = ({ id, smImage, bgImage, modal }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={smImage}
        alt={id}
        onClick={() => modal(bgImage)}
      />
    </li>
  );
};
