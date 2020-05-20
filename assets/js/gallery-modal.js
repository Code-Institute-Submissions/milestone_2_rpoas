/*------------------------------------------------------operates the modal--*/
/*------------took inspiration from https://wesbos.com/beginner-javascript--*/


async function Modal(gallery) {
    const images = Array.from(gallery.querySelectorAll("img"));
    const body = document.querySelector("body")
    const modal = document.querySelector(".modal");
    const prevButton = modal.querySelector(".previous");
    const nextButton = modal.querySelector(".next");
    let currentImage;
    
    function showImage(el) {
        console.log(el);
        modal.querySelector("img").src = el.src;
        modal.querySelector("h3").textContent = el.alt;
        modal.querySelector("figcaption p").textContent = el.dataset.caption;
        currentImage = el;
    }
    
    await function handleImageClick(event) {
        showImage(event.currentTarget);
    }

    function showNextImage() {
        showImage(currentImage.parentElement.nextElementSibling.firstElementChild);
    }

    function showPrevImage() {
        showImage(currentImage.parentElement.previousElementSibling.firstElementChild);
    }

    function arrowKeys(event) {
        if (event.key === "ArrowRight") showNextImage();
        if (event.key === "ArrowLeft") showPrevImage();
    }

    images.forEach(image => image.addEventListener("click", handleImageClick));

    /* Why is this not displaying modal when pressing return???

    images.forEach(image => {
        image.addEventListener("keyup", e => {
            if (e.key === "Enter") {
                showImage(e.currentTarget);
            }
        });
    });
    */

    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
}

const gallery = Modal(document.querySelector(".gallery"));