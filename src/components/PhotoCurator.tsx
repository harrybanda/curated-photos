import "../styles/PhotoCurator.css";

interface PhotoCuratorProps {
  photos: any[];
}

const PhotoCurator = (props: PhotoCuratorProps) => {
  return (
    <>
      <div className="photos">
        {props.photos.map((photo) => (
          <div className="photo" key={photo.id}>
            <img src={photo.urls.regular} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoCurator;
