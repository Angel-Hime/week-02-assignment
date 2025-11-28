//TODO creatae thumbnail images sothat the user can click on them and see them in a full screen format

// STEP 1: store image date

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

// STEP 2: create thumbnail images

function createThumbnails() {
  // select the DOM element (albumDisplay) to contain thumbnail images
  const albumDisplay = document.getElementById("albumDisplay");
  //TODO: this is a repetitive task  --> for loop(for, forEach()...)
  imageData.forEach(function (item) {
    //Loop task
    //- create img element
    const thumbnailImage = document.createElement("img");
    //- update the src and alt attributes of img element to match those in the array (parameters)
    thumbnailImage.src = item.imageSrc;
    thumbnailImage.alt = item.imageAlt;
    //- give each img a className(img.className)
    thumbnailImage.className = item.imageName;
    thumbnailImage.tabIndex = "0";
    //- add eventlistener to each image --> the event handler is the function you write to create the fullscreen images (function in Step 3)
    document.onkeydown = (e) => {
      if (e.key === "Enter") {
        document.activeElement.click();
      }
    };
    thumbnailImage.addEventListener(
      "click",
      function createMainImage() /*this is the event handler*/ {
        // STEP 3: create fullscreen images
        //select the mainDisplay
        // const mainDisplay = document.getElementById("mainDisplay");
        //delete the current fullscreen image
        mainDisplay.innerHTML = null;
        // create image
        const mainImage = document.createElement("img");

        //update values (properties)
        mainImage.src = item.imageSrc;
        mainImage.alt = item.imageAlt;
        //add class name for styling to make it full screen
        mainImage.className = "mainImage";

        //append theimage to the container
        mainDisplay.appendChild(mainImage);
      }
    );

    // - apend the created images to thumbnail container
    albumDisplay.appendChild(thumbnailImage);
  });
  //loop ends
}

// TODO: new function for keydown

// we are not calling this function at any point
// this function exists outside of the loop
// we need to go through the array entries by keypush

// you call the createthumnails function
createThumbnails();

// think about the stretch goals
