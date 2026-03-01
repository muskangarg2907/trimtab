"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <main className="section-shell pb-20 pt-10 md:pt-14">
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="panel p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--muted)]">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 md:text-4xl">
            Start a strategic conversation for your leadership agenda.
          </h1>
          <p className="mt-6 text-base leading-8 text-[color:var(--muted)]">
            Share your organizational context and priorities. Our team will follow up with an executive-level discussion focused on outcomes, timing, and scope.
          </p>

          <div className="mt-10 space-y-4 border-t border-[color:var(--border)] pt-6 text-sm">
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              <div>
                <p className="text-slate-100">Email</p>
                <p className="text-[color:var(--muted)]">advisory@trimtab.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--accent)]" />
              <div>
                <p className="text-slate-100">Response Window</p>
                <p className="text-[color:var(--muted)]">Within 1 business day</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="panel p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-slate-100">Executive Contact Form</h2>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Complete the form below and we’ll connect the right advisory lead to your request.
          </p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-200">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="field"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-200">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="field"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="field"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="organization" className="mb-2 block text-sm font-medium text-slate-200">
                  Organization
                </label>
                <input
                  id="organization"
                  type="text"
                  className="field"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="topic" className="mb-2 block text-sm font-medium text-slate-200">
                Priority Topic
              </label>
              <input
                id="topic"
                type="text"
                className="field"
                placeholder="e.g., Leadership alignment, transformation execution"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                Context
              </label>
              <textarea
                id="message"
                rows={5}
                className="field"
                placeholder="Share your current context and desired outcomes"
              />
            </div>

            <button type="submit" className="btn-primary w-full md:w-auto">
              Submit Inquiry
            </button>

            <p
              aria-live="polite"
              className={`text-sm ${submitted ? "text-emerald-300" : "text-[color:var(--muted)]"}`}
            >
              {submitted
                ? "Thank you. Your inquiry has been received, and our team will contact you shortly."
                : "Your details are used only to schedule a confidential advisory conversation."}
            </p>
          </form>
        </section>
      </section>
    </main>
  );
}
