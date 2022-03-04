import { useState, useEffect } from "react";
import api from "./api/api";
import PhotoCurator from "./components/PhotoCurator";

function App() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const getPhotos = async () => {
    try {
      const response = await api.get("/photos/", {
        params: {
          per_page: 10,
          page: page,
        },
      });
      setPhotos(filterDuplicateIds([...photos, ...response.data]));
      console.log(photos);
    } catch (error) {
      console.log(error);
    }
    setPage(page + 1);
  };

  const filterDuplicateIds = (data: any[]) => {
    var uniq = data.filter(function ({ id }) {
      return !data[id] && (data[id] = id);
    }, {});
    return uniq;
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (!photos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PhotoCurator photos={photos} fetchPhotos={getPhotos} />
    </div>
  );
}
export default App;
