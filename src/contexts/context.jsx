import {createContext, useState, useEffect} from 'react'

export const PhotosContext = createContext()
const URL = '/photos.json'

const PhotosProvider = ({children}) => {
    const [photos, setPhotos] =useState([])

        const getPhotos = async()=>{
            const response = await fetch(URL)
            const data= await response.json()
            const {photos: photosDB} = data
            setPhotos(photosDB.map((photo)=>({...photo, isFavorite: false})))
          }
          
    useEffect(()=>{
      getPhotos()
    }, [])
 
  return (
    <PhotosContext.Provider value = {{photos, setPhotos}}>
        {children}
    </PhotosContext.Provider>
  )
}
// se trae la data del json desde aca y esta se le entregara a todos los componentes 
export default PhotosProvider