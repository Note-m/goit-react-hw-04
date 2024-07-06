import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul>
      {photos.map((photo, index) => (
        <li key={index}>
          <ImageCard photo={photo} onImageClick={() => onImageClick(photo)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
