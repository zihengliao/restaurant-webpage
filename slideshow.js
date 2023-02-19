// const buttons = document.querySelectorAll("[data-slideshow-button]")

const buttons = document.querySelectorAll("[data-slideshow]")






buttons.forEach(button => {

    interval = setInterval(() => {
        const offset = 1   // the name slideshowbutton has to match up to the name after the data attribute
        const slides = button.querySelector("[data-slides]")
        const activeSlide = slides.querySelector("[data-active]")
    
        
        // console.log(slides.children)
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        // console.log(newIndex)
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    }
    , 5000)

    

    
});






// button.addEventListener("click", () => {
//     // console.log(button.dataset)
//     clearInterval(interval)
//     const offset = button.dataset.slideshowButton === "next" ? 1 : -1   // the name slideshowbutton has to match up to the name after the data attribute
//     const slides = button.closest("[data-slideshow]").querySelector("[data-slides]")
//     const activeSlide = slides.querySelector("[data-active]")

    
//     // console.log(slides.children)
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0
//     console.log(newIndex)
//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
// }

// )









