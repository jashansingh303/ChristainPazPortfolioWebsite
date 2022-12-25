import NavBar from "./components/navbar"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Portfolio(){
    return(
        <div className="pb-10">
            <NavBar/>

            <div className="w-[80%] mx-auto pt-10" >
            <div className="text-4xl sm:text-5xl md:text-7xl pt-10 pb-10 uppercase ">Illustrations</div>
                <div className="mt-10 lg:grid lg:grid-flow-row-dense lg:grid-cols-3 gap-4 ">
                    <div className="h-full object-cover col-span-2 row-span-2 lg:py-0 py-2" ><Zoom><img src="/1.jpg" alt="" /></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/2.jpg"  alt="" /></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/3.jpg" alt="" /></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/4.jpg"/></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/5.jpg"/></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/6.jpg"/></Zoom></div> 
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom> <img src="/7.jpg" /></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2 col-span-2 row-span-2"><Zoom><img src="/8.jpg"  alt="" /></Zoom></div>
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/9.jpg"  alt="" /></Zoom></div> 
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/10.jpg"  alt="" /></Zoom></div> 
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom><img src="/11.jpg"  alt="" /></Zoom></div> 
                    <div className="h-full object-cover lg:py-0 py-2"><Zoom> <img src="/12.jpg"  alt="" /></Zoom></div>
                </div>
                </div>
            </div>
    )
}

export default Portfolio