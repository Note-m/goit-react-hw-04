import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

Modal.setAppElement("#root");

const ImageModal = ({
  onClose,
  photo: {
    alt_description,
    urls: { regular },
  },
}) => {
  return (
    <Modal isOpen={true} onRequestClose={onClose} contentLabel="Selected Image">
      <img src={regular} alt={alt_description} />
    </Modal>
  );
};

export default ImageModal;
