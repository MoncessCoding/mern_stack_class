import React, {useState} from 'react'

const Album = (props) => {
    // console.log(props.albumName)
    const {albumName, bandName, releaseYear, genre, albumSales} = props;

    const [albumSold, setAlbumSold] = useState(albumSales)

    const buyAlbum = (event) => {
        setAlbumSold(albumSold + 1)
    }


  return (
    <div>
        <h2>Album: {albumName}</h2>
        <h2>Artist: {bandName}</h2>
        <h2>Release Year: {releaseYear}</h2>
        <h2>Genre: {genre}</h2>
        <h2>Album Sold: {albumSold}</h2>
        <button onClick={buyAlbum}>Buy {albumName}</button>
    </div>
  )
}

export default Album