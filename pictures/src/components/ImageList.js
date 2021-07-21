import './ImageList.css'
import React from "react";

const ImageList = props => {
 const image = props.images.map(({id, urls }) => {
   return (
  <div key={id}> 
    <img alt="" src={urls.regular} />
  </div>
   )
 })

 return <div className="image-list">{image}</div>
}

export default ImageList;