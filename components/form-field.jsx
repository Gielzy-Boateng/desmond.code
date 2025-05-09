"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Spinner from "./Spinner";

export default function FormField() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  // const pathname = usePathname();

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    setEmail("");
    setName("");
    setText("");

    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const object = Object.fromEntries(formData);
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
        // .log(result);
        setMessage(
          "Thank you for sending me your message. I will get in touch with you."
        );
      } else {
        setMessage("Form Submission failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setMessage("There was an error Submitting the form");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 relative z-10 mt-20">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        name="name"
        className="w-full placeholder:text-[#2F9AC9] font-medium p-4 rounded-xl outline-none ring-blue-600 text-[14px] text-stone-900 "
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="w-full placeholder:text-[#2F9AC9] p-4 rounded-xl font-medium outline-none  text-[14px] focus:ring-offset-2 text-stone-900 "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Contact"
        name="tel"
        className="w-full placeholder:text-[#2F9AC9] p-4 rounded-xl font-medium outline-none  text-[14px] focus:ring-offset-2 text-stone-900 "
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <textarea
        placeholder="Write a message"
        className="w-full h-[130px] placeholder:text-[#2F9AC9] resize-none p-4 rounded-xl font-medium outline-none text-[14px] focus:ring-offset-2 text-stone-900"
        value={text}
        name="message"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        disabled={!email || isSending || message}
        className={`${
          !email ? "cursor-not-allowed" : "cursor-pointer"
        } w-full bg-[#38126D] text-white hover:bg-black py-2 transition-all duration-200 rounded-xl`}
      >
        {isSending ? <Spinner /> : "Submit"}
      </button>

      {message && (
        <div className="absolute inset-0 bg-gray-300 rounded-xl bg-opacity-90 w-full  text-[#38126D] font-semibold h-full -translate-y-5 flex flex-col items-center justify-center space-y-2 ">
          <p className="p-2 text-center text-[20px]">{message}</p>
          <Link
            href="/"
            className="bg-[#B336FF] py-2 px-4 rounded-full text-white text-base"
          >
            Go back to Home
          </Link>
        </div>
      )}
    </form>
  );
}
