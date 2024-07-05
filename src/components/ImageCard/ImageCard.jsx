const ImageCard = ({ photos }) => {
  return (
    <div>
      {photos.map((photo, index) => (
        <picture key={index}>
          <source srcSet={photo.small} />
          <source srcSet={photo.regular} />
          <img src={photo.small} alt="" />
        </picture>
      ))}
    </div>
  );
};

export default ImageCard;
