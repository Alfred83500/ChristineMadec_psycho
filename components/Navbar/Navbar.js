import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {useRouter} from "next/router";
import Link from "next/link";

const navigation = [
    {name: 'Accueil', href: '/', current: true},
    {name: 'Contact', href: '/contact', current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {


    const router = useRouter()
    const currentRoute = router.pathname


    return (
        <Disclosure as="nav" className="bg-transparent font-roboto  ">
            {({open}) => (
                <>
                    <div
                        className="max-w-full  mx-auto sm:px-6 lg:px-8 h-[7vh] shadow-gray-300  shadow-sm fixed w-full z-50 top-0 bg-white">
                        <div className="relative flex items-center h-16 mx-4 ">
                            <div className="absolute right-0 top-3 flex items-center md:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button
                                    className="inline-flex items-start justify-center p-2 rounded-md text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">

                                <Link rel="stylesheet" href="/">
                                    <a>
                                        <div
                                            className='flex flex-row md:flex-col items-center justify-between md:mt-6 '>
                                            <p className='text-gray-900 text-2xl text-gray-700 font-semibold sm:text-3xl md:text-4xl lg:text-5xl'>Christine
                                                Madec</p>

                                            <div className="  justify-start   flex">


                                                <p className="text-md italic text-gray-700 lg:text-xl mt-1  "><span
                                                    className="hidden md:inline-block">Psychologue à Toulon -</span>
                                                    <span
                                                        className="font-semibold ml-2 sm:ml-6 md:ml-0">06 14 63 23 69</span>
                                                </p>

                                            </div>


                                        </div>
                                    </a>
                                </Link>


                                <div className="hidden absolute right-0 top-7 md:block md:ml-6">
                                    <div className="relative">
                                        <div className="flex space-x-4 text-xl ">
                                            {navigation.map((item) => (
                                                <Link key={item.name} href={item.href}>
                                                    <a


                                                        className={classNames(
                                                            currentRoute === item.href ? "text-black border-b border-orange-800" : 'text-gray-300 link link-underline link-underline-black text-black hover:text-gray-400 duration-700 '
                                                        )}
                                                        aria-current={currentRoute == item.href ? 'page' : undefined}


                                                    >
                                                        {item.name}
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden fixed top-10 w-full bg-white z-10 ">
                        <div className="px-2 space-y-1 pt-8
                            ">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        currentRoute == item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={currentRoute == item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}


                        </div>

                    </Disclosure.Panel>


                </>
            )}
        </Disclosure>
    )
}


