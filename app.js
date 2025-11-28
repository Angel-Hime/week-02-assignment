console.log(visualViewport);

//TODO creatae thumbnail images sothat the user can click on them and see them in a full screen format

// STEP 1: store image date

const imageData = [
  {
    imageName: ".hardRockCafe",
    imageSrc: "./images/hard-rock-cafe.jpg",
    imageAlt: "A low lit, high exposure image of Hard Rock Cafe",
  },
  {
    imageName: ".snowTram",
    imageSrc: "./images/snow-tram.jpg",
    imageAlt:
      "A tram travelling towards the photographer during a heavy snow fall at night",
  },
  {
    imageName: ".southKoreanStreet",
    imageSrc: "./images/south-korean-street.jpg",
    imageAlt:
      "A street in South Korea, during the day, with high rise buildings and full of cars and people",
  },
  {
    imageName: ".souvenirsShop",
    imageSrc: "./images/souvenirs-shop.jpg",
    imageAlt:
      "At night a souvenir shop is lit so that you can see the interior past the external facia",
  },
];

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
    //- add eventlistener to each image --> the event handler is the function you write to create the fullscreen images (function in Step 3)
    thumbnailImage.addEventListener(
      "click",
      function createMainImage() /*this is the event handler*/ {
        // STEP 3: create fullscreen images
        //select the mainDisplay
        const mainDisplay = document.getElementById("mainDisplay");
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

// you call the createthumnails function
createThumbnails();

// think about the stretch goals
