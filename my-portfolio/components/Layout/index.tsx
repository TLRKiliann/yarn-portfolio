import { motion } from "framer-motion";

const Layout = ({ children }: any) => (
  <motion.div
    initial={{ x: 300, opacity: 1 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 1 }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 30,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;