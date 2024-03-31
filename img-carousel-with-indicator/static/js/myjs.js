const imageContainer = document.querySelector(".image-container");
const images = imageContainer.querySelectorAll('img');
const indicatorContainer = document.querySelector(".indicator-container")
const indicatorButtons = indicatorContainer.querySelectorAll("button")

// initialize a translation index
translateIndex = 0;

// set the background color of the first button of the indicator to white
indicatorButtons[0].style = 'background-color: white;'

// set a transition style to every image
images.forEach(element => {
    element.style = `transition: transform 0.4s`
}); 

// add a click event listener to the right button arrow
document.querySelector(".right-button").addEventListener("click", () => {
    // if the current image is the last one (index of 5, there are 6 images starting the count from 0)
    // then dont do anything, cannot move more to the right
    if (translateIndex === 5) {
        return
    }
    
    // increase the translation index by 1
    translateIndex += 1

    // change the translation value
    changeTranslationValue()

    // change the current active indicator button
    changeIndicatorColor()

})

// add a click event listener to the left button arrow
document.querySelector(".left-button").addEventListener("click", () => {
    // if the current image is the first one (index 0) dont do anything, cannot move more to the left
    if (translateIndex === 0) {
        return
    }

    // decrease the translation index by 1
    translateIndex -= 1

    // change the translation value
    changeTranslationValue()

    // change the current active indicator button
    changeIndicatorColor()

})

function changeTranslationValue() {
    // for each image set the translation equal to the translateIndex multiplied by 400 (the image width)
    // the minus is because we move the images towards the left
    images.forEach(element => {
        element.style.transform = `translateX(${-1 * translateIndex * 400}px)`
    }); 
}

function changeIndicatorColor() {
    // change all indicator buttons background color to the not active color
    indicatorButtons.forEach(element => {
        element.style = `background-color: rgba(243, 243, 243, 0.455); transition: background-color 0.5s`
    }); 

    // set the current selected indicator (according to the translateIndex variable)
    // equal to white
    indicatorButtons[translateIndex].style = "background-color: white;"
}

// for each indicator button add a click event listener
indicatorButtons.forEach(element => {
    element.addEventListener("click", () => {
        // here we find the index of the button, clicked by the user
        // set the current button index to 0
        currentButtonIndex = 0;

        // loop through all the buttons and if the current loop button is equal to the 
        // button that we add the event listener then we found the button
        // at the same time to increase every time the currentButtonIndex
        for (bt of indicatorButtons) {
            if (bt === element) {
                break
            }
            currentButtonIndex += 1;
        }

        // the translation value equals to the selected button index multiplied by the image width (400)
        translate = currentButtonIndex * 400;
        
        // apply this tranlation value to all of the images
        // add also the -1 because we move the images to the left
        images.forEach(element => {
            element.style.transform = `translateX(${-1 * translate}px)`
        }); 

        // set the current tranlate index equal to the selected button index
        translateIndex = currentButtonIndex;

        // change the selected button background color
        changeIndicatorColor()
        
    })
}); 