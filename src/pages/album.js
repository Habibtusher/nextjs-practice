import Image from 'next/image';
import React from 'react';
import img from '../assets/images/download.jpeg';
const Album = () => {
    return (
        <div>
            <img src={img} alt=''/>
            <Image src={img} alt='aa'/>
        </div>
    );
};

export default Album;