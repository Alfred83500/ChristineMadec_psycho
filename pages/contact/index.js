import React, { useState } from "react";
import {useForm} from "react-hook-form";


export default function ContactUs() {
    // Variables
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm()



    //States
    const [isLoading, setIsLoading] = useState(false);
    const [isSended, setIsSended] = useState(false);

    //Methods

    const onSubmitHandler = async (data) => {
        if(!isLoading) {
            setIsLoading(true);

            const response = await fetch('api/contact', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = response.json();

            setIsLoading(false);
            console.log(response)
            if(!response.ok) {
                console.log('errors')
            }

            else {
                console.log("ok");
                setIsSended(true);
            }
        }
    };




    return (
        <main className="pt-24">
            <form
                className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white d"
                onSubmit={handleSubmit(onSubmitHandler)}
            >
                <h1 className="text-2xl font-bold text-gray-700 uppercase">Me contacter</h1>

                {isSended && (
                    <p>
                        Votre message a bien été envoyé avec succès, je vous répondrai rapidement.
                    </p>
                )}

                <label htmlFor="fullname" className="text-gray-500 font-light mt-8 ">Nom<span className="text-red-500 ">*</span></label>
                <input type="text"

                       className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                       {...register('name', {
                           required:true
                       })}
                />
                {errors.name && <p className='text-red-700'>Vous devez renseigner votre nom</p> }

                <label htmlFor="email" className="text-gray-500 font-light mt-4 ">E-mail<span className="text-red-500">*</span></label>
                <input type="email"
                       className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                       {...register('email', {
                           required:true
                       })}

                />
                {errors.email && <p className='text-red-700'>Vous devez renseigner votre adresse email</p> }

                <label htmlFor="subject" className="text-gray-500 font-light mt-4 ">tel<span className="text-red-500">*</span></label>
                <input type="text"
                       className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                       {...register('tel', {
                           required:true
                       })}

                />
                {errors.tel && <p className='text-red-700'>Vous devez renseigner votre numéro de téléphone</p> }

                <label htmlFor="message" className="text-gray-500 font-light mt-4 ">Message<span className="text-red-500">*</span></label>
                <textarea
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
                    {...register('message', {
                        required:true
                    })}
                ></textarea>
                {errors.message && <p className='text-red-700'>Vous devez renseigner votre le contenu de votre message</p> }
                <div className="flex flex-row items-center justify-start">
                    {!isLoading && (<button className="px-10 mt-8 py-2 bg-red-700 text-gray-50 font-light rounded-md text-lg flex flex-row items-center mx-auto">
                        Envoyer

                    </button>
                        )}
                </div>
            </form>
        </main>
    );
}