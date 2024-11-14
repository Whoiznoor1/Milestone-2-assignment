






"use client";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Create a message that will be sent via WhatsApp
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nOrder: ${message}`;

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/<923141340432>?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="contact" className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-6">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-orange-500 mb-4">
        Dost kehne se dost nahin ban jata Pardhan Ji,
        <br /> Momos khilane parte hain!
      </h1>
      <h1 className="text-xl md:text-2xl font-bold text-center text-white mb-4">
        So what are you waiting for?
      </h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mt-8">
        <h2 className="text-xl font-semibold text-center mb-4 text-orange-400">Just order it!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 font-medium">Your Order</label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded font-semibold hover:bg-orange-600 transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
