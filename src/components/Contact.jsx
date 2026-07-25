import { useState } from "react";
import { motion } from "framer-motion";
import { developer } from "../data/siteData";

const rawApiUrl = (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, "");
const API_URL = rawApiUrl.endsWith("/api") ? rawApiUrl : `${rawApiUrl}/api`;

/**
 * Contact section - Backend contact form with validation, loading, and toast messaging
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please complete all fields before sending.");
      setStatus("error");
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!validateForm()) return;
    setStatus("loading");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result?.error || "Failed to send message. Please try again later.",
        );
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message || "Failed to send message. Please try again later.",
      );
    }
  };

  const socials = [
    { name: "GitHub", href: developer.social.github, icon: GitHubIcon },
    { name: "LinkedIn", href: developer.social.linkedin, icon: LinkedInIcon },
    { name: "Email", href: `mailto:${developer.email}`, icon: MailIcon },
    {
      name: "Phone",
      href: `tel:${developer.phone.replace(/\s/g, "")}`,
      icon: PhoneIcon,
    },
    { name: "Resume", href: developer.resumeUrl, icon: DocumentIcon },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-zinc-50 dark:bg-zinc-900/50"
    >
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-600 dark:text-zinc-400 text-center mb-4"
        >
          Have a project in mind or want to chat? Send a message.
        </motion.p>
        {(developer.email || developer.phone) && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-500 dark:text-zinc-500 text-center mb-10 text-sm"
          >
            {developer.phone && (
              <a
                href={`tel:${developer.phone.replace(/\s/g, "")}`}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {developer.phone}
              </a>
            )}
            {developer.phone && developer.email && " · "}
            {developer.email && (
              <a
                href={`mailto:${developer.email}`}
                className="hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                {developer.email}
              </a>
            )}
          </motion.p>
        )}
        {!developer.email && !developer.phone && <div className="mb-10" />}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 px-4 py-3 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              placeholder="Your message..."
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thank you! Your message has been received.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 disabled:opacity-50 transition-colors"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:justify-center"
        >
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/70 px-4 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 transition-colors"
              aria-label={name}
            >
              <Icon className="w-5 h-5" />
              {name}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zM4.5 5.81v12.69h15V5.81l-7.5 5.25-7.5-5.25zm7.5 6.24L19.5 6.75H4.5l7.5 5.3z" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M3.654 2.097a1.745 1.745 0 012.61-.163l2.65 2.65a1.745 1.745 0 01.163 2.608l-1.2 1.2a1.745 1.745 0 00-.532 1.47c.122.852.455 2.137 1.53 3.214 1.075 1.075 2.36 1.408 3.214 1.53a1.745 1.745 0 001.47-.532l1.2-1.2a1.745 1.745 0 012.608.163l2.65 2.65a1.745 1.745 0 01-.163 2.61l-2.2 2.2c-.66.66-1.654.859-2.523.476-2.373-.995-4.695-3.317-5.69-5.69-.383-.869-.184-1.864.476-2.523l2.2-2.2z" />
    </svg>
  );
}

function DocumentIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M6 2.25A2.25 2.25 0 003.75 4.5v15A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25v-12A2.25 2.25 0 0018 4.5H9.75A2.25 2.25 0 017.5 2.25H6zM8.25 6.75h7.5v1.5h-7.5v-1.5zm0 4.5h7.5v1.5h-7.5v-1.5zm0 4.5h4.5v1.5h-4.5v-1.5z" />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zm7.5 9.75a7.5 7.5 0 01-1.5 4.688c-.41-1.24-1.14-2.521-2.206-3.503A11.94 11.94 0 0019.5 12zm-7.5-7.5a7.5 7.5 0 014.688 1.5 11.94 11.94 0 00-2.215 3.218A11.96 11.96 0 0012 4.5zm-4.688 1.5A7.5 7.5 0 0112 4.5c.601 0 1.187.07 1.75.203A11.96 11.96 0 009.354 8.22 11.94 11.94 0 007.5 6zm-1.5 6a7.5 7.5 0 011.5-4.688 11.94 11.94 0 012.206 3.503 11.96 11.96 0 00-1.5 1.185A11.96 11.96 0 006 12zm1.5 4.688c.41-1.24 1.14-2.521 2.206-3.503a11.96 11.96 0 001.5 1.185 11.96 11.96 0 00-2.206 3.503A7.5 7.5 0 017.5 16.688z" />
    </svg>
  );
}
