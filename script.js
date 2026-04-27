

document.addEventListener("DOMContentLoaded", () => {
    // 1. TYPED.JS
    const typedEl = document.querySelector("#typed");
    if (typedEl && typeof Typed !== "undefined") {
        new Typed("#typed", {
            strings: [" Emely", "a Developer", "a UX Designer", "a Marketer", "a Problem Solver"],
            typeSpeed: 70, backSpeed: 40, backDelay: 1200, loop: true
        });
    }

    // 2. COUNTER ANIMATION
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const count = parseFloat(counter.innerText);
        const increment = target / 50;

        if (count < target) {
            counter.innerText = (count + increment).toFixed(1);
            setTimeout(() => animateCounter(counter), 40);
        } else {
            counter.innerText = target;
        }
    };

    // 3. OBSERVERS (Combined)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add reveal class
                entry.target.classList.add('active');
                
                // Trigger counters if they exist in this element
                entry.target.querySelectorAll('.counter').forEach(animateCounter);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.story-card, .card-box, .section-card, .experience-figure').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
    // 5. FORM LOGIC (Keep separate, it's fine)
    initFormValidation();
});

function initFormValidation() {
    const form = document.querySelector("form");
    if (!form) return;
    
    // Move your form event listeners here...
}



const swiper = new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});