$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });
  var next = document.querySelector("button.hotel-slider__button--next");
  var prev = document.querySelector("button.hotel-slider__button--prev");
  addEventListener("keyup", function (event) {
    if (event.keyCode == 39) next.click(function () {});
  });
  addEventListener("keyup", function (event) {
    if (event.keyCode == 37) prev.click(function () {});
  });
  var closeButton = document.querySelector("a.modal__close");
  addEventListener("keyup", function (event) {
    if (event.keyCode == 27) closeButton.click(function () {});
  });
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    //console.log("Клик по кнопке");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  var modalButtton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButtton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //var iframe
  function clickIframe() {
    $(".map__iframe").removeClass("map__iframe--inactive");
    iframeMap.addClass("");
  }
  var iframeMap = $(".map");
  iframeMap.on("mouseover", clickIframe);

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        text: {
          required: "Введите что-нибудь",
        },
        name: {
          required: "Укажите имя",
          minlength: "Имя должно быть не меньше 2 букв",
        },
        email: {
          required: "Введите почту",
          email: "Формат должен быть: name@domain.com",
          minlength: "Слишком короткий адрес",
        },
        phone: {
          required: "Телефон обязателен",
          minlength: "Неправильный формат номера телефона",
        },
      },
    });
  });
  $(".phone_us").mask("+7(000) 000-00-00");
  AOS.init();
});
