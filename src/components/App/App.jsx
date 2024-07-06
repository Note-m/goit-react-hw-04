import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { featchPhotos } from "../../gallery-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Circles } from "react-loader-spinner";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {
  const [topic, setTopic] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInpValue = async (newTopic) => {
    setDatas([]);
    setTopic(newTopic);
    setPage(1);
    const data = await featchPhotos(newTopic, 1);
    setDatas(data.results);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    //
    if (totalPages <= page) {
      console.log("error");
    }
  };

  useEffect(() => {
    if (topic === "") {
      return;
    }
    async function getMorePhotos() {
      try {
        setLoading(true);
        const res = await featchPhotos(topic, page);
        setTotalPages(res.total_pages);
        setDatas((prevdatas) => {
          return [...prevdatas, ...res.results];
        });
        setError(false);
      } catch (error) {
        setError(true);
        toast.error("Error please reload page");
      } finally {
        setLoading(false);
      }
    }
    getMorePhotos();
  }, [topic, page]);

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
    setModalIsOpen(true);
  };

  function closeModal() {
    setSelectedImage(null);
    setModalIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSubmit={handleInpValue} />
      {loading && (
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {modalIsOpen && selectedImage && (
        <ImageModal onClose={closeModal} photo={selectedImage} />
      )}
      {topic !== "" && totalPages >= page && (
        <ImageGallery photos={datas || []} onImageClick={handleImageClick} />
      )}
      {error && <ErrorMessage />}
      {datas.length > 0 && !loading && (
        <LoadMoreBtn onSubmit={handleLoadMore} />
      )}

      <Toaster position="top-right" />
    </div>
  );
};
export default App;
