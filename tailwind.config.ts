import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0B0F14",
        panel: "#12171F",
        panel2: "#18202A",
        panel3: "#202A36",
        line: "#232D3B",
        lineHover: "#3A4A5E",
        ink: "#F0F4F8",
        mute: "#94A1B2",
        muteDark: "#606D80",
        amber: "#F5C827",
        amberGlow: "rgba(245, 200, 39, 0.15)",
        blue: "#3B82F6",
        blueGlow: "rgba(59, 130, 246, 0.15)",
        teal: "#14B8A6",
        tealGlow: "rgba(20, 184, 166, 0.15)",
        emerald: "#10B981",
        violet: "#8B5CF6",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "12px",
        pill: "9999px",
      },
      boxShadow: {
        glowAmber: "0 0 24px -4px rgba(245, 200, 39, 0.25)",
        glowBlue: "0 0 24px -4px rgba(59, 130, 246, 0.25)",
        glowTeal: "0 0 24px -4px rgba(20, 184, 166, 0.25)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.4)",
        cardHover: "0 12px 30px -4px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        radar: "radar 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        radar: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
