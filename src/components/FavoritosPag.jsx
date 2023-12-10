import { useContext, useState} from "react";
import { PhotosContext } from "../contexts/context";
import IconHeart from './IconHeart'
import  Badge  from "react-bootstrap/Badge";


const FavoritosPag = () => {
    const {photos, setPhotos} = useContext(PhotosContext)

    const favoritesPic = photos.filter((photo)=> photo.isFavorite)
    

    const removeFavorite= (id) =>{
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
    {favoritesPic.map((photo)=>(
      <div onClick={() => removeFavorite(photo.id)}
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
     
  </div>
  )
}

export default FavoritosPag