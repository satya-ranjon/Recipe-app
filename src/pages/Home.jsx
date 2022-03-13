import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

export default function Home() {
  console.log("Home page");
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Popular /> <Veggie />
      </motion.div>
    </AnimatePresence>
  );
}
