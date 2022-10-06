import { FaBeer } from 'react-icons/fa';
import Image from 'next/image'
import About1 from '../../assets/about.jpg'

const about = () => {
  return (
    <section class="bg-rose-200 py-40">
      <div className="container flex flex-wrap justify-center mx-auto sm:justify-evenly gap-4">

        {/* card1 */}
          <div class="bg-rose-500 rounded-lg shadow-lg overflow-hidden max-w-sm px-auto w-64 sm:w-80 sm:h-96">
            <Image
              src={About1}
              alt="Picture of the author"
              class="object-cover"
              width={400}
              height={200}
            />
            <div class="p-5 pt-2">
              <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">HTML & CSS</h5>
              <p class="mb-3 font-normal text-white">Saya belajar HTML & CSS sejak kelas 7 SMP. Program yang pertama kali saya buat menggunakan HTML & CSS yaitu menggunakan Marque</p>
              <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                See Project
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        {/* card1 */}
          <div class="bg-rose-500 rounded-lg shadow-lg overflow-hidden max-w-sm px-auto w-64 sm:w-80 sm:h-96">
            <Image
              src={About1}
              alt="Picture of the author"
              class="object-cover"
              width={400}
              height={200}
            />
            <div class="p-5 pt-2">
              <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">HTML & CSS</h5>
              <p class="mb-3 font-normal text-white">Saya belajar HTML & CSS sejak kelas 7 SMP. Program yang pertama kali saya buat menggunakan HTML & CSS yaitu menggunakan Marque</p>
              <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                See Project
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        {/* card1 */}
          <div class="bg-rose-500 rounded-lg shadow-lg overflow-hidden max-w-sm px-auto w-64 sm:w-80 sm:h-96">
            <Image
              src={About1}
              alt="Picture of the author"
              class="object-cover"
              width={400}
              height={200}
            />
            <div class="p-5 pt-2">
              <h5 class="mb-2 text-3xl font-bold tracking-tight text-white">HTML & CSS</h5>
              <p class="mb-3 font-normal text-white">Saya belajar HTML & CSS sejak kelas 7 SMP. Program yang pertama kali saya buat menggunakan HTML & CSS yaitu menggunakan Marque</p>
              <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ">
                See Project
                <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        
      
        
        
        
        
        
        
       
        
        


      </div>

    </section >


  )
}

export default about