$(".discount-img-div img").mouseover(function () {
  $(this).addClass("animate__pulse");
});
$(".discount-img-div img").mouseleave(function () {
  $(this).removeClass("animate__pulse");
});
$(".insuranceProtection-img-div").mouseover(function () {
  $(this)
    .find(".insuranceProtection-img-content")
    .addClass("animate__jackInTheBox");
});
$(".insuranceProtection-img-div").mouseleave(function () {
  $(this)
    .find(".insuranceProtection-img-content")
    .removeClass("animate__jackInTheBox");
});
$(".servicesPg-service-card").mouseover(function () {
  $(this).find(".servicePg-card-bg").addClass("animate__jackInTheBox");
});
$(".servicesPg-service-card").mouseleave(function () {
  $(this).find(".servicePg-card-bg").removeClass("animate__jackInTheBox");
});
if ($(window).width() < 900) {
  var swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
} else {
  var swiper = new Swiper(".testimonialSwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
}
var swiper2 = new Swiper(".testimonialSwiper2", {
  loop: true,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper(".fundedSwiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".aboutSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

if ($(window).width() < 576) {
  var swiper = new Swiper(".fundedSwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".aboutSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
if ($(window).width() < 400) {
  var swiper = new Swiper(".fundedSwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper = new Swiper(".aboutSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
$(window).on("resize", function () {
  if ($(window).width() < 900) {
    var swiper = new Swiper(".testimonialSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesProgress: true,
    });
  } else {
    var swiper = new Swiper(".testimonialSwiper", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
    });
  }
  if ($(window).width() < 576) {
    var swiper = new Swiper(".fundedSwiper", {
      slidesPerView: 3,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".aboutSwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
  if ($(window).width() < 400) {
    var swiper = new Swiper(".fundedSwiper", {
      slidesPerView: 2,
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    var swiper = new Swiper(".aboutSwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
});
