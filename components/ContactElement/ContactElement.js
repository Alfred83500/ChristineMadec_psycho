import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs";


const ServicesItems = [
    {
        title: 'Chemin départemental 46, 83000 Toulon',

        emote: <AiOutlineHome/>,


    },
    {
        title: `06 14 63 23 69  `,

        emote: <BsTelephone/>,


    },
    {
        title: ' chrismade@orange.fr  ',
        emote: <AiOutlineMail/>,


    },

]

export default function contactElement(bg, textsize) {
    return (
        <div className='ml-auto px-4 flex flex-col md:flex-row items-end justify-between w-full  sm:py-1 font-roboto  '>


            {ServicesItems.map((item) => {
                return (
                    <div className='flex flex-col lg:flex-row items-start justify-between font-roboto w-full mt-8'
                         key={item.title}>
                        <div className="flex justify-center  items-center ">


                            <div className="bg-red-900 text-3xl p-2 rounded-full text-white "
                            >
                                {item.emote}
                            </div>
                            <div className="font-roboto text-gray-500 w-full ml-4 text-sm xl:text-md ">
                                {item.title}
                            </div>

                        </div>

                    </div>

                )
            })}


        </div>

    )

}
