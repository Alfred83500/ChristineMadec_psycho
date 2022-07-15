import React from 'react';
import Link from "next/link";

function Hero(props) {
    return (
        <section

            className="pb-10 xl:pb-0 flex flex-col-reverse justify-end xl:flex-row h-full h-[90vh] max-w-full  md:px-0 font-roboto bg-gray-200 bg-opacity-10 ">

            <div className=" py-auto flex flex-col xl:mt-60 sm:text-center xl:w-1/2 xl:pt-40 mt-24">
                <div className="titre">
                    <div className="   w-full h-full p-6">


                        <h1 className=" text-4xl text-center md:text-7xl lg:text-7xl  text-red-900 font-semibold font-roboto ">Psychologue
                            à Toulon</h1>
                        <h2 className="text-xl md:text-3xl font-medium mt-12 text-white italic text-center text-gray-500">Hypnose
                            - Thérapies brèves - Gestion du stress - <span
                                className="block">Régression vies antérieures </span></h2>
                    </div>

                </div>

                <button

                    className="xl: mt-20 text-indigo-50 p-4 bg-red-900 w-2/4 md:w-1/4 rounded-md shadow hover:bg-red-700 duration-500 hover:text-gray-300 ease-in-out mx-auto text-2xl">
                    <Link href="/contact"><a>Me contacter</a></Link></button>


                {/*<div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">*/}
                {/*    /!*<a href="/contact" className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto">*!/*/}
                {/*    /!*    Me contacter*!/*/}
                {/*    /!*</a>*!/*/}
                {/*</div>*/}
            </div>
            <div className=" block bg bg-hero bg-cover w-full h-2/5 xl:h-full xl:w-1/2 sm:h-full ">


            </div>


        </section>
    );
}

export default Hero;