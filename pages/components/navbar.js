import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useRouter } from 'next/router'


function NavBar() {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  return(
    <div className='flex justify-between items-center h-24 text-white px-10 mx-auto font-serif '>

        <h1 className='md:w-full text-4xl font-bold text-customGreen uppercase '><Link href="/">Christian Paz</Link></h1>
          <ul className=' uppercase space-x-10 hidden md:flex text-3xl'>
            <li className='p-4 hover:scale-125 duration-100 border-b'><Link href="./about">About</Link></li>
            <li className='p-4 hover:scale-125 duration-100 border-b'><Link href="./portfolio">Portfolio</Link></li>
            <li className='p-4 hover:scale-125 duration-100 border-b'><Link href="./contact">Contact</Link></li>
            <li className='p-4 hover:scale-125 duration-100 border-b'><Link href="./image">image</Link></li>
          </ul>


      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/> }
      </div>

      <div className={nav ? 'fixed left-0 top-0 w-[70%]  border-r h-full border-b ease-in-out duration-500 bg-slate-900 z-10' : 'fixed left-[-100%] top-0 w-[60%] border-r h-full border-b font-serif' }>
        <h1 className='w-full text-3xl font-bold text-customGreen pt-[29px] pl-[50px] h-24'>Christian Paz</h1>
        <ul className='p-4 uppercase' onClick={!nav}>
          <li className='p-4 border-b hover:text-customGreen duration-1000'><Link href={"./about"}>About</Link></li>
          <li className='p-4 border-b hover:text-customGreen duration-1000'><Link href={"./portfolio"}>Portfolio</Link></li>
          <li className='p-4 border-b hover:text-customGreen duration-1000'><Link href={"./contact"}>Contact</Link></li>
        </ul>
      </div>

    </div>

  )
}

export default NavBar