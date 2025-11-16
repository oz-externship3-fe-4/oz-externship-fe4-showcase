module.exports = {
  theme: {
    extend: {
      keyframes: {
        cursorBlink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0 },
        },
      },
      animation: {
        cursorBlink: "cursorBlink 0.8s step-start infinite",
      },
    },
  },
};
