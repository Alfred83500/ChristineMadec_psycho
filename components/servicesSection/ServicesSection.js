import ServiceCard from '../serviceCard/ServiceCard'


import {GiButterfly, GiLotus} from "react-icons/gi"
import {FaYinYang} from "react-icons/fa";


const ServicesItems = [
    {
        title: 'Thérapies brèves de changement ',
        subtitle: 'Sur rendez-vous individuel',
        body: `Bilan - Gestion des traumas - Rééquilibrage émotionnel`,
        emote: <GiLotus/>,


    },
    {
        title: `Ateliers d'apprentissage à la gestion du stress`,
        subtitle: `Information et inscription par téléphone`,
        body: `Organisé en petits groupes au sein de deux espaces: à Hyères à l'espace Kyo Dake Wa et La Valette au dojo Esprit Zen`,
        emote: <FaYinYang/>,


    },
    {
        title: 'Hypnose spirituelle de régression dans les vies antérieures et l\'entre deux vies  ',
        subtitle: `Sur rendez vous individuel`,
        body: `L'exploration se fait avec le cœur dans le respect et l'authenticité, en respectant la dimension sacrée de la connexion. 
Recueil d'éléments de compréhension de soi et de changement pour cette vie ci `,
        emote: <GiButterfly/>,


    },

]

export default function services() {
    return (
        <section
            className='px-0  lg:px-10 flex flex-col items-center justify-center mx-auto sm:py-1 font-roboto mb-12 xl:mb-40 mx-12'>
            <div className=" sm:mt-12 md:p-12 flex justify-between items-center ">


                <p className='text-md sm:text-3xl italic text-gray-500 sm:ml-12 sm:mt-2 ml-1.5'>Je mets à disposition
                    mes compétences et mon écoute dans le cadre de thérapies individuelles ou de groupes</p></div>
            <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start  mt-24'>

                {ServicesItems.map((item) => {
                    return (
                        <div className='  sm:w-1/3 mt-8 font-roboto lg:mr-12' key={item.title}>
                            <ServiceCard

                                emote={item.emote}
                                title={item.title}
                                subtitle={item.subtitle}
                                body={item.body}

                            />

                        </div>

                    )
                })}


            </div>
        </section>

    )

}
