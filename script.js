const API_LINK = "https://api.adviceslip.com/advice";
const adviceNumberSpan = document.querySelector(".advice-number");
const adviceQuoteSlot = document.querySelector(".quote");
const fetchBtn = document.querySelector(".btn");

const generateNewAdvice = async () => {
  const response = await fetch(API_LINK);
  const {
    slip: { id, advice },
  } = await response.json();
  adviceNumberSpan.textContent = `ADVICE #${id}`;
  adviceQuoteSlot.textContent = advice;
};

fetchBtn.addEventListener("click", generateNewAdvice);
