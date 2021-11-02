const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const contrastButton = document.getElementById("contrast");
const body = document.body;
// Apply the cached theme on reload
const theme = localStorage.getItem("theme");
if (theme) {
  let = bodyValue = body.classList.value;
  body.classList.replace(bodyValue, theme);
}
// Button Event Handlers
darkButton.onclick = () => {
  let = bodyValue = body.classList.value;
  body.classList.replace(bodyValue, "theme-dark");
  localStorage.setItem("theme", "theme-dark");
};

lightButton.onclick = () => {
  let = bodyValue = body.classList.value;
  body.classList.replace(bodyValue, "theme-light");
  localStorage.setItem("theme", "theme-light");
};

contrastButton.onclick = () => {
  let = bodyValue = body.classList.value;
  body.classList.replace(bodyValue, "theme-contrast");
  localStorage.setItem("theme", "theme-contrast");
};
