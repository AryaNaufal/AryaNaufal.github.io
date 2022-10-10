import Image from 'next/image'
import Profil from '../public/profil.png'
import Brows from '../public/browser.png'
import Dbase from '../public/lock.png'
import Fapi from '../public/letters.png'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <main className='bg-white px-10 dark:bg-gray-800'>
        <section className='min-h-screen '>
          <nav className='py-10 mb-12 flex justify-between '>
            <h1 className='text-2xl font-bold dark:text-white'>Arya Naufal</h1>
            <ul className='flex items-center dark:text-white'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer' />
              </li>
              <li>
                <a className='bg-green-500 text-white px-4 py-2 rounded-md ml-8' href="">Contact</a>
              </li>
            </ul>
          </nav>

          <div className='relative mx-auto bg-gradient-to-b from-green-400 rounded-full w-80 h-80 overflow-hidden'>
            <Image src={Profil} alt="My Picture" layout="fill" objectFit='cover' />
          </div>

          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-green-600'>Arya Naufal</h2>
            <h3 className='text-2xl py-2 dark:text-white'>Junior Web Developer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
              I am unemployed and like to make a website design. For further information, please visit the site below
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-800 dark:text-white'>
            <AiFillFacebook />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
        </section>

        <section>
          <div className='text-center pt-10 dark:text-white'>
            <h3 className='text-4xl mb-2'>Skills</h3>
            <p>
              since I got to know programming there are a few things Ive been working on
            </p>
          </div>

          <div className='flex flex-col gap-10 md:flex-row md:flex-wrap md:justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 transform transition duration-500 hover:scale-110 dark:bg-white'>
              <Image src={Dbase} alt="Gambar" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Create Databases</h3>
              <p className='py-2'>To create a database we have to create relationships between tables and create a primary key</p>
              <h4 className='py-4 text-green-600'>Tools I Use</h4>
              <p className='text-gray-800 py-1'>VSCode</p>
              <p className='text-gray-800 py-1'>Xampp</p>
              <p className='text-gray-800 py-1'>MySql</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 transform transition duration-500 hover:scale-110 dark:bg-white'>
              <Image src={Brows} alt="Gambar" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Responsive Design</h3>
              <p className='py-2'>To create a database we have to create relationships between tables and create a primary key</p>
              <h4 className='py-4 text-green-600'>Tools I Use</h4>
              <p className='text-gray-800 py-1'>VSCode</p>
              <p className='text-gray-800 py-1'>Tailwind/Bootsrap</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 flex-1 transform transition duration-500 hover:scale-110 dark:bg-white'>
              <Image src={Fapi} alt="Gambar" width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Fetching API</h3>
              <p className='py-2'>To create a database we have to create relationships between tables and create a primary key</p>
              <h4 className='py-4 text-green-600'>Tools I Use</h4>
              <p className='text-gray-800 py-1'>VSCode</p>
              <p className='text-gray-800 py-1'>Postman</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
