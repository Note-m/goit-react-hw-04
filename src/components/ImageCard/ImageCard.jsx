const ImageCard = ({ onSearch }) => {
  return (
    <div>
      {onSearch.map((photo, index) => (
        <picture key={index}>
          <source srcSet={photo.urls.small} />
          <source srcSet={photo.urls.regular} />
          <img
            src={photo.urls.small}
            srcSet={`${photo.small} 1x, ${photo.regular} 2x`}
            alt={photo.description || "Image"}
          />
        </picture>
      ))}
    </div>
  );
};

export default ImageCard;
