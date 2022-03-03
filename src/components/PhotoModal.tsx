import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState, useEffect } from "react";

interface PhotoModalProps {
  showModal: boolean;
  currentImg: any;
  setShowModal: (showModal: boolean) => void;
  photos: any[];
}

function PhotoModal(props: PhotoModalProps) {
  const photos = props.photos;
  const photo = props.currentImg;
  const initialIndex = photos.indexOf(photo);

  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  const goToPrev = () => {
    const i = currentIndex;
    const newPointer = i === 0 ? photos.length - 1 : i - 1;
    setCurrentIndex(newPointer);
  };

  const goToNext = () => {
    const i = currentIndex;
    const newPointer = i === photos.length - 1 ? 0 : i + 1;
    setCurrentIndex(newPointer);
  };

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  return (
    <div className={props.showModal ? "modal open" : "modal"}>
      <div className="imgContainer">
        <img src={photos[currentIndex]?.urls.regular} />
        <div className="description">{photos[currentIndex]?.description}</div>
        <CloseIcon
          className="close"
          onClick={() => props.setShowModal(false)}
        />
        <ArrowBackIcon className="arrow-left" onClick={() => goToPrev()} />
        <ArrowForwardIcon className="arrow-right" onClick={() => goToNext()} />
      </div>
    </div>
  );
}

export default PhotoModal;
