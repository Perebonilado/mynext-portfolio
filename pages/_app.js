import '../styles/globals.css'
import Layout from '../components/Layout'
import {AppWrapper} from '../context/state'
import { motion } from 'framer-motion'



function MyApp({ Component, pageProps, router }) {
  
  return (
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
    }}>
    <AppWrapper>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </AppWrapper>
  </motion.div>
  )
}
    

export default MyApp
