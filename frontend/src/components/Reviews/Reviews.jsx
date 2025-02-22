import { useState } from "react";
import styles from "./Reviews.module.css";
import { FaStar } from "react-icons/fa";

const reviews = [
{
    id: 1,
    name: "Олена М.",
    text: "Дуже зручний! Кріплення міцне, легко встановлюється. Товаром задоволена!",
    rating: 5,
    img: "/public/assets/208580_2_trinixy_ru.jpg",
  },
  {
    id: 2,
    name: "Андрій К.",
    text: "Чудовий тримач! Використовую на велосипеді, навіть по нерівній дорозі телефон не випадає.",
    rating: 5,
    img: "/public/assets/depositphotos_189897952-stock-photo-athletic-guy-biker-cycling-clothes.jpg", 
  },
  
  {
    id: 3,
    name: "Максим П.",
    text: "Користуюсь тиждень, все супер. Тримає телефон надійно, навіть під час дощу!",
    rating: 4,
    img: "/public/assets/мо-о-ой-парень-на-ве-осипе-е-31523339.webp",
    },
    {
  id: 4,
  name: "Наталія В.",
  text: "Гарна якість за свою ціну. Зручно встановлюється, не залишає подряпин на кермі.",
  rating: 5,
  img: "/public/assets/240x_zh_3_1sayt.jpg"
    },
    {
  id: 4,
  name: "Олена С.",
  text: "Дуже зручний тримач! Телефон не хитається, легко кріпиться та регулюється.",
  rating: 5,
  img: "/public/assets/800xdsc03113.jpg"
},
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className={styles.reviews}>
      <h2>Що кажуть наші клієнти?</h2>
      <div className={styles.reviewCard}>
        <img src={reviews[index].img} alt={reviews[index].name} className={styles.reviewImage} />
        <div className={styles.reviewText}>
          <h3>{reviews[index].name}</h3>
          <p>{reviews[index].text}</p>
          <div className={styles.stars}>
            {[...Array(reviews[index].rating)].map((_, i) => (
              <FaStar key={i} color="#FFD700" />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={prevReview}>←</button>
        <button onClick={nextReview}>→</button>
      </div>
    </section>
  );
}