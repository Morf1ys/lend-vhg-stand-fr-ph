import styles from "./index.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import CTA from "./components/CTA/CTA";
import HowToOrder from "./components/HowToOrder/HowToOrder";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import { OrderForm } from "./components/OrderForm/OrderForm";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function sendOrderToTelegram(orderData) {
  const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN";
  const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";
  const message = `
📦 *Нове замовлення!*\n
👤 *Ім'я:* ${orderData.name}\n
📞 *Телефон:* ${orderData.phone}\n
📍 *Адреса:* ${orderData.address}\n
🛍 *Товар:* Тримач для телефону\n
💰 *Сума:* 599 грн
  `;

  fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Відправлено в Telegram:", data))
    .catch((err) => console.error("Помилка відправки:", err));
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className={styles.main}>
      <Features /> 
        <Gallery />
        <HowToOrder />
        <Reviews />
        <FAQ/>
        <CTA />
        <OrderForm onSubmit={sendOrderToTelegram} />
      </main>
      <Footer />
      <ScrollToTop/>
    </>
  );
}