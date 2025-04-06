import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submission handling will be added later
    alert("Thank you! Form submission isn't connected yet.");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4 text-center">Let's talk!</h1>
      <p className="text-center text-gray-600 mb-8">
        You can reach us anytime at <a href="mailto:enticebynishan@gmail.com" className="text-blue-600 hover:underline">enticebynishan@gmail.com</a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 h-32"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
