import profilePic from '../../assets/profil.jpg'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';


const main = () => {

  return (
    <section class="bg-rose-500 p-10 sm:h-screen">
      <div class="container flex flex-wrap justify-evenly mx-auto sm:py-20 sm:my-20">
        <div class="w-60 mt-20 sm:w-80 sm:my-auto">

          <Image
            src={profilePic}
            alt=""
            class="rounded-full"
            width="450px"
            height="450px"
          />
        </div>

        <div class="my-10 sm:my-10 md:my-10 ">

          <h1 class="text-2xl font-bold text-rose-100 sm:text-4xl font-bold lg:text-6xl font-bold">Welcome <span class="text-white">to</span> My <span class="text-white">Website</span></h1>

          <Typewriter
            onInit={(typewriter) => {

              typewriter.typeString('<span class="text-rose-50 text-80 font-bold my-auto sm:text-2xl mt-10">Im Junior Programing</span>')
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              loop: false,
              delay: 100,
            }}
          />
        </div>
      </div>


    </section>
  )
}

export default main