console.log("Console Test");

//TODO creatae thumbnail images sothat the user can click on them and see them in a full screen format

// STEP 1: store image date

const imageData = [
  {
    imageName: "value",
    imageSrc: "images/hard-rock-cafe-album.jpg",
    imageAlt: "value",
  },
  {
    imageName: "value",
    imageSrc: "images/snow-tram-album.jpg",
    imageAlt: "value",
  },
  {
    imageName: "value",
    imageSrc: "images/south-korean-street-album.jpg",
    imageAlt: "value",
  },
  {
    imageName: "value",
    imageSrc: "images/souvenirs-shop-album.jpg",
    imageAlt: "value",
  },
];

// STEP 2: create thumbnail images

function createThumbnails() {
  // select the DOM element (albumContainer) to contain thumbnail images
  // this is a repetitive task  --> for loop(for, forEach()...)
  // loop task
  //- create img element
  // const thumbnailImage = createElement("img");
  //- update the src and alt attributes of img element to match those in t he array (parameters)
  //thumbnailImage.style.imageSrc = imageData[];
  //- give each img a className(img.className)
  //- add eventlistener to each image --> the event handler is the function you write to create the fullscreen images (function in Step 3)
  // - apend the created images to thumbnail container
}

// STEP 3: create fullscreen images

function createMainImage() {
  //this is the event handler
  //select the mainDisplay
  //delete the current fullscreen image
  // mainDisplay.innerHTML = ""; <-- OR null
  // create image
  //update value (propertyies)
  //add class nme for styling to make it full screen
  //append theimage to the container
}

//add the createMain as the event handler of the event above
// you call the createthumnails function

// think about the stretch goals
