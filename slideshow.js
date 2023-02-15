const buttons = document.querySelectorAll("[data-slideshow-button]")



buttons.forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.dataset)
        const offset = button.dataset.slideshowButton === "next" ? 1 : -1   // the name slideshowbutton has to match up to the name after the data attribute
        console.log(offset)
    }

    )
    // console.log("hi")
    
});




















