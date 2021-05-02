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

let title = document.getElementById("header__title");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  title.style.marginTop = value * 0.25 + "px";
});

AOS.init();
