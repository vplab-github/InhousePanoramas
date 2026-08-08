const sliders = document.querySelectorAll("[data-slider]");

sliders.forEach((slider) => {
  const input = slider.querySelector(".slider-control");
  const baseImage = slider.querySelector(".base-image");
  const maskImage = slider.querySelector(".mask-layer img");

  const updateSlider = () => {
    slider.style.setProperty("--position", `${input.value}%`);
  };

  const alignMask = () => {
    if (!baseImage?.naturalWidth || !maskImage?.naturalWidth) {
      return;
    }

    const isSplitMask =
      Math.abs(maskImage.naturalWidth - baseImage.naturalWidth * 2) <= 2 &&
      Math.abs(maskImage.naturalHeight - baseImage.naturalHeight) <= 2;

    maskImage.classList.toggle("split-mask-source", isSplitMask);
  };

  input.addEventListener("input", updateSlider);
  baseImage.addEventListener("load", alignMask);
  maskImage.addEventListener("load", alignMask);
  updateSlider();
  alignMask();
});