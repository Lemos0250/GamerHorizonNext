

export default function Header() {
    return (
        <div className={`
            flex justify-start ml-[15%]
            `}>
                <div className={`
                flex justify-start items-start
                lg:w-[55%] lg:h-96 bg-[#5C5555] 
                shadow-inner rounded-2xl
                `}>
                    <img></img>
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