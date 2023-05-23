import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "gray-50": "#F7F7F8",
      "gray-200": "#D9D9E3",
      "gray-800": "#343541"
    }
  },
  plugins: [],
} satisfies Config;
