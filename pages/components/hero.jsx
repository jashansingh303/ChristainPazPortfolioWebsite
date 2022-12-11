import { useRouter } from 'next/router'

function HomeScreen() {
    const router = useRouter()
    return(
        <div className="font-serif">
            <div className='max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center uppercase'>
                <p className='text-[#00df9a] font-bold lg:text-8xl md:text-7xl sm:text-6xl text-4xl py-6 hover:animate-pulse'>Christian Paz</p>
                <div className="flex mx-auto">
                    <p className='lg:text-5xl lg:pr-7 md:text-4xl md:pr-6 sm:text-3xl sm:pr-5 font-bold py-6 pr-4'>Artist/Animator</p>
                    <button onClick={() => router.push('./contact')} className="lg:text-lg md:text-md sm:text-sm text-xs sm:p-3 bg-[#00df9a] rounded-3xl my-auto p-2 font-bold hover:scale-125 duration-100 font-serif uppercase">Contact Me</button>
                </div>
            </div>
        </div>

    )
}

export default HomeScreen