$(window).on("scroll", function () {
  AOS.init();
});

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
  });
  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

window.onload = function () {
  const parallax = document.querySelector(".promo");
  const bg = document.querySelector(".promo__bg");
  const title = document.getElementById("header__title");
  const forBg = 10;
  const speed = 0.05;
  let positionX = 0;
  let positionY = 0;
  let coordXpercent = 0;
  let coordYpercent = 0;

  function setMouseParallaxStyle() {
    const distX = coordXpercent - positionX;
    const distY = coordYpercent - positionY;
    positionX = positionX + distX * speed;
    positionY = positionY + distY * speed;
    bg.style.transform = `translate(${positionX / forBg}%, ${
      positionY / forBg
    }%)`;
    requestAnimationFrame(setMouseParallaxStyle);
  }
  setMouseParallaxStyle();

  parallax.addEventListener("mousemove", function (e) {
    const parallaxWidth = parallax.offsetWidth;
    const parallaxHeight = parallax.offsetHeight;
    const coordX = e.pageX - parallaxWidth / 2;
    const coordY = e.pageY - parallaxHeight / 2;
    coordXpercent = (coordX / parallaxWidth) * 100;
    coordYpercent = (coordY / parallaxHeight) * 100;
  });


  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    title.style.marginTop = value * 0.35 + "px";
    bg.style.marginTop = value * 0.35 + "px";
  });
};
