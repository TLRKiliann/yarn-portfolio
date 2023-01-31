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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  )
}
