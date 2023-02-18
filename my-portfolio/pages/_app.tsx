import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import "@fontsource/abhaya-libre"
import "@fontsource/noto-sans-newa"
import { AnimatePresence, motion } from 'framer-motion'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div>
        <Component {...pageProps} key={router.asPath}/>
      </motion.div>
    </AnimatePresence>
  )
}

