(() => {
  const drawer = document.getElementById("drawer");
  const overlay = document.querySelector(".overlay");
  const btnInactive = document.querySelector(".btn-inactive");
  const btnActive = document.querySelector(".btn-active");

  btnActive.addEventListener("click", (e) => {
    drawer.classList.add("opened");
  });

  btnInactive.addEventListener("click", (e) => {
    drawer.classList.remove("opened");
  });

  overlay.addEventListener("click", (e) => {
    drawer.classList.remove("opened");
  });
})();
