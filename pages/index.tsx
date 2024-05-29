export default function Home() {
  return (
    <div className="container flex flex-col justify-center gap-5 pt-16 mx-auto md:pt-20">
      <img
        src="https://i.pinimg.com/736x/f6/53/5b/f6535b0b53983ade21d904d572441d9c.jpg"
        alt=""
        className="mx-auto rounded-full w-60"
      />
      <div className="text-center">
        <h1 className="mb-3 text-4xl font-bold md:text-5xl">Arya Naufal</h1>
        <span className="font-semibold text-md md:text-xl">Software Engineer</span>
      </div>
    </div>
  );
};