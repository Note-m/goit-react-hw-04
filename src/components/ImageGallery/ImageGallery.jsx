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
          <ImageCard onSearch={photos} />
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
