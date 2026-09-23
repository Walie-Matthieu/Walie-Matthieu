"use client";

import { useState, FormEvent } from "react";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `form` to /api/contact once the email API is wired up
    setSubmitted(true);
    setForm(initialFormState);
  };

  if (submitted) {
    return (
      <p className="w-full max-w-sm text-center font-medium">
        Thanks! Your message is ready to go as soon as the messaging system is connected. 🚀
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm flex flex-col gap-3"
    >
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
        className="bg-white/10 border border-white text-white placeholder-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:bg-white/20"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="bg-white/10 border border-white text-white placeholder-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:bg-white/20"
      />
      <input
        type="text"
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
        className="bg-white/10 border border-white text-white placeholder-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:bg-white/20"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
        required
        rows={4}
        className="bg-white/10 border border-white text-white placeholder-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:bg-white/20 resize-none"
      />
      <button
        type="submit"
        className="border-2 font-bold border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-red-900 transition w-fit self-center"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
