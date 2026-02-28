"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-12 md:py-16 lg:py-24 ${className}`}
    >
      <div className="max-w-[1280px] mx-auto px-6">{children}</div>
    </motion.section>
  );
}
