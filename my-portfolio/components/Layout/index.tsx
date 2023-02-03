import { motion } from "framer-motion";

const Layout = ({ children, router }: any) => (
  <motion.div
    key={router}
    initial={{ opacity: 0.5, y: 200, scale: 0 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0.5, y: 200, scale: 0 }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
);
export default Layout;
