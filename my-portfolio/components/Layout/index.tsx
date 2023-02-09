import { motion } from "framer-motion";

const Layout = ({ children }:any) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 1,
    }}
  >
    {children}
  </motion.div>
);
export default Layout;

/*
      type: "spring",
      stiffness: 260,
      damping: 20,
*/