"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Placeholder: integrate with email service (ConvertKit, Mailchimp, etc.)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-lavender/40 via-blush/30 to-mint/30 rounded-cozy mx-4 sm:mx-6 lg:mx-8 my-16 p-10 sm:p-14">
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <span className="text-3xl mb-4 block">📬</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-cocoa">
          Get New Coloring Pages Every Week!
        </h2>
        <p className="mt-3 text-cocoa/70">
          Join our cozy newsletter and never miss a free printable. No spam, just cute coloring pages! ✨
        </p>

        {status === "success" ? (
          <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-mint text-cocoa font-medium">
            <span>🎉</span> You&apos;re in! Check your inbox for your first coloring page.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-5 py-3 rounded-pill bg-white border border-blush/50 focus:border-rose focus:ring-2 focus:ring-rose/20 outline-none text-cocoa placeholder:text-cocoa/40 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto px-6 py-3 rounded-pill bg-rose text-white font-semibold hover:bg-rose/90 transition-all disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Sending..." : "Subscribe ✨"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
