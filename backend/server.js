import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5006;

//  Корсимо
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.post("/send-order", async (req, res) => {
  try {
    const { name, phone, address, product, price } = req.body;
    if (!name || !phone || !address) {
      return res.status(400).json({ error: "Всі поля обов’язкові!" });
    }

    const message = `
📦 *Нове замовлення!*\n
👤 *Ім'я:* ${name}\n
📞 *Телефон:* ${phone}\n
📍 *Адреса:* ${address}\n
🛍 *Товар:* ${product}\n
💰 *Сума:* ${price} грн`;

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });

    res.json({ success: true, message: "Замовлення відправлено!" });
  } catch (error) {
    console.error("Помилка при надсиланні замовлення:", error);
    res.status(500).json({ error: "Помилка сервера" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => console.log(`Сервер запущено на порту ${PORT}`));
