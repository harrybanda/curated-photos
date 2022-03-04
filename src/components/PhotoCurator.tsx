import "../styles/PhotoCurator.css";
import "../styles/PhotoModal.css";
import { useState } from "react";
import PhotoModal from "../components/PhotoModal";
import InfiniteScroll from "react-infinite-scroll-component";

interface PhotoCuratorProps {
  photos: any[];
  fetchPhotos: () => void;
}

const PhotoCurator = (props: PhotoCuratorProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<any>({});

  const getImg = (photo: any) => {
    setCurrentImg(photo);
    setShowModal(true);
  };

  return (
    <>
      <PhotoModal
        showModal={showModal}
        currentImg={currentImg}
        setShowModal={setShowModal}
        photos={props.photos}
      />

      <InfiniteScroll
        dataLength={props.photos.length}
        next={props.fetchPhotos}
        hasMore={true}
        loader={<p>Loading...</p>}
      >
        <div className="photos">
          {props.photos.map((photo) => (
            <div className="photo" key={photo.id}>
              <img
                src={photo.urls.regular}
                style={{ width: "100%" }}
                onClick={() => getImg(photo)}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default PhotoCurator;
