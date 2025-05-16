"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_27ha8qx",
        "template_vydmmsz",
        form.current,
        "EzuMJICyFo3hymbQb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();

          // 3 সেকেন্ড পরে status খালি করে দাও
          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");

          // 3 সেকেন্ড পরে error message খালি করে দাও
          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <section className="w-full py-16 bg-[#0d0d0d] text-white">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-8">
        {/* Corner-Aligned Heading like About Me */}
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white">
            Contact Me
          </h2>
          <div className="flex flex-col gap-1">
            <span className="w-16 h-[4px] bg-rose-500 rounded-full"></span>
            <span className="w-8 h-[4px] bg-rose-500 rounded-full"></span>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-8 py-3 bg-rose-600 hover:bg-rose-700 transition rounded-full font-semibold shadow-md"
          >
            Send Message
          </button>
          {status && (
            <p className="mt-4 text-sm text-green-400 animate-pulse">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
