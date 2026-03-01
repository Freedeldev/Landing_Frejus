const images = document.querySelectorAll(".gallery-premium img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});
