import styles from "./Features.module.css";
import { IoShieldCheckmark, IoSpeedometer, IoConstruct, IoWater } from "react-icons/io5";

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.title}>Чому варто обрати цей тримач?</h2>
      <div className={styles.featureList}>
        <div className={styles.feature}>
          <IoShieldCheckmark className={styles.icon} />
          <h3>Надійна фіксація</h3>
          <p>Ваш телефон залишиться на місці навіть на нерівних дорогах.</p>
        </div>
        <div className={styles.feature}>
          <IoSpeedometer className={styles.icon} />
          <h3>Зручне регулювання</h3>
          <p>Можна швидко налаштувати кут нахилу для зручного перегляду.</p>
        </div>
        <div className={styles.feature}>
          <IoConstruct className={styles.icon} />
          <h3>Легкий монтаж</h3>
          <p>Установка займає менше хвилини без додаткових інструментів.</p>
        </div>
        <div className={styles.feature}>
          <IoWater className={styles.icon} />
          <h3>Водостійкий</h3>
          <p>Стійкий до дощу та пилу – ідеально для будь-якої погоди.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;