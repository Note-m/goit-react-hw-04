const ImageCard = ({
  photo: {
    alt_description,
    urls: { small },
  },
  onImageClick,
}) => {
  return (
    <div onClick={() => onImageClick()}>
      <img src={small} alt={alt_description || "Image"} />
    </div>
  );
};

export default ImageCard;
