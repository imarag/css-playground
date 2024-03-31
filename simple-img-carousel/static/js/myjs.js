const imageContainer = document.querySelector(".image-container");
const images = imageContainer.querySelectorAll('img');

// initialize a translate value
translateValue = 0;

// set a transition effect to each image
images.forEach(element => {
        element.style = `transition: transform 0.4s`
    }); 

// add a click event listener to the right arrow button
document.querySelector(".right-button").addEventListener("click", () => {
    // if the translate value equals to -900 (we are at the end of the images)
    // (total images * image width - 3 shown images * image width)
    // return (we cannot go more to the right)
    if (translateValue === -900) {
        return
    }

    // decrease the translate value by 300
    translateValue = translateValue - 300

    // for each image set the translation value
    images.forEach(element => {
        element.style.transform = `translateX(${translateValue}px)`
    }); 
})

// add a click event listener to the left arrow button
document.querySelector(".left-button").addEventListener("click", () => {
    // if the translate value equals to 0 (we are at the beginnign of the images)
    // return (we cannot go more to the left)
    if (translateValue === 0) {
        return
    }

    // increase the translate value by 300
    translateValue += 300

    // for each image set the translation value
    images.forEach(element => {
        element.style.transform = `translateX(${translateValue}px)`
    }); 
})