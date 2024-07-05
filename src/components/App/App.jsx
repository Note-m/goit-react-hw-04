import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { featchPhotos } from "../../gallery-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Circles } from "react-loader-spinner";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import axios from "axios";

const App = () => {
  const [topic, setTopic] = useState("");

  const [datas, setDatas] = useState([]);

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(999);

  const handleInpValue = async (newTopic) => {
    if (!newTopic) {
      toast.error("Need type 1 or more symbols");
      return;
    }
    try {
      setDatas([]);
      setTopic(newTopic);
      setPage(1);
      const data = await featchPhotos(newTopic, 1);
      console.log(data.results);
      console.log(data.total_pages);
      setDatas(data);
    } catch (error) {
      toast.error("some errors");
    }
  };
  const handleLoadMore = () => {
    setPage(page + 1);
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
        console.log(totalPages);
      } catch (error) {
        console.log(datas);
      } finally {
        setLoading(false);
      }
    }
    getMorePhotos();
  }, [datas, topic, page]);

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

      {topic !== "" && totalPages >= page && (
        <ImageGallery photos={datas.results || []} />
      )}
      <LoadMoreBtn onSubmit={handleLoadMore} />
      <Toaster position="top-right" />
    </div>
  );
};
export default App;
