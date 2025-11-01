"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  User,
  Mail as MailIcon,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function FormField() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setStatus({ type: "", message: "" });

    const submitData = new FormData(event.target);
    submitData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    );

    const object = Object.fromEntries(submitData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! I'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const isFormValid =
    formData.name && formData.email && formData.contact && formData.message;

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Form - Hidden when status message is shown */}
      <form
        onSubmit={handleSubmit}
        className={`space-y-6 transition-opacity duration-300 ${
          status.message ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Name Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <User className="w-5 h-5 text-purple-400 group-focus-within:text-purple-300 transition-colors" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-white/5 backdrop-blur border border-white/10 focus:border-purple-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:bg-white/10"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <MailIcon className="w-5 h-5 text-purple-400 group-focus-within:text-purple-300 transition-colors" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="w-full bg-white/5 backdrop-blur border border-white/10 focus:border-purple-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:bg-white/10"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <Phone className="w-5 h-5 text-purple-400 group-focus-within:text-purple-300 transition-colors" />
          </div>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full bg-white/5 backdrop-blur border border-white/10 focus:border-purple-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:bg-white/10"
            required
          />
        </div>

        {/* Message Field */}
        <div className="relative group">
          <div className="absolute z-10 top-4 left-0 pl-4 pointer-events-none">
            <MessageSquare className="w-5 h-5 text-purple-400 group-focus-within:text-purple-300 transition-colors" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full bg-white/5 backdrop-blur border border-white/10 focus:border-purple-500/50 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 resize-none focus:bg-white/10"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid || isSending}
          className="group relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 disabled:shadow-none overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </span>

          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </button>
      </form>

      {/* Success/Error Message Overlay - Positioned absolutely over the form */}
      {status.message && (
        <div className="absolute inset-0 min-h-[500px] bg-gradient-to-br from-purple-900/98 to-pink-900/98 backdrop-blur-xl rounded-2xl border border-purple-500/30 flex flex-col items-center justify-center p-8 z-50">
          {status.type === "success" ? (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="bg-green-500/20 p-4 rounded-full mb-6 animate-bounce">
                <CheckCircle className="w-16 h-16 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Message Sent!
              </h3>
              <p className="text-gray-300 text-center mb-8 max-w-md">
                {status.message}
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <div className="bg-red-500/20 p-4 rounded-full mb-6">
                <AlertCircle className="w-16 h-16 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Oops!</h3>
              <p className="text-gray-300 text-center mb-8 max-w-md">
                {status.message}
              </p>
              <button
                onClick={() => setStatus({ type: "", message: "" })}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
