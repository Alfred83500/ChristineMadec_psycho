import React from 'react'


export default function Tarifs() {
    return (

        <section className='flex flex-col bg-gray-200 bg-opacity-10 py-12 md:py-20 '>
            <div className="mx-auto">
                <h2 className='text-center text-3xl  text-gray-700 font-roboto font-medium  px-6'>Mes offres de soins et
                    tarifs</h2>
                <div className="w-2/12  h-0.5 bg-red-900 text-center mx-auto mt-2 mb-40"></div>

            </div>


            <div className="cards flex flex-col lg:flex-row  ">

                <div className="flex flex-row mb-20 px-6 flex-1 ">

                    <div
                        className=' bg-white  border-red-900 shadow p-8 h-full  rounded-xl mx-auto hover:scale-110 duration-300 ease-in-out items-stretch h-full sm:w-2/3 w-full'>
                        <h2 className="font-semibold text-3xl text-center text-gray-700 mb-4">Consultation
                            Individuelle</h2>
                        <div className="w-2/12  h-0.5 bg-red-900 text-center mx-auto mt-2 mb-12"></div>
                        <div className="text-7xl text-gray-500 text-right mb-8">60<span className="text-5xl">€</span>
                            <span className="text-2xl">/séance</span></div>


                    </div>
                </div>
                <div className="flex flex-row items-end mb-20 px-6 flex-1 ">

                    <div
                        className='  bg-white  border-red-900 shadow p-4 h-full  rounded-xl mx-auto hover:scale-110 duration-300 ease-in-out items-stretch h-full sm:w-2/3 w-full '>
                        <h2 className="font-semibold text-3xl text-center text-gray-700 mb-4 ">Regression vies
                            antérieures</h2>
                        <div className="w-2/12  h-0.5 bg-red-900 text-center mx-auto mt-2 mb-12"></div>
                        <div className="text-7xl text-gray-500 text-right mb-8">120<span className="text-5xl">€</span>
                            <span className="text-2xl">/séance</span></div>
                        <div>
                            <div className='text-sm p-4 leading-6'>
                                <span >1h d'entretien téléphonique</span> <br/>
                                <span>2h pour l'exploration et l'analyse de la séance</span> <br/>
                                <span>(Envoi d'audios de préparation)</span>
                            </div>


                        </div>


                    </div>

                </div>
                <div className="flex flex-row items-end mb-20 px-6 flex-1">

                    <div
                        className=' bg-white border-red-900 shadow p-4 h-full  rounded-xl mx-auto hover:scale-110 duration-300 ease-in-out items-stretch h-full sm:w-2/3 w-full'>
                        <h2 className="font-semibold text-3xl text-center text-gray-700 mb-4">Guidance de groupe</h2>
                        <div className="w-2/12  h-0.5 bg-red-900 text-center mx-auto mt-2 mb-12"></div>
                        <div className="text-7xl text-gray-500 text-right mb-8">35<span className="text-5xl">€</span>
                            <span className="text-2xl">/séance</span></div>
                        <div className="flex-1">

                        </div>
                        <div className='text-sm p-4 leading-6'>
                            <span >Une fois par mois en atelier de 3h</span> <br/>


                        </div>


                    </div>

                </div>


            </div>
            <div className='text-center italic text-gray-700 text-xl'>
                Les consultations ne sont pas remboursées par la sécurité sociale
            </div>


        </section>

    )

}
