"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Sparkles } from "lucide-react";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-20 h-20 mx-auto mb-6 text-purple-400" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl mb-4 text-white"
        >
          You&apos;re In! 🎉
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-purple-200 text-lg mb-2"
        >
          We&apos;ve sent confirmation details to
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white mb-8"
        >
          {formData.email}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-purple-300 text-sm"
        >
          See you on Nov 29th at 6:30 PM!
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto space-y-6 px-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-purple-200 text-sm">
          Full Name
        </Label>
        <motion.div
          animate={{
            scale: focusedField === "name" ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300/50 focus:border-purple-400 focus:ring-purple-400/50 h-14 text-lg backdrop-blur-sm transition-all"
            placeholder="Enter your full name"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-purple-200 text-sm">
          Email Address
        </Label>
        <motion.div
          animate={{
            scale: focusedField === "email" ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300/50 focus:border-purple-400 focus:ring-purple-400/50 h-14 text-lg backdrop-blur-sm transition-all"
            placeholder="you@university.edu"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="university" className="text-purple-200 text-sm">
          University
        </Label>
        <motion.div
          animate={{
            scale: focusedField === "university" ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <Input
            id="university"
            name="university"
            type="text"
            required
            value={formData.university}
            onChange={handleChange}
            onFocus={() => setFocusedField("university")}
            onBlur={() => setFocusedField(null)}
            className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300/50 focus:border-purple-400 focus:ring-purple-400/50 h-14 text-lg backdrop-blur-sm transition-all"
            placeholder="Your university name"
          />
        </motion.div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="pt-4"
      >
        <Button
          type="submit"
          className="w-full h-14 bg-white text-purple-900 hover:bg-purple-50 transition-all duration-300 shadow-lg shadow-purple-500/30"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Secure My Spot
        </Button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-purple-300/80 text-xs text-center pt-2"
      >
        Limited to first 50 students • Free admission
      </motion.p>
    </motion.form>
  );
}

