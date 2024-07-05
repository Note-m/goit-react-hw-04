import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul>
        {/* {photos.map((photo, index) => (
          <li key={index}>
            <ImageCard photos={photo} />
          </li>
        ))} */}
        <li>
          <ImageCard photos={photos} />
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
