import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos }) => {
  return (
    <>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </>
  );
};

export default PhotoList;
