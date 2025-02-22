import styles from "./HowToOrder.module.css";
import { FaBox, FaClipboardList, FaPhoneAlt, FaTruck } from "react-icons/fa"; 

const steps = [
  { icon: <FaBox />, title: "Оберіть товар", desc: "Перегляньте деталі та оберіть свій тримач." },
  { icon: <FaClipboardList />, title: "Заповніть форму", desc: "Вкажіть ім'я, телефон та адресу доставки." },
  { icon: <FaPhoneAlt />, title: "Очікуйте дзвінок", desc: "Менеджер підтвердить ваше замовлення." },
  { icon: <FaTruck />, title: "Отримайте товар", desc: "Отримайте товар протягом 1-3 днів." },
];

export default function HowToOrder() {
  return (
    <section id="howorder" className={styles.howToOrder}>
      <h2>Як замовити?</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.icon}>{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}