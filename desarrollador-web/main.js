window.sr = ScrollReveal();
sr.reveal('.animationLeft', {
  duration: 2000,
  origin: 'left',
  distance: '500px'
});
sr.reveal('.animationRigth', {
  duration: 2000,
  origin: 'rigth',
  distance: '500px'
});
sr.reveal('.animationTop', {
  duration: 2000,
  origin: 'top',
  distance: '400px'
});
sr.reveal('.animationBottom', {
  duration: 2000,
  origin: 'bottom',
  distance: '400px'
});
ScrollReveal().reveal('.flip', {
  duration: 4000,
  rotate: {
    x: 180,
    // y: 20
  }
});
ScrollReveal().reveal('.animationRotateY', {
  duration: 2000,
  rotate: {
    y: 180,
    // y: 20
  }
});
ScrollReveal().reveal('.animationScala', {
  duration: 3000,
  scale: 0
});

ScrollReveal().reveal('.animationAparecer', { duration: 5000 });

const cursorBee = document.querySelector(".cursor-bee");
const cursorEye = document.querySelector(".cursor-eye");
let scale = 1;

function mousemoveHandler(e) {
  const target = e.target;
  const tl = gsap.timeline({
    defaults: {
      x: e.clientX,
      y: e.clientY,
      ease: "power2.out"
    }
  });

  // JUST FOR MY LOGO
  if (
    target.closest(".page-footer") ||
    target.classList.contains("page-footer")
  ) {
    gsap.to(".cursor", {
      opacity: 0
    });
    return;
  }

  if (target.tagName.toLowerCase() === "img" && target.closest(".image-grid")) {
    tl.to(cursorBee, {
      opacity: 0
    }).to(
      cursorEye,
      {
        opacity: 1
      },
      "-=0.5"
    );
  } else {
    if (target.classList.contains("line-animation")) {
      scale = 4;
    } else {
      scale = 1;
    }

    tl.to(cursorBee, {
      opacity: 1,
      scale: scale
    }).to(
      cursorEye,
      {
        opacity: 0
      },
      "-=0.5"
    );
  }
}

function mouseleaveHandler() {
  gsap.to(cursorBee, {
    opacity: 0
  });
}

document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mouseleave", mouseleaveHandler);
