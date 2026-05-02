document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".photo");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const thumbnails = document.getElementById("thumbnails");

    let currentIndex = 0;

    const imageList = [...images].map(img => img.src);

    // THUMBNAILS
    imageList.forEach((src, index) => {
        const thumb = document.createElement("img");
        thumb.src = src;

        thumb.addEventListener("click", () => {
            showImage(index);
        });

        thumbnails.appendChild(thumb);
    });

    // OPEN LIGHTBOX
    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            openLightbox(index);
        });
    });

    function openLightbox(index) {
        currentIndex = index;
        lightbox.style.display = "flex";
        showImage(index);
    }

    function showImage(index) {
        currentIndex = index;
        lightboxImg.src = imageList[index];

        document.querySelectorAll(".thumbnails img").forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    // NAVIGATION
    const nextBtn = document.querySelector(".nav-next");
    const prevBtn = document.querySelector(".nav-prev");

    nextBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % imageList.length;
        showImage(currentIndex);
    });

    prevBtn?.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        showImage(currentIndex);
    });

    // CLOSE (clic extérieur)
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // CLOSE bouton
    document.querySelector(".close")?.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // KEYBOARD
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") nextBtn?.click();
        if (e.key === "ArrowLeft") prevBtn?.click();
        if (e.key === "Escape") lightbox.style.display = "none";
    });

});