interface PhotoModalProps {
  showModal: boolean;
  currentImg: string;
}

function PhotoModal(props: PhotoModalProps) {
  return (
    <div className={props.showModal ? "modal open" : "modal"}>
      <img src={props.currentImg} />
    </div>
  );
}

export default PhotoModal;
