import { motion as m } from "framer-motion";

function SmoothieOpcIn({ children }) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}

export default SmoothieOpcIn;
