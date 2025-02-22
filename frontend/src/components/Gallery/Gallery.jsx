import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./Gallery.module.css";

const images = [
  "/assets/yys443bike-800x800.png",
  "/assets/yys443bike3-800x800.png",
  "/assets/yys443bike1-800x800.png",
  "/assets/yys443bike2-800x800.png",
  "/assets/yys443bike4-800x800.png",
  "/assets/yys443bike5-800x800.png",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [hintShown, setHintShown] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const firstImage = document.querySelector(`.${styles.galleryItem}`); 
      if (firstImage && !hintShown) {
        const rect = firstImage.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setShowHint(true);
          setHintShown(true); 
          setTimeout(() => setShowHint(false), 3000); 
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hintShown]); 

  return (
    <section id="gallery" className={styles.gallery}>
      <h2>Галерея</h2>

      {/* Підказка "Тиць" */}
      {showHint && (
        <div className={styles.hint}>
          👉 Тиць! Натисни на фото для перегляду
        </div>
      )}

      <div className={styles.galleryGrid}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Галерея ${i + 1}`}
            className={styles.galleryItem}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={index}
          styles={{
            container: {
              background: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(5px)",
            },
          }}
        />
      )}
    </section>
  );
}