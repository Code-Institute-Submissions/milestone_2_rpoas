function Gallery(gallery) {
    if(!gallery) {
        throw new Error("No Gallery Found");
        return;
    }
    const images = Array.from(gallery.querySelectorAll("img"));
    const modal = document.querySelector(".modal");
    const prevButton = modal.querySelector(".previous");
    const nextButton = modal.querySelector(".next");
    let currentImage;

    function openModal() {
        console.info("Opening Modal");
    }
    
    function showImage(el) {
        if(!el) {
            console.info("no image");
            return;
        }
        console.log(el);
        modal.querySelector("img").src = el.src;
        modal.querySelector("h5").textContent = el.alt;
        modal.querySelector("figcaption p").textContent = el.dataset.caption;
        currentImage = el;
    }
    function handleImageClick(event) {
        showImage(event.currentTarget);
    }

    images.forEach(image => image.addEventListener("click", handleImageClick))
}

const gallery = Gallery(document.querySelector(".gallery"));