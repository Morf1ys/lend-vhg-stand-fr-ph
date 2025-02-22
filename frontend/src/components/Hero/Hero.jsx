import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import phoneHolder from "../../assets/yys443bike-800x800.png";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60); 
  const [stock, setStock] = useState(12); 

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.textBlock}>
        <h1>Тримач для телефону – твій ідеальний компаньйон у дорозі</h1>
        <p>Надійне кріплення для велосипеда або мотоцикла. Безпечний, стильний та зручний.</p>

        <div className={styles.ctaDesktop}>
          <div className={styles.timer}>
            ⏳ Акція закінчується через: <strong>{formatTime(timeLeft)}</strong>
          </div>

          <div className={styles.stock}>
            📦 Залишилось: <strong>{stock}</strong> шт.
          </div>

          <button className={styles.buyButton} onClick={scrollToOrder}>
            Купити зараз
          </button>
        </div>
      </div>

      <div className={styles.imageBlock}>
        <img src={phoneHolder} alt="Тримач для телефону" />
      </div>

      <div className={styles.ctaMobile}>
        <div className={styles.timer}>
          ⏳ Акція закінчується через: <strong>{formatTime(timeLeft)}</strong>
        </div>

        <div className={styles.stock}>
          📦 Залишилось: <strong>{stock}</strong> шт.
        </div>

        <button className={styles.buyButton} onClick={scrollToOrder}>
          Купити зараз
        </button>
      </div>
    </section>
  );
}