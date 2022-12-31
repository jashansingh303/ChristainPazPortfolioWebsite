import NavBar from "./components/navbar"
import 'react-medium-image-zoom/dist/styles.css'
import {motion as m} from "framer-motion"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
    { src: "/images/1.jpg", size: "large" },
    { src: "/images/2.jpg", size: "small" },
    { src: "/images/3.jpg", size: "small" },
    { src: "/images/4.jpg", size: "small" },
    { src: "/images/5.jpg", size: "small" },
    { src: "/images/6.jpg", size: "small" },
    { src: "/images/7.jpg", size: "small" },
    { src: "/images/8.jpg", size: "large" },
    { src: "/images/9.jpg", size: "small" },
    { src: "/images/10.jpg", size: "small" },
    { src: "/images/11.jpg", size: "small" },
    { src: "/images/12.jpg", size: "small"},
    ]


const size_definitions = {
"large": "h-full object-cover col-span-2 row-span-2 lg:py-0 py-2 cursor-pointer",
"small": "h-full object-cover lg:py-0 py-2 cursor-pointer"
}

function Portfolio(){
    const [index, setIndex] = useState(-1);

    return(
        <div className="pb-10">
            <NavBar/>

            <div className="w-[80%] mx-auto pt-10" >
                <div className="text-4xl sm:text-5xl md:text-7xl pt-10 pb-10 uppercase ">Illustrations</div>
                <div className="mt-10 lg:grid lg:grid-flow-row-dense lg:grid-cols-3 gap-4 ">

                    {images.map((item, index)=>{
                        return (
                            <div key={index} id={index} onClick={()=> setIndex(index)} className={size_definitions[item.size]} ><img src={item.src} alt="" /></div>
                        )
                    })}

                    <Lightbox
                        open={index >= 0}
                        index = {index}
                        close={() => setIndex(-1)}
                        slides={images}
                    />
                </div>
            </div>
            </div>
    )
}

export default Portfolio