window.onload = () => {
    //Gradients---->
    const sections = document.querySelectorAll("section");
    const bubble = document.querySelector(".bubble");
    const gradients = [
        "linear-gradient(to right top,  #c2e59c,#64b3f4)",
        "linear-gradient(to right top, #5C258D, #4389A2)",
        "linear-gradient(to right top, #9796f0, #fbc7d4)",
        "linear-gradient(to right top, #f2709c, #ff9472)"
    ];

    const options = {
        threshold: 0.3
    };

    let observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
        entries.forEach(entry => {
            const className = entry.target.className;
            const activeAnchor = document.querySelector(`[data-page=${className}]`);
            const gradientIndex = entry.target.getAttribute(`data-index`);
            const coords = activeAnchor.getBoundingClientRect();
            const directions = {
                height: coords.height,
                width: coords.width,
                top: coords.top,
                left: coords.left
            };
            if (entry.isIntersecting) {
                bubble.style.setProperty("left", `${directions.left}px`);
                bubble.style.setProperty("top", `${directions.top}px`);
                bubble.style.setProperty("height", `${directions.height}px`);
                bubble.style.setProperty("width", `${directions.width}px`);
                bubble.style.background = gradients[gradientIndex];

            }
        });
    }

    sections.forEach(section => {
        observer.observe(section);
    });

    /*carousel img*/
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");

    let counter = 1;
    const size = carouselImages[0].getBoundingClientRect().width;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


    next.addEventListener("click", () => {
        if (counter >= carouselImages.length - 1)
            return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        console.log(counter);
    });

    prev.addEventListener("click", () => {
        if (counter <= 0)
            return;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        console.log(counter);
    });

    carouselSlide.addEventListener("transitionend", () => {
        if (carouselImages[counter].id === "lastClone") {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImages[counter].id === "firstClone") {
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });



    /*boton vistar pagina*/
    const aVisit = document.querySelector("#a-visit");
    aVisit.addEventListener("click", () => {
        if (counter == 0) {
            aVisit.href = "https://dev-lions.github.io/programacion-web/";
        }
        if (counter == 1) {
            aVisit.href = "https://dev-lions.github.io/cosmiatria/";
        }
        if (counter == 2) {
            aVisit.href = "https://lions-dev.github.io/carrito/";
        }
        if (counter == 3) {
            aVisit.href = "https://dev-lions.github.io/LaCampestre/";
        }
        if (counter == 4) {
            aVisit.href = "https://dev-lions.github.io/programacion-web/";
        }
        else if (counter == 5) {
            aVisit.href = "https://dev-lions.github.io/cosmiatria/";
        }



    });


    /*actualiazar pagina al volver atras*/
    if (performance.navigation.type == 2) {
        location.reload(true);
    }

}
