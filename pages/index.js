import Head from 'next/head'
import Hero from "../components/Hero/Hero";
import ServicesSection from '../components/servicesSection/ServicesSection'

import About from '../components/About/About'
import Tarifs from "../components/Tarifs/Tarifs";
import profilPicture from '../src/profil_picture.png'
import Footer from '../components/Footer/Footer'


export default function Home({data}) {
    return (
        <div className="absolute w-full">
            <Head>
                <title>Christine Madec - Psychologue </title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="keywords" content="Psychologue, Psychanalyse, Thérpaie cognitive, Thérapie brève, Hypnose, Sophrologie, EMDR, Hypnose"/>


            </Head>

            <Hero/>

            <div className="flex flex-col">
                <div className="mx-auto mt-24">
                    <h2 className='text-center text-3xl  text-gray-700 font-roboto font-medium  px-6'>Comment puis-je
                        vous aider</h2>
                    <div className="w-2/12  h-0.5 bg-red-900 text-center mx-auto mt-2 mb-12"></div>

                </div>

                <ServicesSection/>


                <About title='A propos de moi'

                       imageUrl={profilPicture}
                       imageAlt='photo_moi'


                />

                <div className=" flex flex-row justify-center items-center lg:mt-24 mx-4 ">
                    <div className="hidden sm:inline-block">

                    </div>
                    <div className="flex flex-col ">
                        <div
                            className="sm:ml-12 text-center my-12 md:my-40 sm:text-3xl italic font-light text-xl md:px-12 text-gray-700">  &laquo; De
                            l&rsquo;autre côté du miroir, au-delà des apparences, l&rsquo;homme figé dans son humanité,
                            éternellement le même,<br/> toujours, recommencé<br/> par ci, par la, explose <br/> des
                            étincelles de lumière, des fragments d&rsquo;âme. &raquo;</div>

                    </div>
                </div>
                <Tarifs/>

                <div className="bg-gray-200 bg-opacity-10 relative bottom-0">
                    <Footer/>
                </div>


            </div>

        </div>

    )
}
