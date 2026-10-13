/* =========================================================
   AOS ANIMATION
========================================================= */

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: "ease-out-cubic"
});


/* =========================================================
   TYPING EFFECT
========================================================= */

if (document.querySelector("#typing")) {

    new Typed("#typing", {

        strings: [
            "Full Stack Developer",
            "C# Developer",
            "JavaScript Developer",
            "BSCS Student"
        ],

        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1200,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: "|"

    });

}


/* =========================================================
   STICKY NAVBAR
========================================================= */

const header = document.getElementById("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menu = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menu && navbar) {

    menu.addEventListener("click", () => {

        navbar.classList.toggle("active");
        menu.classList.toggle("active");

    });


    // Close menu when clicking a navigation link

    const mobileLinks = document.querySelectorAll(".nav-links a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");
            menu.classList.remove("active");

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION ON SCROLL
========================================================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active from all buttons

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active to clicked button

        button.classList.add("active");

        const filter = button.dataset.filter;


        projectCards.forEach(card => {

            // ALL PROJECTS

            if (filter === "all") {

                card.style.display = "block";

                setTimeout(() => {
                    card.classList.add("show");
                }, 50);

            }


            // FILTERED PROJECTS

            else {

                const category = card.dataset.category;

                const hasClass = card.classList.contains(filter);

                if (category === filter || hasClass) {

                    card.style.display = "block";

                    setTimeout(() => {
                        card.classList.add("show");
                    }, 50);

                } else {

                    card.classList.remove("show");
                    card.style.display = "none";

                }

            }

        });

    });

});


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   SKILLS SLIDER
========================================================= */

const skillSlides = document.querySelectorAll(".skill-slide");
const skillDots = document.querySelectorAll(".skill-dots .dot");

const nextSkillBtn = document.querySelector(".skill-arrow.next");
const prevSkillBtn = document.querySelector(".skill-arrow.prev");

let currentSkill = 0;

function showSkillSlide(index) {

    if (!skillSlides.length) return;

    skillSlides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === index
        );

    });


    skillDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


/* NEXT BUTTON */

if (nextSkillBtn) {

    nextSkillBtn.addEventListener("click", () => {

        currentSkill =
            (currentSkill + 1) % skillSlides.length;

        showSkillSlide(currentSkill);

    });

}


/* PREVIOUS BUTTON */

if (prevSkillBtn) {

    prevSkillBtn.addEventListener("click", () => {

        currentSkill =
            (currentSkill - 1 + skillSlides.length) %
            skillSlides.length;

        showSkillSlide(currentSkill);

    });

}


/* DOTS */

skillDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSkill = index;

        showSkillSlide(currentSkill);

    });

});


/* AUTO SKILL SLIDER */

if (skillSlides.length > 1) {

    setInterval(() => {

        currentSkill =
            (currentSkill + 1) % skillSlides.length;

        showSkillSlide(currentSkill);

    }, 4000);

}


/* INITIAL SKILL SLIDE */

showSkillSlide(currentSkill);


/* =========================================================
   PROJECT IMAGE SLIDESHOW
========================================================= */

const projectSliders =
    document.querySelectorAll(".project-image-slider");

projectSliders.forEach(slider => {

    const slides =
        slider.querySelectorAll(".project-slide");

    if (!slides.length) return;

    let current = 0;


    function showSlide(index) {

        slides.forEach((slide, i) => {

            slide.classList.toggle(
                "active",
                i === index
            );

        });

    }


    // First image

    showSlide(current);


    // Automatic slideshow

    if (slides.length > 1) {

        setInterval(() => {

            current =
                (current + 1) % slides.length;

            showSlide(current);

        }, 3000);

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".about-image, .about-content, .stat, .certificate-card, .timeline-item, .stat-box, .contact-info, .contact-form"
);


const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("aos-animate");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters = document.querySelectorAll(
    ".stat h3, .stat-box h3"
);


function animateCounter(counter) {

    const targetText =
        counter.innerText.trim();

    const target =
        parseInt(targetText.replace(/\D/g, ""));

    if (isNaN(target)) return;


    const suffix =
        targetText.replace(/[0-9]/g, "");


    let current = 0;

    const increment =
        Math.max(1, Math.ceil(target / 50));


    const timer = setInterval(() => {

        current += increment;


        if (current >= target) {

            current = target;

            clearInterval(timer);

        }


        counter.innerText =
            current + suffix;

    }, 30);

}


const counterObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.7
    }

);


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image img");

if (hero && heroImage) {

    hero.addEventListener("mousemove", e => {

        const x =
            (window.innerWidth / 2 - e.clientX) / 40;

        const y =
            (window.innerHeight / 2 - e.clientY) / 40;


        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });


    hero.addEventListener("mouseleave", () => {

        heroImage.style.transform =
            "translate(0, 0)";

    });

}


/* =========================================================
   CERTIFICATE 3D TILT
========================================================= */

const certificateCards =
    document.querySelectorAll(".certificate-card");


certificateCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;


        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================================================
   PROJECT CARD TILT
========================================================= */

const projectCardElements =
    document.querySelectorAll(".project-card");


projectCardElements.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -2;

        const rotateY =
            ((x - centerX) / centerX) * 2;


        card.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "";

    });

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            targetId === ""
        ) return;


        const target =
            document.querySelector(targetId);


        if (target) {

            e.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(
        ".btn, .project-btn, .certificate-btn"
    );


buttons.forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple =
            document.createElement("span");

        ripple.classList.add("ripple");


        const rect =
            this.getBoundingClientRect();


        const size =
            Math.max(rect.width, rect.height);


        ripple.style.width =
            ripple.style.height =
            `${size}px`;


        ripple.style.left =
            `${e.clientX - rect.left - size / 2}px`;


        ripple.style.top =
            `${e.clientY - rect.top - size / 2}px`;


        this.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================================
   SKILL TAG HOVER
========================================================= */

const skillTags =
    document.querySelectorAll(".skill-tags span");


skillTags.forEach(tag => {

    tag.addEventListener("mouseenter", () => {

        tag.style.transform =
            "translateY(-3px)";

    });


    tag.addEventListener("mouseleave", () => {

        tag.style.transform =
            "";

    });

});


/* =========================================================
   PARALLAX SECTION EFFECT
========================================================= */

window.addEventListener("scroll", () => {

    const scrolled =
        window.scrollY;


    const heroOverlay =
        document.querySelector(".hero-overlay");


    if (heroOverlay) {

        heroOverlay.style.transform =
            `translateY(${scrolled * 0.15}px)`;

    }

});


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
/* =========================================================
   BALANCED TECH STACK REVEAL
========================================================= */

const techStack = document.querySelector(".tech-stack");
const skillsSlider = document.querySelector(".skills-slider");
const skillDotsSection = document.querySelector(".skill-dots");
const extraQualities = document.querySelector(".extra-qualities");

if (techStack) {

    const techObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    /* Show Tech Stack */
                    techStack.classList.add("tech-visible");


                    /* Show Skills after Tech Stack */
                    setTimeout(() => {

                        if (skillsSlider) {
                            skillsSlider.classList.add("skills-visible");
                        }

                    }, 1800);


                    /* Show dots */
                    setTimeout(() => {

                        if (skillDotsSection) {
                            skillDotsSection.classList.add("skills-visible");
                        }

                    }, 1950);


                    /* Show qualities */
                    setTimeout(() => {

                        if (extraQualities) {
                            extraQualities.classList.add("skills-visible");
                        }

                    }, 2150);


                    /* Run only once */
                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    techObserver.observe(techStack);

}