const logos = document.querySelectorAll('#logo path');
const line = document.querySelector('.path-line');
var pathLength = line.getTotalLength();
var boundingClient = line.getBoundingClientRect();
const entry = document.querySelector('.section-1');
const backEnd = document.querySelector('.back-end');
const frontEnd = document.querySelector('.front-end');
const faceContainer = document.querySelector('.face');
const skillsFront = document.querySelector('.front-end-skills');
const skillsBack = document.querySelector('.back-end-skills');
const liveLinks = document.querySelectorAll('.live-server');
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');
const aside = document.querySelector('aside');
const overSlideRight = document.querySelector('.over-slide-right');
const overSlideLeft = document.querySelector('.over-slide-left');
//--------------------------Entry----------------------------------

logos.forEach((path, index) => {
    console.log(`Letter ${index} is ${path.getTotalLength()}`)
});

// function scrollingFunction() {
window.addEventListener("scroll", function (e) {

    // What % down is it? 
    // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
    // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.

    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)
        / (4000 - entry.clientHeight);

    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;
    // console.log(drawLength);
    // Draw in reverse
    line.style.strokeDashoffset = pathLength - drawLength;

    // When complete, remove the dash array, otherwise shape isn't quite sharp
    // Accounts for fuzzy math
    if (scrollPercentage >= 0.99) {
        line.style.strokeDasharray = "none";

    } else {
        line.style.strokeDasharray = pathLength + ' ' + pathLength;
    }
    // console.log('path lenght', pathLength);
    if (line.style.strokeDashoffset <= -900) {
        console.log(line.style.strokeDashoffset);
        gsap.to(overSlideRight, 0.5, { x: '100%', ease: 'power1.in' });
        gsap.to(overSlideLeft, 0.5, { x: '-100%', ease: 'power1.in' });
    }
});



//--------------------------Skills----------------------------------

faceContainer.addEventListener('mousemove', function (e) {
    // console.log(e);
    let mousePercentage = (e.offsetX / faceContainer.clientWidth) * 100;
    // console.log(mousePercentage);
    // console.log(e.offsetX)

    if (mousePercentage > 50) {
        // console.log(mousePercentage);
        let increase = 100 - mousePercentage;
        let dincrease = mousePercentage;

        // console.log(increase);
        // let tlback = gsap.timeline({});
        // tlback.to(backEnd, 0.2, { clipPath: `inset(0 0 0 ${increase}%)`, ease: 'none' })
        //     .to(frontEnd, 0.2, { clipPath: `inset(0 ${dincrease}% 0 0 )`, ease: 'none' })
        gsap.to(backEnd, 0.2, { clipPath: `inset(0 0 0 ${increase}%)`, ease: 'none' })
        gsap.to(frontEnd, 0.2, { clipPath: `inset(0 ${dincrease}% 0 0 )`, ease: 'none' })
    }
    else if (mousePercentage < 50) {

        let tlfront = gsap.timeline({});
        let increase = mousePercentage;
        let dincrease = 100 - mousePercentage;

        gsap.to(frontEnd, 0.2, { clipPath: `inset(0 ${increase}% 0 0 )`, ease: 'none' })
        gsap.to(backEnd, 0.2, { clipPath: `inset(0 0 0 ${dincrease}%)`, ease: 'none' })

    }
});

window.addEventListener('mousemove', function (e) {
    if (e.target.className != 'back-end' && e.target.className != 'front-end' &&
        e.target.className != 'full') {
        // let tl = gsap.timeline({});
        // tl.to(frontEnd, 0.2, { clipPath: `inset(0 50% 0 0 )`, ease: 'none' })
        //     .to(backEnd, 0.2, { clipPath: `inset(0 0 0 50%)`, ease: 'none' })
        gsap.to(backEnd, 0.2, { clipPath: `inset(0 0 0 50%)`, ease: 'none' })
        gsap.to(frontEnd, 0.2, { clipPath: `inset(0 50% 0 0 )`, ease: 'none' })

    }
});

// //--------------------------Navlinks----------------------------------

liveLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        const icon = link.querySelector('i');
        setTimeout(function () {
            if (icon.classList.contains('fa-square')) {
                icon.classList.remove('fa-square');
                icon.classList.add('fa-share-square');
            }
        }, 300)
    })
})

liveLinks.forEach(link => {
    link.addEventListener('mouseleave', function () {
        const icon = link.querySelector('i');
        setTimeout(function () {
            if (icon.classList.contains('fa-share-square')) {
                icon.classList.remove('fa-share-square');
                icon.classList.add('fa-square');
            }
        }, 350)

    })
})


burger.addEventListener('click', function (e) {
    if (!e.target.classList.contains("active")) {
        e.target.classList.add("active");
        navBar.style.display = 'flex';
        gsap.to(".line-1", 0.5, { rotate: "45", y: 5, background: "#151515" });
        gsap.to(".line-2", 0.5, { rotate: "-45", y: -5, background: "#151515" });
        gsap.to("#nav-logo", 1, { color: "#151515" });
        gsap.to(".nav-bar", { duration: 2, clipPath: "circle(70.7% at 50% 50%)", ease: "bounce.out" });

    }
    else {

        e.target.classList.remove("active");
        gsap.to(".line-1", 0.5, { rotate: "0", y: 0, background: "white" });
        gsap.to(".line-2", 0.5, { rotate: "0", y: 0, background: "white" });
        gsap.to("#nav-logo", 1, { color: "white" });
        gsap.to(".nav-bar", 2, {
            clipPath: "circle(0% at 50% 50%)", ease: "power4.out"
        });

    }
})
