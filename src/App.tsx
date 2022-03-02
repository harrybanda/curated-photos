import { useState, useEffect } from "react";
import api from "./api/api";
import PhotoCurator from "./components/PhotoCurator";

function App() {
  const [photos, setPhotos] = useState<any[]>([]);

  const getPhotos = async () => {
    const params = {
      per_page: 10,
      page: 1,
    };

    try {
      const response = await api.get("/photos/", { params: params });
      console.log(response);
      setPhotos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  if (!photos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PhotoCurator photos={photos} />
    </div>
  );
}
export default App;
