import React from 'react'
import Link from "next/link";


export default function Footer() {
    return (

        <footer className="flex flex-row items-center justify-center ">
            <div className='italic'>

                Made by <span
                className="font-semibold text-md text-gray-700 bg-transparent">&nbsp;Arale Agency </span> &copy; &nbsp;  2022 -


            </div>

            <Link href="/mentionslegales" >
                    <a className="italic underline"> <span className="ml-2"> Mentions légales </span></a>
                </Link>
            <span className="ml-2">-</span>
            <Link href="/conditiongenerales">
                    <a> <span className="ml-2 italic underline">Conditions générales de vente </span></a>
                </Link>
            <span className="ml-2">-</span>
            <Link href="/confidentialite">
                    <a> <span className="ml-2 italic underline">Politique de confidentialité </span></a>
                </Link>



        </footer>

    )

}
