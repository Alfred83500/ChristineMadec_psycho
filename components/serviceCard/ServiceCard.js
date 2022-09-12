import React from 'react'

export default function ServiceCard({title, subtitle, body, emote}) {
    return (

        <div className='w-full flex flex-col xl:flex-row items-start  mt-10 sm:mt-0   '>
            <div
                className="mx-auto  bg-red-900 p-5 flex items-start  rounded-full text-5xl text-white mb-10 xl:mb-0">
                {emote}

            </div>
            <div className='card-content flex flex-col items-center justify-center xl:ml-6'>
                <div><h3 className="text-center lg:text-xl text-xl font-semibold text-gray-700  text-gray-700 text-md pt-2"> {title} </h3></div>
                <div><h4 className="text-center   text-black text-md italic pt-2">{subtitle}</h4></div>
                <div><p
                    className=" text-medium  leading-relaxed w-10/12 mx-auto text-md  text-gray-500 text-left mt-10 "> {body} </p>
                </div>
                {/*<div>*/}
                {/*    <button className="mt-12"><a href={link}> en savoir plus </a></button>*/}
                {/*</div>*/}
            </div>
        </div>

    )

}
