import Image from "next/image";
import User from '../../../../public/img/Astronaut.png'

export default function Header() {
    return (
      <div className={`
      flex flex-row w-full h-20
      bg-[#5C5555] shadow-inner items-center lg:text-2xl`}>

            <span className={`ml-[2.5%] text-2xl font-semibold
           text-[#FFD700] text-black`}
            >Gamer</span>
            <span className="text-zinc-400 text-2xl font-semibold">Horizon</span>

            <div className={`
            lg:flex hidden lg:ml-[62%] gap-4 items-center
            `}>
              <svg className="fill-[#C0c0c0]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>

              <svg className="fill-[#C0c0c0]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>

              <svg className="fill-[#C0c0c0]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>

              <div className="flex rounded-xl justify-center items-center border-4 bg-white p-4">
              <Image
                src={User}
                width={20}
                height={15}
                alt="User Picture"
              />

              </div>
            </div>

      </div>
    )
  }