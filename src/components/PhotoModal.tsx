import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface PhotoModalProps {
  showModal: boolean;
  currentImg: any;
  setShowModal: (showModal: boolean) => void;
}

function PhotoModal(props: PhotoModalProps) {
  return (
    <div className={props.showModal ? "modal open" : "modal"}>
      <div className="imgContainer">
        <img src={props.currentImg.imgURL} />
        <div className="description">{props.currentImg.description}</div>
        <CloseIcon
          className="close"
          onClick={() => props.setShowModal(false)}
        />
        <ArrowBackIcon className="arrow-left" />
        <ArrowForwardIcon className="arrow-right" />
      </div>
    </div>
  );
}

export default PhotoModal;
