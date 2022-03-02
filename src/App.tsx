import { useState, useEffect } from "react";
import axios from "axios";
import PhotoCurator from "./components/PhotoCurator";
const { REACT_APP_ACCESS_KEY } = process.env;
const UNSPLASH_API = "https://api.unsplash.com/photos/?client_id=";

function App() {
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(UNSPLASH_API + REACT_APP_ACCESS_KEY)
      .then(function (response) {
        setPhotos(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <div>
      <PhotoCurator photos={photos} />
    </div>
  );
}
export default App;
