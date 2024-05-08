import React from 'react';
import Card from '../components/Card';
import Details from '../components/Details';
import Name from '../components/Name';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="relative h-screen ">
                <div className="h-3/4 relative">
                    <img
                        src="https://img.freepik.com/free-photo/father-mother-with-little-daughter_1157-19070.jpg?t=st=1714995496~exp=1714999096~hmac=7a229c39575e2cae152d308785816ab7e20cb5b432c0628196b89779e710c357&w=1380"
                        alt="name"
                        className="h-full w-full object-cover brightness-50"
                    />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">S M NIVAS</h1>
                        <h1 className="text-3xl font-bold mb-2">Find your perfect Family Hotel</h1>
                        <p className="text-lg mb-4">
                            No one looks after your family better than S M Nivas! Stay with us and enjoy family perks such as free breakfast for children and more.
                        </p>
                        <Link to="/offers">
                        <button className="border-black border-[2px] rounded-[20px] text-[20px] px-4 py-2 bg-white hover:bg-[#D5DBDB] text-black font-bold">
                          Book Now 
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className='font-bold'>ESCAPE WITH S M NIVAS AT THE BEST PRICE</p>
                <h1 className="text-3xl text-gray-700">Discover the best hotels and offers with S M Nivas</h1>
            </div>
            <Card className='class'/>
            <div className='mt-[50px]'>
            <div className="flex flex-col justify-center items-center sm:text-center">
    <p className='font-bold'>TOP DESTINATION PICKS</p>
    <h1 className="text-3xl text-gray-700">Over 300 destinations around Mahabaleshwar</h1>
</div>
            <div className='lg:mt-10'>
                
                <Details/>
            </div>
            </div>
            <Name className="mt-10"/>
           
        </div>

    );
};

export default Home;
