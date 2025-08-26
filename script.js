// addEventListener("click", function(){
//     brand.reloaded();
// })



document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navCenter = document.querySelector('.nav-center');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', function () {
        navCenter.classList.toggle('active');
        menuToggle.innerHTML = navCenter.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-right a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 1024) {
                navCenter.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const slides = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".carousel-indicators button");

    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;

        indicators.forEach((btn, i) => {
            btn.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    // Indicators click
    indicators.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            showSlide(i);
        });
    });

    // Auto slide every 5s
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000);

    // Init
    showSlide(0);
});






document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-link');
    const menuItems = document.querySelectorAll('.menu-item');

    // Filter function
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            menuItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});



// Slider


// document.addEventListener("DOMContentLoaded", function () {
//     const carouselInner = document.querySelector(".slider-inner");
//     const slides = document.querySelectorAll(".slider-item");
//     const indicators = document.querySelectorAll(".slider-indicators i");

//     let currentIndex = 0;

//     function showSlide(index) {
//         if (index < 0) index = slides.length - 1;
//         if (index >= slides.length) index = 0;

//         carouselInner.style.transform = `translateX(-${index * 100}%)`;

//         indicators.forEach((dot, idx) => {
//             dot.classList.toggle("active", idx === index);
//         });

//         currentIndex = index;
//     }

//     // Indicators click
//     indicators.forEach((dot, idx) => {
//         dot.addEventListener("click", () => {
//             showSlide(idx);
//         });
//     });

//     // Auto slide every 10s
//     setInterval(() => {
//         showSlide(currentIndex + 1);
//     }, 10000);

//     // Init
//     showSlide(0);
// });
