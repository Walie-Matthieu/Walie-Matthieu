"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending the message.");
      }

      setForm(initialFormState);
      setStatus("success");
      setFeedback("Thanks! Your message has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending the message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <p className="w-full max-w-sm text-center font-medium text-green-200">
        Thanks! Your message has been sent successfully. 🚀
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
        disabled={isSubmitting}
        className="border-2 font-bold border-white text-white px-4 py-2 rounded-xl hover:bg-white hover:text-red-900 transition w-fit self-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {feedback ? (
        <p
          className={
            status === "error"
              ? "text-red-200 text-sm text-center"
              : "text-green-200 text-sm text-center"
          }
        >
          {feedback}
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
