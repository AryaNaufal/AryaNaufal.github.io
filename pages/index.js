import Image from 'next/image'
import Profil from '../public/profil.png'
import Brows from '../public/browser.png'
import Dbase from '../public/lock.png'
import Fapi from '../public/letters.png'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineBars } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <main className='pb-10 bg-white  dark:bg-gray-800'>
        {/* navbar */}
        <nav className='z-20 bg-white flex justify-between sticky top-0 py-4 px-10 shadow-md rounded-sm dark:bg-gray-800'>
          <h1 className='text-xl font-bold md:text-2xl md:font-bold dark:text-white'>My Website</h1>
          <ul className='flex items-center dark:text-white'>
            <li>
              {/* <AiOutlineBars className='ml-8 text-2xl'/>
                <a className='bg-green-500 text-white px-2 py-2 rounded-md ml-8 md:px-4 md:py-2' href="">Contact</a> */}
              <button className="mr-4 pt-2 transition duration-300 ease-in-out md:hidden" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <AiOutlineClose className='text-2xl' />
                ) : (
                  <AiOutlineBars className=' text-2xl' />
                )}
              </button>
            </li>
            <li className="hidden md:block">
              <Link href="#homes">
                <a className='bg-green-600 text-white px-4 py-2 rounded-md ml-8'>Home</a>
              </Link>
            </li>
            <li className="hidden md:block md:pr-10">
              <Link href="#skills">
                <a className='bg-green-600 text-white px-4 py-2 rounded-md ml-8'>About</a>
              </Link>
            </li>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl' />
            </li>
          </ul>
        </nav>

        {/* mobile */}
        <div className='z-20 sticky top-16'>
          <div className={`flex-1 justify-self-center bg-slate-200 rounded-md dark:text-white dark:bg-gray-700 ${navbar ? 'block' : 'hidden'}`}>
            <ul className="items-center justify-center p-6 space-y-2 md:hidden">

              <li className="p-4 text-xl hover:bg-green-400 hover:rounded-xl">
                <Link href="#homes">
                  <a>Home</a>
                </Link>
              </li>
              <li className="p-4 text-xl hover:bg-green-400 hover:rounded-xl">
                <Link href="#skills">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

          {/* profil */}
          <div className="container mx-auto">
          <section id='homes' className='px-10 py-10 md:py-10' >
          <div className='relative mx-auto bg-gradient-to-b from-green-400 rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72'>
            <Image src={Profil} alt="My Picture" layout="fill" objectFit='cover' />
          </div>

          <div className='text-center px-10 '>
            <h2 className='text-4xl py-2 mt-4 font-bold md:text-5xl md:py-2 text-green-600'>Arya Naufal</h2>
            <h3 className='text-xl py-2 md:text-xl md:py-2 dark:text-white'>Junior Web Developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-white'>
              I am unemployed and like to make a website design. For further information, please visit the site below.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-10 py-10 text-gray-800 dark:text-white'>
            <Link href="https://web.facebook.com/AryaNaufal2003/">
              <AiFillFacebook className='cursor-pointer' />
            </Link>
            <Link href="https://github.com/AryaNaufal" >
              <AiFillGithub className='cursor-pointer' />
            </Link>
            <Link href="https://www.instagram.com/aryanaufall_/">
              <AiFillInstagram className='cursor-pointer' />
            </Link>
          </div>
        </section>

        {/* Skill */}
        <section id="skills" className='px-10 py-10 md:py-10'>
          <div className='text-center mb-12 dark:text-white'>
            <h3 className='text-4xl mb-2 font-bold pb-16'>My Experience</h3>
            <p>
              since I got to know programming there are a few things Ive been working on :
            </p>
          </div>
          
          {/* card */}
          <div className='flex flex-col gap-10 pb-10 md:flex-row md:flex-wrap md:justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl  basis-1/4 flex-1 transform transition duration-500 hover:scale-110 dark:bg-gray-700 dark:text-white'>
              <Image src={Dbase} alt="Gambar" width={100} height={100} />
              <h3 className='text-lg font-bold pt-8 pb-2'>Databases</h3>
              <p className='py-2'>
                Database is a structured set of data held in a computer, especially one that is accessible in various ways
              </p>
              <h4 className='py-4 text-green-600'>Tools I Use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>VSCode</p>
              <p className='text-gray-800 py-1 dark:text-white'>Xampp</p>
              <p className='text-gray-800 py-1 dark:text-white'>MySql</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl basis-1/4 flex-1 transform transition duration-500 hover:scale-110 dark:bg-gray-700 dark:text-white'>
              <Image src={Brows} alt="Gambar" width={100} height={100} />
              <h3 className='text-lg font-bold pt-8 pb-2'>Responsive Design</h3>
              <p className='py-2'>
                Responsive web design is a web development approach that creates dynamic changes to the appearance of a website.
              </p>
              <h4 className='py-4 text-green-600'>Tools I Use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>VSCode</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind/Bootsrap</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl basis-1/4 flex-1 transform transition duration-500 hover:scale-110 dark:bg-gray-700 dark:text-white'>
              <Image src={Fapi} alt="Gambar" width={100} height={100} />
              <h3 className='text-lg font-bold pt-8 pb-2'>API</h3>
              <p className='py-2'>
                API is an interface that provides programmatic access to service functionality and data within an application or a database.
              </p>
              <h4 className='py-4 text-green-600'>Tools I Use</h4>
              <p className='text-gray-800 py-1 dark:text-white'>VSCode</p>
              <p className='text-gray-800 py-1 dark:text-white'>Postman</p>
            </div>
          </div>
        </section>
          </div>
        
      </main>
    </div>
  )
}
