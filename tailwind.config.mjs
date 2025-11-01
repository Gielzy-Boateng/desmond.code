// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
// //     //   colors: {
// //     //     background: "var(--background)",
// //     //     foreground: "var(--foreground)",
// //     //   },
// //     //   borderRadius: {
// //     //     lg: "var(--radius)",
// //     //     md: "calc(var(--radius) - 2px)",
// //     //     sm: "calc(var(--radius) - 4px)",
// //     //   },
// //     // },
// //   },
// //   plugins: [require("tailwindcss-animate")],
// }
// 		}
// 		}

// /** @type {import('tailwindcss').Config} */
// export default {
// 	darkMode: "class", // Enables dark mode support
// 	content: [
// 			"./pages/**/*.{js,ts,jsx,tsx,mdx}", // Scans your `pages` directory for class usage
// 			"./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans your `components` directory
// 			"./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans your `app` directory for class usage
// 	],
// 	theme: {
// 			extend: {}, // Empty for now, but ready for future customizations
// 	},
// 	plugins: [], // Plugins can be added here if needed
// };

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class", // Enables dark mode support
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Scans your `pages` directory for class usage
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Scans your `components` directory
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Scans your `app` directory for class usage
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: 0.4, transform: "scale(0.98)" },
          "100%": { opacity: 0.8, transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
      },
    }, // Empty for now, but ready for future customizations
  },
  plugins: [], // Plugins can be added here if needed
};

export default config;
