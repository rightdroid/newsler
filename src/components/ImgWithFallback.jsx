import React from 'react';
import { Card, Image } from 'react-bootstrap';

const ImgWithFallback = ({opts, imgType}) => {
    
    if(imgType == 'card')
        return <Card.Img {...opts} onError={setDefaultImgSrc} />
    else
        return <Image {...opts} onError={setDefaultImgSrc} />;
}

const setDefaultImgSrc = e =>{
    const placeholder = 'https://via.placeholder.com/300x200?text=Newsler';
    e.target.src = placeholder;
}

export default ImgWithFallback;