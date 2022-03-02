import "../styles/PhotoCurator.css";
import "../styles/PhotoModal.css";
import { useState } from "react";

import PhotoModal from "../components/PhotoModal";

interface PhotoCuratorProps {
  photos: any[];
}

const PhotoCurator = (props: PhotoCuratorProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<string>("");

  const getImg = (imgURL: string) => {
    setCurrentImg(imgURL);
    setShowModal(true);
  };

  return (
    <>
      <PhotoModal
        showModal={showModal}
        currentImg={currentImg}
        setShowModal={setShowModal}
      />
      <div className="photos">
        {props.photos.map((photo) => (
          <div className="photo" key={photo.id}>
            <img
              src={photo.urls.regular}
              style={{ width: "100%" }}
              onClick={() => getImg(photo.urls.regular)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoCurator;
