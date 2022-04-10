import { Layout } from '../components/Layout'
import '../public/assets/css/global.css'
import ReactBreakpoints from 'react-breakpoints/lib/ReactBreakpoints'

function MyApp({ Component, pageProps }) {

  const breakpoints = {
    mobile: 320,
    footer: 580,
    desktop: 720,
  }

  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactBreakpoints>
  )
}

export default MyApp