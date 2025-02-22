import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brand}>📱 PhoneHolder – Універсальний тримач для телефону</p>
        
        <ul className={styles.links}>
          <li><a href="/privacy-policy.html">Політика конфіденційності</a></li>
          <li><a href="/terms.html">Умови використання</a></li>
          <li><a href="/shipping.html">Доставка та оплата</a></li>
        </ul>

        <div className={styles.contacts}>
          <p>📞 <a href="tel:+380677415011">+380 67 741 50 11</a></p>
          <p>📞 <a href="tel:+380937508134">+380 93 750 81 34</a></p>
                  
          <p>📩 <a href="mailto:selenka522@gmail.com">selenka522@gmail.com</a></p>
        </div>
              <div className={styles.socials}>
                  <a href="https://t.me/VinHoomGoods" target="_blank" rel="noopener noreferrer">📷 Telegram</a>
        </div>

        <p className={styles.copyright}>© 2024 PhoneHolder. Усі права захищені.</p>
      </div>
    </footer>
  );
}