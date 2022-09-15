import React from 'react'
import Link from "next/link";


export default function Footer() {
    return (

        <footer className="flex flex-row items-center justify-center ">

            <Link href="/mentionslegales" >
                    <a className="italic underline"> <span className="ml-2 text-sm"> Mentions légales </span></a>
                </Link>
            <span className="ml-2">-</span>
            <Link href="/conditiongenerales">
                    <a> <span className="ml-2 italic underline text-sm">CGV </span></a>
                </Link>
            <span className="ml-2">-</span>
            <Link href="/confidentialite">
                    <a> <span className="ml-2 italic underline text-sm">Politique de confidentialité </span></a>
                </Link>



        </footer>

    )

}
