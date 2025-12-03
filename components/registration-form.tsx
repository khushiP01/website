"use client";

export function RegistrationForm() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white mb-4">Register Now</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-400/30 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}

