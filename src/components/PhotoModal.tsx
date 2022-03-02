import CloseIcon from "@mui/icons-material/Close";

interface PhotoModalProps {
  showModal: boolean;
  currentImg: string;
  setShowModal: (showModal: boolean) => void;
}

function PhotoModal(props: PhotoModalProps) {
  return (
    <div className={props.showModal ? "modal open" : "modal"}>
      <img src={props.currentImg} />
      <CloseIcon onClick={() => props.setShowModal(false)} />
    </div>
  );
}

export default PhotoModal;
