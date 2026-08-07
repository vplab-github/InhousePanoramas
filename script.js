const sliders = document.querySelectorAll("[data-slider]");

sliders.forEach((slider) => {
  const input = slider.querySelector(".slider-control");

  const updateSlider = () => {
    slider.style.setProperty("--position", `${input.value}%`);
  };

  input.addEventListener("input", updateSlider);
  updateSlider();
});
