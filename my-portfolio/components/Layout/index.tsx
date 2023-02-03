import { motion } from "framer-motion";

const Layout = ({ children }: any) => (
  <motion.div
    initial={{ x: 600, width: "100%", height: "100%", opacity: 0, backgroundColor: "#193dbb" }}
    animate={{ x: 0, width: "100%", height: "100%", opacity: 1, backgroundColor: "#193dbb" }}
    exit={{ x: -600, width: "100%", height: "100%", opacity: 0, backgroundColor: "#193dbb" }}
    transition={{
      type: "tween",
      stiffness: 600,
      damping: 28,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
);
export default Layout;

/*
    initial={{ x: 600, opacity: 0, scale: 0.5, rotate: 180 }}
    animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
    exit={{ x: -600, opacity: 0, scale: 1.5, rotate: -180 }}
    transition={{
      type: "tween",
      stiffness: 600,
      damping: 28,
      duration: 1,
      ease: "easeOut",
*/