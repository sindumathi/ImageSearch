import React, { useState, useEffect, useRef } from 'react';
const ImageCard = (props) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();
  const setImageSpans = () => {
    const height = imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    console.log(spans);
    setSpans(spans);
  };
  useEffect(() => {
    imageRef.current.addEventListener('load', setImageSpans);
  });
  const { urls, description } = props.image;
  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={description} src={urls.regular} />
    </div>
  );
};

export default ImageCard;
