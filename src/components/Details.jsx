import React from 'react';
import { Zoom } from 'react-slideshow-image';

const fadeImages = [
    {
        url: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/03/Pratapgarh-Fort.jpg',
      
    },
    {
        url: 'https://www.treksandtrails.org/system/images/000/534/556/5185670995fdf476a4a5865950bda147/x1000gt/Mahabaleshwar-Tour-2.jpg?1634240744',
       
    },
    {
        url: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0c/ab/40/f8/very-beautiful-hill-station.jpg',
       
    },
    {
        url: 'https://miro.medium.com/v2/resize:fit:800/1*H26_3AiAbsXXD9_7ne3Plg.jpeg',
        
    },
    {
        url: 'https://hikerwolf.com/wp-content/uploads/2020/09/arthurs_seat1.jpg',
        caption: 'Fifth Slide'
    },
];

const Details = () => {
    return (
        <div className="mx-auto max-w-4xl  relative h-[500px] overflow-hidden overflow-x-hidden overflow-y-hidden ">
            <Zoom scale={0.1}>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index} className="absolute inline-block  px-4 flex-shrink-0">
                        <img className=" rounded-lg shadow-lg" src={fadeImage.url} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Zoom>
            <div className="relative text-white px-6 pb-6 mt-6">
                <span className="block opacity-75 text-xs tracking-wide">Indoor</span>
            </div>
        </div>
    );
};

export default Details;
