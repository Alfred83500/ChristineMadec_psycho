import React from 'react';
import {useForm} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import axios from "axios";
import {useRouter} from "next/router";
import ContactElement from '../../components/ContactElement/ContactElement'
import Footer from "../../components/Footer/Footer";


const Contact = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm({criteriaMode: "all"});
    const router = useRouter()


    async function onSubmit(values) {
        let config = {
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
            headers: {
                'content-type': 'application/json',
            },
            data: values,
        };


        try {
            const response = await axios(config);
            if (response.status == 200) {
                reset();
                router.push('./contactSent')

            }
        } catch (err) {
            console.error(err)
        }

    }

    console.log(errors);

    return (

        <div
            className="absolute b py-36 bg-gray-200 bg-opacity-20 px-2 sm:px-6 h-[100vh] w-screen flex flex-col items-center font-roboto">
            <div className="flex flex-col items-center">
                <div className="uppercase text-5xl font-semibold text-gray-700 mx-auto ">Formulaire de Contact</div>
                <div className="h-1 bg-red-900 w-32 mt-12"></div>
            </div>


            <div className="mx-auto w-full max-w-7xl rounded-xl bg-white p-8 pt-12 px-12 shadow my-24 ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">


                    <input type="text" placeholder="Nom*" {...register("Nom", {
                        required: 'Vous devez entrer votre nom',
                        maxLength: {

                            value: 30,
                            message: "vous ne pouvez pas dépasser 30 caractères"
                        },
                    })}
                           className={`border-b focus:border-b focus:border-gray-800 focus:outline-none ${errors.Nom ? 'border-red-700' : null}`}
                    />


                    <ErrorMessage
                        errors={errors}
                        name="Nom"
                        render={({messages}) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} className="text-red-700">{message}</p>
                            ))
                        }
                    />


                    <div className="flex w-full justify-between">
                        <div className="flex flex-col mt-12 ml-auto w-full">
                            <input type="text" placeholder="E-mail*" {...register("Email", {
                                required: "Vous devez entrer votre email",
                                max: 100,
                                min: 3,
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Veuillez entrer une adresse mail valide"
                                }
                            })}
                                   className={`border-b mt-12 w-11/12 focus:border-b focus:border-gray-800 focus:outline-none ${errors.Email ? 'border-red-700' : null}`}
                            />

                            <ErrorMessage
                                errors={errors}
                                name="Email"
                                render={({messages}) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className="text-red-700">{message}</p>
                                    ))
                                }
                            />
                        </div>
                        <div className="flex flex-col mt-12  w-full">
                            <input type="tel" placeholder="Tel*" {...register("tel", {
                                required: 'Vous devez entrer votre numéro de téléphone',
                                maxLength: {
                                    value: 30,
                                    message: "Votre numéro n'est pas valide"
                                },
                                pattern: {
                                    value: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i,
                                    message: "Votre numéro n'est pas valide"
                                }
                            })}
                                   className={`border-b mt-12 w-11/12 focus:border-b focus:border-gray-800 focus:outline-none ${errors.tel ? 'border-red-700' : null}`}/>

                            <ErrorMessage
                                errors={errors}
                                name="tel"
                                render={({messages}) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className="text-red-700">{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>

                    <textarea placeholder="Message*"{...register("message", {
                        required: 'Entrez votre message',
                        maxLength: {
                            value: 1000,
                            message: 'votre message est trop long'
                        }
                    })} rows="7"
                              className={`border-b mt-12 w-12/12 focus:border-b focus:border-gray-800 focus:outline-none  ${errors.message ? 'border-red-700' : null}`}/>

                    <ErrorMessage
                        errors={errors}
                        name="message"
                        render={({messages}) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type} className="text-red-700">{message}</p>
                            ))
                        }
                    />


                    <div className="Flex mt-12 italic items-center text-gray-700 opacity-50 text-small "> Demander à
                        être rappelé
                        <label htmlFor="recontacter">
                            <input {...register("rappeler", {required: false})}
                                   type="checkbox" value="oui"
                                   className="ml-8 scale-125 bg-gray-100 rounded border-gray-300 focus:ring-red-900 items-center focus:outline-none"/>
                        </label>

                    </div>
                    <button

                        className="inline-flex mx-auto w-60 justify-center mt-24 py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800">
                        Envoyer
                    </button>

                    <div className="italic text-gray-700 opacity-50 text-xs pt-8 "> les champs notés avec une * sont
                        obligatoires
                    </div>

                </form>

            </div>
            <div className="mx-auto w-full max-w-7xl  px-12   ">
                <ContactElement/>
            </div>
            <div className=" relative bottom-0">
                <Footer/>
            </div>


        </div>
    );
}

export default Contact;


