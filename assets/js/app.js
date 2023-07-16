var typed = new Typed("#word", {
  strings: ["Web Designer", "Front-end Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

$(function () {
  // service slider///////////////////////////////////////////////
  let service_box = $(".service-box");
  service_box.slick({
    slidesToShow: 3,
    prevArrow: '<i class="service-box-arrows fa-solid fa-chevron-left"></i>',
    nextArrow: '<i class="service-box-arrows fa-solid fa-chevron-right"></i>',
  });

  // cricle skill //////////////////////////////////////////////////////////
  const cricles = document.querySelectorAll(".cricle");
  cricles.forEach((elem) => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor((dots * marked) / 100);
    var points = "";
    var rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
      points +=
        '<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>';
    }
    elem.innerHTML = points;
    const ponitsMarked = elem.querySelectorAll(".points");
    for (let i = 0; i < percent; i++) {
      ponitsMarked[i].classList.add("marked");
    }
  });

  // menu fixed ////////////////////////////////////
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $("#nav").addClass("active");
    } else {
      $("#nav").removeClass("active");
    }
  });

  // Ws color /////////////////////////////////////////
 

  // mixit up //////////////////////////////////////////
  var mixer = mixitup(".portfolio-gallery");
});






