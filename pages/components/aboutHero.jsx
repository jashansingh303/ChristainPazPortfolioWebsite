import NavBar from "./navbar"
import Image from 'next/image'
import { useState } from "react"
import { useRouter } from 'next/router'

function AboutHero(){
    const router = useRouter()
    const [nav, setNav] = useState(false)

    return(
        <div>
            <NavBar/>
            <div className="lg:max-w-[80%] mx-auto pt-[10%] sm:max-w-[85%] md:max-w-[85%] max-w-[80%] flex flex-row">
                <div>
                    <h1 className="uppercase text-3xl mb-5 lg:text-7xl lg:mb-10">Learn About Me</h1>
                    <p className="pb-10 text-justify text-xl lg:text-5xl lg:mb-5">Hi, my name is Christain Paz and I am an artist and animator. I love to draw and create my own personal cartoon style. In my free time, you can find me sketching and bringing my ideas to life through animation. I am always looking to improve my skills and try new techniques. My ultimate goal is to become a successful artist and bring joy to others through my work. Thank you for checking out my animator!</p>
                </div>
                {/* <div>
                    <img src="https://via.placeholder.com/150" height="200%" width="200%"/>
                </div> */}

            </div>
            
            <div>
                <button onClick={() => router.push('./portfolio')}
                className={nav ? "bg-gray-900" : "lg:text-lg md:text-md sm:text-sm text-xs sm:p-3 bg-[#00df9a] rounded-3xl my-auto p-2 font-bold animate-bounce font-serif lg:ml-[190px] md:ml-[75px] ml-[40px] mx-auto"}>PORTFOLIO
                </button>
            </div>

        </div>

    )
}

export default AboutHero