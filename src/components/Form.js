"use client";
import { useState } from "react";

export default function Form() {
  const [message, setMessage] = useState(false);

  async function submitForm(event) {
    event.preventDefault();
    setMessage(false);

    let formData = new FormData(event.target);
    formData.append("service_id", process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID);
    formData.append("template_id", process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID);
    formData.append("user_id", process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID);

    let request = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
      method: "POST",
      body: formData,
    });

    if (request.status === 200) {
      setMessage("Wiadomość została wysłana. Dziękujemy!");
    } else {
      setMessage("Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.");
    }
  }

  return (
    <form onSubmit={() => submitForm(event)}>
      <label htmlFor="name">
        Imię i Nazwisko
        <input type="text" name="name" id="name" required />
      </label>
      <label htmlFor="email">
        Adres Email
        <input type="email" name="email" id="email" required />
      </label>
      <label htmlFor="phone">
        Numer Telefonu
        <input type="tel" name="phone" id="phone" required />
      </label>
      <label htmlFor="person">
        Ilość Osób
        <input type="number" name="person" id="person" required />
      </label>
      <label htmlFor="dateFrom">
        Data Przyjazdu
        <input type="date" name="dateFrom" id="dateFrom" required />
      </label>
      <label htmlFor="dateTo">
        Data Wyjazdu
        <input type="date" name="dateTo" id="dateTo" required />
      </label>
      <label htmlFor="message">
        Wiadomość
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </label>

      {message && <p>{message}</p>}

      <button type="submit">Wyślij Wiadomość</button>
    </form>
  );
}
