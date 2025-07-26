"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    } else {
      alert("please fill in name and email and message ")
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white flex items-center justify-center">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold mb-2 text-blue-500">Contact Us</h1>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border rounded text-gray-900 placeholder-gray-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded text-gray-900 placeholder-gray-400"
          />

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="p-3 border rounded text-gray-900 placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-600">Thank you, {name}!</h2>
          <p className="mt-2 text-gray-800">We’ve received your message:</p>
          <blockquote className="mt-2 italic text-gray-600">"{message}"</blockquote>
          <p className="mt-2 text-sm text-gray-500">We'll get back to you at {email}.</p>
        </div>
      )}
    </div>
  );
}
