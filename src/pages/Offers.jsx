import React from 'react';
import { TfiCheck } from "react-icons/tfi";
const Offers = () => {
    return (
        <section className="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
            <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
                <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
                    <h2 id="pricing" className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"></p>
                </div>

                <div id="pricing" className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
                    <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                            Silver
                        </h3>
                        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                $29.94
                            </p>
                            <p className="box-border m-0 border-solid" style={{ borderImage: "initial" }}>
                                / Day
                            </p>
                        </div>
                        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                1 Room
                            </li>
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />

                                Bathroom
                            </li>
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />

                                Dinner
                            </li>
                        </ul>
                        <a href="#" className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-black no-underline bg-transparent border border-black rounded-md cursor-pointer hover:bg-black hover:border-black hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                            Book Now
                        </a>
                    </div>

                    {/* second card */}
                    
                    <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                            Gold
                        </h3>
                        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                $59.87
                            </p>
                            <p className="box-border m-0 border-solid" style={{ borderImage: "initial" }}>
                                / Day
                            </p>
                        </div>
                        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                1 Room (Cooler)
                            </li>
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />

                                Bathroom (Bathtub)
                            </li>
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />

                                Dinner
                            </li>
                        </ul>
                        <a href="#" className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-black no-underline bg-transparent border border-black rounded-md cursor-pointer hover:bg-black hover:border-black hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                            Book Now
                        </a>
                    </div>

                    <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                            Platinum
                        </h3>
                        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                            <p className="box-border m-0 text-6xl font-semibold leading-none border-solid">
                                $89.81
                            </p>
                            <p className="box-border m-0 border-solid" style={{ borderImage: "initial" }}>
                                / Day
                            </p>
                        </div>
                        <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                1 Room (AC)
                            </li>
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />

                                Bathroom(Bathtub)
                            </li>
                            <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                                <TfiCheck className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" />

                                Dinner(Special)
                            </li>
                        </ul>
                        <a href="#" className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-black no-underline bg-transparent border border-black rounded-md cursor-pointer hover:bg-black hover:border-black hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                            Book Now
                        </a>
                    </div>
                    {/* Additional offer cards go here */}
                </div>
            </div>
        </section>
    );
}

export default Offers;
