const imageContainer = document.querySelector(".image-container");
const images = imageContainer.querySelectorAll('img');
translateValue = 0;

images.forEach(element => {
        element.style = `transition: transform 0.4s`
    }); 

document.querySelector(".right-button").addEventListener("click", () => {
    if (translateValue === -900) {
        return
    }
    translateValue = translateValue - 300
    images.forEach(element => {
        element.style.transform = `translateX(${translateValue}px)`
    }); 
})

document.querySelector(".left-button").addEventListener("click", () => {
    if (translateValue === 0) {
        return
    }
    translateValue += 300
    images.forEach(element => {
        element.style.transform = `translateX(${translateValue}px)`
    }); 
})