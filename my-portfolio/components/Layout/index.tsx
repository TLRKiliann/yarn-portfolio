import { motion } from "framer-motion";

const Layout = ({ children }: any) => (
  <motion.div
    initial={{ x: 600, opacity: 0, scale: 0.5 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    exit={{ x: -600, opacity: 0, scale: 0.5 }}
    transition={{
      stiffness: 600,
      damping: 28,
      duration: 1,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
);
export default Layout;

/*
      type: "spring",
      stiffness: 600,
      damping: 28,
      duration: 1,
      ease: [0, 0.71, 0.2, 1.01],
*/