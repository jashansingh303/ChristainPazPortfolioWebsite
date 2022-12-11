import NavBar from "./navbar"
import Image from 'next/image'
import { useState } from "react"

function AboutHero(){

    const [nav, setNav] = useState(false)

    return(
        <div>
            <NavBar/>
            <div className="lg:max-w-[80%] mx-auto pt-[10%] sm:max-w-[85%] md:max-w-[85%] max-w-[80%] flex flex-row">
                <div>
                    <h1>Learn About Me</h1>
                    <p className="pb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident eligendi voluptatum quidem, vero odit eum. Doloribus cumque, eveniet voluptatem temporibus itaque consequuntur repellat nisi, perspiciatis quos aliquid aliquam, repellendus amet!</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/150" height="200%" width="200%"/>
                </div>

            </div>
            
            <button onClick={() => router.push('./')} className={nav ? "bg-gray-900" : "lg:text-lg md:text-md sm:text-sm text-xs sm:p-3 bg-[#00df9a] rounded-3xl my-auto p-2 font-bold animate-bounce font-serif lg:ml-[175px] md:ml-[75px] sm:ml-[55px] ml-[50px]"}>PORTFOLIO
            </button>
        </div>

    )
}

export default AboutHero