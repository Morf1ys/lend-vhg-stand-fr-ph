import { useState } from "react";
import styles from "./OrderForm.module.css";
import { ToastContainer, toast } from "react-toastify";



export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!/^[а-яА-ЯєЄіІїЇґҐa-zA-Z\s'-]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "❌ Введіть коректне ім'я (лише літери)";
    }
    
    if (!/^(0\d{9})$/.test(formData.phone.trim())) {
      newErrors.phone = "❌ Введіть коректний номер (наприклад: 0972463721)";
    }

    if (formData.address.trim().length < 3) {
      newErrors.address = "❌ Введіть адресу доставки!";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`).focus();
      return;
    }

    const formattedPhone = `+38${formData.phone.trim()}`;

    const orderData = {
      name: formData.name.trim(),
      phone: formattedPhone,
      address: formData.address.trim(),
      product: "Тримач для телефону",
      price: 599,
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5006";  
      const response = await fetch(`${API_URL}/send-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
       body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(" Замовлення успішно надіслано!", { position: "top-center" });
        setFormData({ name: "", phone: "", address: "" });
        setErrors({});
      } else {
        toast.error("❌ Помилка при відправці замовлення", { position: "top-center" });
      }
    } catch (error) {
      toast.error("❌ Серверна помилка. Спробуйте пізніше", { position: "top-center" });
    }
  };

  return (
   <div id="order" className={styles.orderFormContainer}>
    <ToastContainer position="top-center" autoClose={3000} />
    <h2>📦 Оформлення замовлення</h2>
    <form className={styles.orderForm} onSubmit={handleSubmit}>
        <label>
          Ім'я:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? styles.errorInput : ""}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </label>

        <label>
          Телефон:
          <input
            type="tel"
            name="phone"
            placeholder="0972463721"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={errors.phone ? styles.errorInput : ""}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </label>

        <label>
          Адреса доставки:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className={errors.address ? styles.errorInput : ""}
          />
          {errors.address && <span className={styles.errorText}>{errors.address}</span>}
        </label>

        <button type="submit" className={styles.submitButton}>🚀 Підтвердити замовлення</button>
      </form>
    </div>
  );
}