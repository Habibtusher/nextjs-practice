import { useRouter } from 'next/router';
import React from 'react';

const ErrorPage = () => {
    const router = useRouter()
    setTimeout(()=>{
        router.push("/")
    },5000)
    return (
        <div>
            <img width="100%" src='https://assets.website-files.com/600c68cb72173ece9c8958ed/6092052bc93b16ed467a22da_Frame%2085.png'/>
        </div>
    );
};

export default ErrorPage;