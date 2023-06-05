export default function SearchBar(){
    
    return(
        <div className={`
        items-center lg:flex hidden
        shadow-2xl border-4 border-white rounded-full
        text-black 
        `}>
    

        <input type="text" className="focus:outline-none text-black"/>
        
        </div>
    )
}