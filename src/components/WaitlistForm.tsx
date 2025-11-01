"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import confetti from "canvas-confetti";

interface FormProps {
  onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (step === 1) {
      if (!formData.email || !isValidEmail(formData.email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      setStep(2);
      return;
    }

    try {
      setLoading(true);

      const promise = new Promise<{ name?: string }>((resolve, reject) => {
        const { name, email } = formData;

        fetch("/api/email", {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        })
          .then(async (response) => {
            if (!response.ok) {
              const data = await response.json();
              // Use error message from API (Loops or Upstash)
              reject(data.error || "An error occurred");
              return;
            }
            resolve({ name });
          })
          .catch((error) => {
            reject(error);
          });
      });

      toast.promise(promise, {
        loading: "Getting you on the waitlist... 🚀",
        success: (data: { name?: string }) => {
          setFormData({ email: "", name: "" });
          setSuccess(true);
          onSuccessChange?.(true);

          // Fireworks celebration effect
          setTimeout(() => {
            const duration = 5 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) =>
              Math.random() * (max - min) + min;

            const interval = window.setInterval(() => {
              const timeLeft = animationEnd - Date.now();

              if (timeLeft <= 0) {
                return clearInterval(interval);
              }

              const particleCount = 50 * (timeLeft / duration);
              confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
              });
              confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
              });
            }, 250);
          }, 100);

          const userName = data?.name || formData.name || "there";

          // Enhanced success toast with description
          toast.success(`Welcome aboard, ${userName}! 🎉`, {
            description: "You're all set! We'll notify you as soon as we launch.",
            duration: 5000,
          });

          return `Welcome aboard, ${userName}! 🎉`;
        },
        error: (error) => {
          // Display the error message directly from the API (Loops or Upstash)
          return typeof error === "string" ? error : "An error occurred. Please try again.";
        },
      });

      promise.finally(() => {
        setLoading(false);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ email: "", name: "" });
    setSuccess(false);
    onSuccessChange?.(false);
  };

  return (
    <div className="w-full relative">
      {success ? (
        <div className="p-4 flex justify-center items-center">
          <span className="text-muted-foreground text-sm">Thank you for joining!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative h-[4rem]">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="email-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex relative h-full"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  aria-label="Email address"
                  className="bg-input focus:bg-card border focus:border-primary/50 h-full w-full rounded-full border px-4 text-sm transition-all duration-300 outline-none shadow-sm focus:shadow-md focus:outline-none focus:ring-0"
                  onChange={handleChange}
                  disabled={loading}
                  required
                  value={formData.email}
                />
                <button
                  type="submit"
                  className="absolute right-2 font-medium top-2 bottom-2 bg-primary text-primary-foreground flex justify-center items-center gap-2 cursor-pointer px-4 text-sm rounded-full hover:opacity-90 hover:shadow-lg transition-all duration-300 disabled:opacity-50 shadow-md"
                  disabled={loading}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <g fill="currentColor">
                      <path d="M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z"></path>
                    </g>
                  </svg>
                  <span className="text-sm">Join waitlist</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="name-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex relative h-full"
              >
                <div className="flex items-center relative h-full w-full">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="bg-input focus:bg-card border-border/60 focus:border-primary/50 focus:ring-2 focus:ring-ring/20 focus:ring-offset-2 focus:ring-offset-background h-full w-full rounded-full border px-4  text-sm transition-all duration-300 outline-none shadow-sm focus:shadow-md"
                    disabled={loading}
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 font-medium top-2 bottom-2 bg-primary text-primary-foreground flex justify-center items-center cursor-pointer px-4 text-sm rounded-full hover:opacity-90 hover:shadow-lg transition-all duration-300 disabled:opacity-50 shadow-md"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <title>Loading spinner</title>
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      <span>Continue</span>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
