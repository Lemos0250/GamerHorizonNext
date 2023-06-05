import Image from "next/image";
import Spider from '../../../../public/img/Spiderman.jpg'

export default function Header() {
    return (
        <div className={`
            flex justify-start ml-[15%]
            `}>
                <div
                className={`
                    flex justify-start items-start
                    lg:w-[55%] lg:h-96 
                    shadow-inner rounded-2xl
                `}
                >
                    
                    {/* <Image
                        src={Spider}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    /> */}
                </div>

                <div className="p-3 bg-black"></div>

                <div className={`
                flex justify-start items-start
                lg:w-[31%] lg:h-96 bg-[#5C5555] 
                shadow-inner rounded-2xl
                `}>
                </div>

            
        </div>


    )
}