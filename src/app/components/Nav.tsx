// import logo from '@/app/assets/Logo.svg'
// import Image from 'next/image'
// const Nav = () => {
//   return (
//     <div className='text-black flex justify-between items-center h-22 py-3 px-20 nav sticky top-0 z-50'>
//       <a href='/'>
//         <Image src={logo} height={79} width={272} alt='logo' className='object-cover' />
//       </a>
      
//       {/* desktop */}
//       <div className='md:flex flex-row gap-10 justify-between items-center mr-20 sm:hidden'>
//         <a className='focus:font-bold ' href='/'>Home</a>
//         <a href='/AboutUs' className="focus:font-bold active:font-semibold">About</a>
//         <a className='focus:font-semibold active:font-semibold' href='/Services'>Services</a>
//         <a href='/ContactUs'>Contact us</a>
//       </div>

//       {/* mobile */}
//       <div className='sm:flex md:hidden'></div>
//     </div>
//   )
// }

'use client'

// export default Nav
import logo from '@/app/assets/Logo.svg'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='text-black flex justify-between items-center h-22 py-3 px-6 md:px-20 nav sticky top-0 z-50'>
      <a href='/'>
        <Image src={logo} alt='logo' height={70} width={250} className='object-cover' />
      </a>
      
      {/* Desktop */}
      <div className='hidden md:flex flex-row gap-10 justify-between items-center'>
        <a className='focus:font-bold' href='/'>Home</a>
        <a href='/AboutUs' className="focus:font-bold active:font-semibold">About</a>
        <a className='focus:font-semibold active:font-semibold' href='/Services'>Services</a>
        <a href='/ContactUs'>Contact us</a>
      </div>

      {/* Mobile */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className="block focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <a href='/' className='block py-2'>Home</a>
          <a href='/AboutUs' className='block py-2'>About</a>
          <a href='/Services' className='block py-2'>Services</a>
          <a href='/ContactUs' className='block py-2'>Contact us</a>
        </div>
      </div>
    </div>
  )
}

export default Nav
