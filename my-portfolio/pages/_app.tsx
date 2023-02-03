import "@fontsource/acme"
import "@fontsource/akaya-kanadaka"
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router} />
    </AnimatePresence>
  )
}
