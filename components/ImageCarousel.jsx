import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ImageCarousel = ({ images }) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {images.map((imageUrl, index) => (
        <motion.div
          initial="visible"
          animate="visible"
          exit="exit"
          variants={imageVariants}
          key={index}
        >
          <Image
            src={imageUrl}
            alt={`Image ${index + 1}`}
            fill
            // style={{ width: "100%", height: "auto" }}
            className="object-cover object-center"
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default ImageCarousel;
