import 'tailwindcss/tailwind.css'
import Layout from '../components/layouts'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: {
      opacity: 1, transition: {
        duration: 0.5,
      }
    },
    exit: { opacity: 0 },
  }
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.main
          key={router.route}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: 'spring' }}>
          <NextNProgress
            color="#fbbf24"
            startPosition={0.1}
            stopDelayMs={300}
            height={3}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
