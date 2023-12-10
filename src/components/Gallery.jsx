import { useContext } from "react";
import { PhotosContext } from "../contexts/context";
import IconHeart from './IconHeart'
import  Badge  from "react-bootstrap/Badge";

const Gallery = () => {
    const {photos, setPhotos} = useContext(PhotosContext)

    const addFavorite= (id) =>{
      const newPhotos = photos.map((photo)=>{
        if(photo.id===id){
          return{
            ...photo, isFavorite: !photo.isFavorite
          }
        }
        return photo
      })
      setPhotos(newPhotos)
    }

  return (
  <div className="gallery grid-columns-5 p-3">
    {photos.map((photo)=>(
      <div onClick={()=>addFavorite(photo.id)} 
      className="photo"
      style={{backgroundImage: `url(${photo.src.tiny})`}}
      key={photo.id}>
        <IconHeart filled={photo.isFavorite}/>
        {' '}
        <section>
          <p> {photo.alt}</p>
          <h6>
            <Badge bg='dark'>{photo.photographer}</Badge>
          </h6>
        </section>
      </div>
    ))}
     
  </div>)
};
export default Gallery;
