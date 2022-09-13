import React from 'react'
import Image from "next/image";
import ContactElement from '../ContactElement/ContactElement'

export default function About({title, imageUrl, imageAlt, body}) {
    return (


        <section className='lg:px-20 px-4 lg:px-10    bg-gray-200 bg-opacity-10 flex flex-col pb-12  '>
            <div className="mx-auto mt-24">
                <h2 className='text-center text-3xl  text-gray-700 font-roboto font-medium  px-6'>A propos de moi</h2>
                <div className="w-2/12  h-0.5 bg-red-900 text-center mx-auto mt-2 mb-40"></div>

            </div>


            <div className="flex flex-col items-center sm:items-start lg:flex-row  justify-around   ">
                <div className=" flex flex-col w-1/2 justify-between">
                <div className="relative w-300 h-300 mx-auto">

                        <div className='hidden lg:block absolute w-full h-full bg-gray-700 bg-opacity-20  -top-16 -left-16 w-full '></div>
                            <Image src={imageUrl} alt={imageAlt}
                                   width={300}
                                   height={300}
                                   className=""

                            />

                </div>

                <div className="space-x-5 mt-32 md:p-4">
                    <h3 className="font-roboto font-semibold text-gray-700 text-2xl mb-6">Diplômes et
                        certifications:</h3>

                    <li className="text-gray-500  text-lg">Master PNL Programmation Neuro Linguistique</li>
                    <li className="text-gray-500  text-lg">Master Sophrologie caycédienne</li>
                    <li className="text-gray-500  text-lg">Europe Accréditation practicien par le Dr David Servan
                        Schreiber en EMDR (Eye Movement Desinsitization Reprocessing)
                    </li>
                    <li className="text-gray-500  text-lg">Practricienne neuro-sciences par le Dr Mario Beauregard
                    </li>
                    <li className="text-gray-500  text-lg">Accréditation Maitre pratricienne en Hypnose spirituelle
                        de régression par l&rsquo;IIHS (Institut International d&rsquo;Hypnose de Spirituelle) en
                        2022
                    </li>


                </div>

                <ContactElement/>
                </div>


                <div className='lg:w-1/2 mx-4 card-content flex flex-col items-start justify-between mb-20 '>

                    <div>

                        <p className="mt-12 text-medium text-left leading-relaxed text-justify md:p-4 text-lg mr-8 "><span
                            className='font-bold'>Faire un bilan</span> pour mettre à jour les comportements compulsifs,
                            les
                            croyances erronées, les troubles psychosomatiques, les traumatismes.
                            Utiliser la PNL, l&rsquo;EMDR ou l&rsquo;Hypnose comme <span className='font-bold'>thérapies de changement. </span>
                            <br/>Pourquoi ce choix ?<br/>
                            Ces thérapies brèves font appel aux sciences de la connaissance de soi : <br/>
                            1) la perception, l’intelligence, le langage, la mémoire, l&rsquo;attention, le
                            raisonnement, les émotions, l&rsquo;esprit <br/>
                            2) la métacognition qui est l&rsquo;activité mentale sur ses propres processus
                            mentaux. C&rsquo;est dire que la personne a un rôle actif dans ses changements. <br/> <br/>
                            Dans <span className="font-bold"> mon approche holistique</span> du soin je garde à
                            l&rsquo;esprit que l&rsquo;énergie est
                            présente autour de nous et en nous et que nous sommes des êtres intemporels
                            dont l&rsquo;essence ne peut cesser d&rsquo;exister. Les états modifiés de conscience
                            induits par la sophrologie et l&rsquo;hypnose permettent un rééquilibrage
                            énergétique, si besoin. <br/> <br/>
                            <span className="text-gray-700 font-semibold">La sophrologie :</span> est l&rsquo;étude de
                            la conscience humaine et des valeurs de
                            l’existence. La méthode consiste à observer le corps dans son espace et son
                            instantanéité pour vivre une expérience de soi. <br/>
                            <span className="text-gray-700 font-semibold">L’EMDR :</span> les mouvements oculaires
                            permettent d&rsquo;effacer la charge
                            émotionnelle difficile et l&rsquo;image anxiogène d&rsquo;un évènement, le cerveau
                            pouvant « digérer » la charge du souvenir traumatique. <br/>
                            <span className="text-gray-700 font-semibold">L&rsquo;hypnose:</span> état modifié de
                            conscience permettant d&rsquo;accéder à des ressources
                            et qualités, des caractéristiques ou à des informations et des expériences
                            inaccessibles dans notre état d&rsquo;être habituel. On peut créer de façon spécifique
                            l&rsquo;état qu’on veut atteindre. Elle permet aussi de se connecter à plus grand que
                            soi et d’explorer d&rsquo;autres espaces comme les vies antérieures. </p>
                    </div>

                    {/*<div>*/}
                    {/*    <button className="mt-12"><a href={link}> en savoir plus </a></button>*/}
                    {/*</div>*/}


                </div>
            </div>


        </section>

    )

}
