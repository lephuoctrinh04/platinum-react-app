import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Your message has been sent successfully.");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="container page-section">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Send us your message or feedback through this form.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="6"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>

      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
    </main>
  );
}

export default Contact;