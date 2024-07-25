/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Thundercloud':"url('https://t3.ftcdn.net/jpg/05/64/04/18/360_F_564041870_iGZq5SD8qI9SU6VkXzH0xL91IsC71iHH.jpg')"
      }
    },
  },
  plugins: [],
}