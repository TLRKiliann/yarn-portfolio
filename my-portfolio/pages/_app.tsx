import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.7,
          ease: "easeOut"
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
          },
        }}
        className="base-page-size"
      >
        <Component {...pageProps} key={router.route} />
      </motion.div>
    </AnimatePresence>
  )
}