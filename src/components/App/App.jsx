import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { featchPhotos } from "../../gallery-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import axios from "axios";

const App = () => {
  const [topic, setTopic] = useState("");

  const [datas, setDatas] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(999);

  const handleInpValue = async (newTopic) => {
    if (!newTopic) {
      toast.error("Need type 1 or more symbols");
      return;
    }
    try {
      setTopic(newTopic);
      const data = await featchPhotos(newTopic, 1);
      console.log(data.results);
      setDatas(data);

      // console.log(response.data.results);
    } catch (error) {
      toast.error("some errors");
    }
  };

  useEffect(() => {
    console.log(datas);
  }, [datas, topic]);

  return (
    <div>
      <SearchBar onSubmit={handleInpValue} />
      <ImageGallery photos={datas} />
      <Toaster position="top-right" />
    </div>
  );
};
export default App;

//    -http key

// PTKSOfTH1Db1TKmnhaBgc9EW8KSmQTf_wIISOMGOgIU   -secret key
