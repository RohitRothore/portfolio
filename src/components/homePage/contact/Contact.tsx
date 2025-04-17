"use client";

import { Github, Linkedin, Twitter } from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I will get back to you soon.",
        });
        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact With Me
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I am available for freelance work. Connect with me via email or
            phone.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="p-8 rounded-xl shadow-2xl border md:w-5/12">
            <Image
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
              className="h-auto w-full mb-8 rounded-lg hover:scale-105 transition-all duration-300"
              alt="Experience 2024"
              height={176}
              width={400}
            />
            <h3 className="text-2xl font-semibold mb-2">Rohit Rathore</h3>
            <div className="space-y-2">
              <p className="text-lg mb-5">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div className="font-medium">
                Mobile No:{" "}
                <Link
                  href="tel:+916269551863"
                  className="hover:text-red-600 font-normal hover:underline"
                >
                  +91 6269551863
                </Link>
              </div>
              <div className="font-medium">
                Email:{" "}
                <Link
                  href="mailto:rohitrathorebanda123@gmail.com"
                  className="hover:text-red-600 font-normal hover:underline"
                >
                  rohitrathorebanda123@gmail.com
                </Link>
              </div>
              <p className="tracking-widest text-red-600 !my-6">FIND WITH ME</p>
              <div className="flex gap-x-8">
                <Link
                  href="https://github.com/RohitRothore"
                  className="p-4 group hover:from-red-600 hover:to-indigo-600 rounded bg-gradient-to-tr from-gray-300 to-white shadow-xl hover:-translate-y-1 transition duration-300"
                  target="_blank"
                >
                  <Github className="group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/rohit-rathore-7a764526b/"
                  className="p-4 group hover:from-red-600 hover:to-indigo-600 rounded bg-gradient-to-tr from-gray-300 to-white shadow-xl hover:-translate-y-1 transition duration-300"
                  target="_blank"
                >
                  <Linkedin className="group-hover:text-white" />
                </Link>
                <Link
                  href="https://twitter.com/Rohit_Rathore02"
                  className="p-4 group hover:from-red-600 hover:to-indigo-600 rounded bg-gradient-to-tr from-gray-300 to-white shadow-xl hover:-translate-y-1 transition duration-300"
                  target="_blank"
                >
                  <Twitter className="group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-lg shadow-2xl border md:w-7/12">
            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name <sup className="text-red-600">*</sup>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={50}
                  minLength={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <sup className="text-red-600">*</sup>
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={16}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <sup className="text-red-600">*</sup>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-lg transition-colors ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
