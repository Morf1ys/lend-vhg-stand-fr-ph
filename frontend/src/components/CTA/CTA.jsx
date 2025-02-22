import styles from "./CTA.module.css";
import { useState, useEffect } from "react";

export default function CTA() {
  const [stock, setStock] = useState(12);

  useEffect(() => {
    // змушуємо фомойобити
    const timer = setInterval(() => {
      setStock((prevStock) => (prevStock > 1 ? prevStock - 1 : prevStock));
    }, 13000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2>🔥 Спеціальна пропозиція!</h2>
        <p>Купуйте тримач для телефону за суперціною, поки діє знижка!</p>

        {/* Блок ціни */}
        <div className={styles.priceBlock}>
          <span className={styles.oldPrice}>1199 грн</span>
          <span className={styles.newPrice}>599 грн</span>
        </div>

        {/* Кнопка */}
        <button className={styles.buyButton} onClick={scrollToOrder}>
          Купити зараз
        </button>

        {/* Переваги */}
        <ul className={styles.benefits}>
          <li>🚚 <strong>Безкоштовна доставка</strong></li>
          <li>✅ Оплата при отриманні</li>
          <li>🔒 14 днів на повернення</li>
          <li>⭐️⭐️⭐️⭐️⭐️ 4.9/5 – 1200+ задоволених клієнтів</li>
          <li>❗️ Обмежена кількість: <strong>{stock} шт. на складі</strong></li>
        </ul>
      </div>
    </section>
  );
}