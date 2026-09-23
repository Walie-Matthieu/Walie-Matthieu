"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const EmailButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-xl border-2 font-bold border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-red-900 transition w-fit"
      >
        Ping me
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-center overflow-hidden"
          >
            <ContactForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmailButton;
