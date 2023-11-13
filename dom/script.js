export const main = () => {
  // このコードを完成させてください
  const atag = document.querySelector("body > a");
  console.log(atag);
  atag.textContent = "REDIMPULZ";
  atag.href = "https://redimpulz.com";
  const sec = document.querySelector("body > section");
  const newp = document.createElement("p");
  newp.textContent = "We hope you enjoy JavaScript.";
  newp.classList.add("highlight");
  sec.appendChild(newp);
  document.querySelector("#temp").remove();
};

window.addEventListener("load", main);
