const itemsFruit = document.querySelector(".items-fruti");
const arraySlider = [
  "../imgs/cat-1.jpg.webp",
  "../imgs/cat-2.jpg.webp",
  "../imgs/cat-5.jpg.webp",
  "../imgs/cat-3.jpg.webp",
  "../imgs/cat-4.jpg.webp",
  "../imgs/cat-5.jpg.webp",
];

function createSliderItems() {
  arraySlider.forEach((item, index) => {
    itemsFruit.innerHTML += `
      <div data-index="${index}" class="item-card" style="background-image:url(${item});">
        <a href="">Fresh Fruit</a>
      </div>
    `;
  });

  // Duplicate items for smooth scrolling
  arraySlider.forEach((item, index) => {
    itemsFruit.innerHTML += `
      <div data-index="${
        index + arraySlider.length
      }" class="item-card" style="background-image:url(${item});">
        <a href="">Fresh Fruit</a>
      </div>
    `;
  });
}

function startSlider() {
  let scrollAmount = 0;
  const scrollStep = 300;
  const maxScroll = itemsFruit.scrollWidth / 2;
  console.log(maxScroll);
  setInterval(() => {
    scrollAmount += scrollStep;
    itemsFruit.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    if (scrollAmount >= maxScroll) {
      scrollAmount = 0;
      itemsFruit.scrollTo({
        left: scrollAmount,
        behavior: "auto",
      });
    }
  }, 1000);
}

createSliderItems();
startSlider();
