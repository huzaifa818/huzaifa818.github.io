document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu?.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "" : "flex";
  if (nav.style.display === "flex") {
    nav.style.position = "absolute";
    nav.style.top = "72px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "18px 6%";
    nav.style.flexDirection = "column";
    nav.style.background = "#070a0f";
    nav.style.borderBottom = "1px solid #202a38";
  }
});
