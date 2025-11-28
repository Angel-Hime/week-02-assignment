const imageData = [
  {
    imageName: ".hardRockCafe",
    imageSrc: "./images/hard-rock-cafe.jpg",
    imageAlt:
      "A low lit, high exposure image of Hard Rock Cafe at night; you can see within the dimly lit foyer",
  },
  {
    imageName: ".snowTram",
    imageSrc: "./images/snow-tram.jpg",
    imageAlt:
      "An orange and white city-based tram travelling towards the photographer during a heavy snow fall at night",
  },
  {
    imageName: ".southKoreanStreet",
    imageSrc: "./images/south-korean-street.jpg",
    imageAlt:
      "A busy street in South Korea, during the day, flanked by high rise buildings, laden with shop signs, and full of cars, trucks. and a handful of people",
  },
  {
    imageName: ".souvenirsShop",
    imageSrc: "./images/souvenirs-shop.jpg",
    imageAlt:
      "At night a souvenir shop is lit withing so that you can see the interior beyond the external facia, as people walk past",
  },
];

const mainImage = document.getElementById(mainDisplay);

function createThumbnails() {
  const albumDisplay = document.getElementById("albumDisplay");
  //TODO: this is a repetitive task  --> for loop(for, forEach()...)
  imageData.forEach(function (item) {
    const thumbnailImage = document.createElement("img");

    thumbnailImage.src = item.imageSrc;
    thumbnailImage.alt = item.imageAlt;
    thumbnailImage.className = item.imageName;
    thumbnailImage.tabIndex = "0";

    document.onkeydown = (push) => {
      if (push.key === "Enter") {
        document.activeElement.click();
      }
    };
    thumbnailImage.addEventListener("click", function createMainImage() {
      mainDisplay.innerHTML = null;

      const mainImage = document.createElement("img");

      mainImage.src = item.imageSrc;
      mainImage.alt = item.imageAlt;
      mainImage.className = "mainImage";

      mainDisplay.appendChild(mainImage);
    });

    albumDisplay.appendChild(thumbnailImage);
  });
}

createThumbnails();
