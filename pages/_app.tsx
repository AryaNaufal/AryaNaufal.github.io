import '../styles/globals.css'
import Layout from './Components/layout'
import ThemeToggle from './Components/ThemeToggle'
import ThemeProvider  from './context/theme-context'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
        <ThemeToggle />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
