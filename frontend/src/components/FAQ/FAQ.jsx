import { useState } from "react";
import styles from "./FAQ.module.css";

const questions = [
  {
    question: "Яка доставка і скільки вона займає?",
    answer: "Ми доставляємо замовлення Новою Поштою протягом 1-3 днів по всій Україні.",
  },
  {
    question: "Чи можна оплатити при отриманні?",
    answer: "Так, ви можете оплатити замовлення при отриманні у відділенні Нової Пошти.",
  },
  {
    question: "Які гарантії на товар?",
    answer: "Ми надаємо 14 днів гарантії на обмін або повернення товару.",
  },
  {
    question: "Чи підійде тримач для мого телефону?",
    answer: "Наш тримач універсальний і підходить для більшості смартфонів розміром від 4.7 до 7 дюймів.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="fag" className={styles.faq}>
      <h2>Часті запитання</h2>
      <div className={styles.faqContainer}>
        {questions.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button className={styles.question} onClick={() => toggleQuestion(index)}>
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className={styles.answer}>{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}