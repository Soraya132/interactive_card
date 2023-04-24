/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode:"class",
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage:{

        },
        screens:{
          "sm":"400px",
          "md":"600px",
          "lg":"1000px"
        },
        colors:{
          "Lineargradient(activeinputborder)": "hsl(249, 99%, 64%)",
          "border":"hsl(278, 94%, 30%)",
          "Red(inputerrors)":" hsl(0, 100%, 66%)",
          "Lightgrayishviolet": "hsl(270, 3%, 87%)",
          "Darkgrayishviolet": "hsl(279, 6%, 55%)",
          "Verydarkviolet": "hsl(278, 68%, 11%)",
          "White": "hsl(0, 0%, 100%)"
        },
        fontFamily:{
          burtons:"burtons",
        }
      },
    },
    plugins: [],
}