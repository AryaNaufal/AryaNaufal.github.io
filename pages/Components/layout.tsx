import Navbar from './navbar'

export default function Layout({ children }) {
  return (
    <>
      <main className='min-h-screen bg-gray-100 text-slate-800'>
        <Navbar />
        {children}
      </main>
    </>
  )
}