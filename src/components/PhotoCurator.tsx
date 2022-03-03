import "../styles/PhotoCurator.css";
import "../styles/PhotoModal.css";
import { useState } from "react";
import PhotoModal from "../components/PhotoModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface PhotoCuratorProps {
  photos: any[];
}

const PhotoCurator = (props: PhotoCuratorProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<any>({});

  const getImg = (imgURL: string, description: String) => {
    const imageData = { imgURL: imgURL, description: description };
    setCurrentImg(imageData);
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
            <LazyLoadImage
              src={photo.urls.regular}
              effect="blur"
              style={{ width: "100%" }}
              onClick={() => getImg(photo.urls.regular, photo.description)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoCurator;
