import Image from "next/image";

export default function Home() {
  return (
    <div className="container flex flex-col justify-center gap-5 pt-16 mx-auto md:pt-20">
      <Image
        src={"354a06f6-3e4d-4238-bb1c-60b8fd5f2275.jpeg"}
        alt=""
        width={50}
        height={50}
        className="object-cover mx-auto rounded-full h-60 w-60"
      />
      <div className="text-center">
        <h1 className="mb-3 text-4xl font-bold md:text-5xl">Arya Naufal</h1>
        <span className="font-semibold text-md md:text-xl">Software Engineer</span>
      </div>
    </div>
  )
}