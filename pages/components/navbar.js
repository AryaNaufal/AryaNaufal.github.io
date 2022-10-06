const navbar = () => {
  return (
    <nav class="bg-rose-50">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <h1 class="text-neutral-300 font-bold text-xl text-rose-600">Arya&nbsp;</h1>
          <h1 class="text-neutral-300 font-bold text-xl text-rose-500">Naufal</h1>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">

                <a href="#" class="bg-rose-500 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</a>

                <a href="/about" class="bg-rose-500 text-white hover:bg-rose-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">About</a>

                <a href="#" class="bg-rose-500 text-white hover:bg-rose-500 hover:text-black px-3 py-2 rounded-md text-sm font-medium">Contact</a>

              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          </div>
        </div>
      </div>

      {/* mobile */}
      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">

          <a href="#" class="bg-rose-500 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

          <a href="#" class="bg-rose-500 text-white hover:bg-gray-700 hover:text-rose-400 block px-3 py-2 rounded-md text-base font-medium">About</a>

          <a href="#" class="bg-rose-500 text-white hover:bg-gray-700 hover:text-rose-400 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default navbar