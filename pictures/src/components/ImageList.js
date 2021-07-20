import React from "react";

const ImageList = props => {
 const image = props.images.map((i) => {
   return <img alt="" src={i.urls.regular} />
 })

 return <div>{image}</div>
}

export default ImageList;