/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {},
    fontFamily: {
      nunito: ['"Nunito Sans"'],
    },
    backgroundImage: {
      moon: 'url("../images/moon.svg")',
      darkmoon: 'url("../images/darkmoon.svg")',
      search: 'url("../images/search.svg")',
      darksearch: 'url("../images/darksearch.svg")',
      arrow: 'url("../images/arrow.svg")',
      darkarrow: 'url("../images/darkarrow.svg")',
    },
    boxShadow: {
      header: " 0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
      input: " 0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
      card: " 0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
    },
    backgroundPosition: {
      searchpos: "left 32px center",
      selectsm: "right 19px center",
      selectlg: "right 18px center",
    },
    colors: {
      headerbg: "#2B3844",
      body: "#202C36",
    },
  },
  plugins: [],
};
