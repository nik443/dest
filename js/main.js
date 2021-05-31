"use strict";

$(document).ready(function () {
  $('.menu-control,.mobile-menu__link').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.mobile-top').toggleClass('active');
    $(this).closest('.mobile-top').next().slideToggle();
  });
  $('.cat-top .menu-control,.cat-menu__link').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.cat-top').toggleClass('active');
    $(this).closest('.cat-top').next().slideToggle();
  });
  var swiper = new Swiper('.clients-slider .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.clients-slider .right',
      prevEl: '.clients-slider .left'
    },
    breakpoints: {
      992: {
        slidesPerView: 2
      }
    }
  });
  var swiper1 = new Swiper('.partners-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.partners-slider .right',
      prevEl: '.partners-slider .left'
    }
  });
  var swiper2 = new Swiper('.collection-slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.collection-slider .right',
      prevEl: '.collection-slider .left'
    }
  });
  $('.faq-toggle,.faq-name').on('click', function () {
    $(this).closest('.faq-top').toggleClass('active');
    $(this).closest('.faq-top').next().slideToggle();
  });
  $('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('.mobile-wrapper').toggle();
  });
  $('.menu__link--sub,.menu-trigger').on('click', function (e) {
    e.preventDefault();
    $(this).parent().toggleClass('active');
  });

  //Функия проверки форм от Никиты :)
    $('button[type="submit"]').on('click', function(e) {
      let form = (this).closest('form');
      const name = $(form).find('input[name="name"]').val();
      const email = $(form).find('input[name="email"]').val();
      const tel = $(form).find('input[name="tel"]').val();

      const regName = /[A-Za-zА-Яа-яЁё\-]{2,}\s[A-Za-zА-Яа-яЁё\-]{2,}/;
      if (name.length < 1 || name.length > 27 || !regName.test(name)) {
        e.preventDefault();
        $(form).find('.nameField').find('.signap-hint').addClass('signap-hint-active');
        $(form).find('.nameField').find('.signap-error').addClass('signap-error-active');
        $(form).find('.nameField').find('.signap-hint-text-wrapper').addClass('signap-hint-text-wrapper-active');
      } else {
        $(form).find('.nameField').find('.signap-error').removeClass('signap-error-active');
        $(form).find('.nameField').find('.signap-hint').removeClass('signap-hint-active');
        $(form).find('.nameField').find('.signap-hint-text-wrapper').removeClass('signap-hint-text-wrapper-active');
        $(form).find('.nameField').find('.signup-correct').addClass('signup-correct-active');
      }

      const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
      if (email.length < 1 || email.length > 27 || !regEmail.test(email)) {
        e.preventDefault();
        $(form).find('.mailField').find('.signap-hint').addClass('signap-hint-active');
        $(form).find('.mailField').find('.signap-error').addClass('signap-error-active');
        $(form).find('.mailField').find('.signap-hint-text-wrapper').addClass('signap-hint-text-wrapper-active');
      } else {
        $(form).find('.mailField').find('.signap-hint').removeClass('signap-hint-active');
        $(form).find('.mailField').find('.signap-error').removeClass('signap-error-active');
        $(form).find('.mailField').find('.signap-hint-text-wrapper').removeClass('signap-hint-text-wrapper-active');
        $(form).find('.mailField').find('.signup-correct').addClass('signup-correct-active');
      }

      const regTel = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
      if (tel.length < 10 || email.length > 16 || !regTel.test(tel)) {
        e.preventDefault();
        $(form).find('.phoneField').find('.signap-hint').addClass('signap-hint-active');
        $(form).find('.phoneField').find('.signap-error').addClass('signap-error-active');
        $(form).find('.phoneField').find('.signap-hint-text-wrapper').addClass('signap-hint-text-wrapper-active');
      } else {
        $(form).find('.phoneField').find('.signap-hint').removeClass('signap-hint-active');
        $(form).find('.phoneField').find('.signap-error').removeClass('signap-error-active');
        $(form).find('.phoneField').find('.signap-hint-text-wrapper').removeClass('signap-hint-text-wrapper-active');
        $(form).find('.phoneField').find('.signup-correct').addClass('signup-correct-active');
      }

      if ($(form).find('input[type="checkbox"]').length != 0) {
        let checkbox = $(form).find('input[type="checkbox"]');
        if (!$(checkbox).is(':checked')) {
          e.preventDefault();
          $(checkbox).addClass('personal-data-unchecked');
        } else $(checkbox).removeClass('personal-data-unchecked');
      }

      if ($(form).find('textarea').length != 0) {
        let textarea = $(form).find('textarea').val();
        let hint = $(form).find('.signup-form-textarea-hint');
        $(hint).addClass('signup-form-textarea-hint-active');
          if (textarea.length < 100) {
            e.preventDefault()
            $(hint).text('your message < 100'); }
          else if (textarea.length > 2000) {
            e.preventDefault()
            $(hint).text('your message > 2000'); }
          else $(hint).removeClass('signup-form-textarea-hint-active');
      } 
    })

  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".menu__link--sub,.menu-trigger"); // тут указываем ID элемента

    if (!div.is(e.target) // если клик был не по нашему блоку
    && div.has(e.target).length === 0) {
      // и не по его дочерним элементам
      $('.menu-item').removeClass('active'); // скрываем его
    }
  });

//modal
  //#modal-feedback
  $('.we-btn-open-modal').on('click', function(e){
    $('.modal').addClass('modal-active');
    $('#modal-feedback').css('display', 'block');
    $('body').addClass('body-active');
  });
  $('.modal-close').on('click', function(e){
    $('.modal').removeClass('modal-active');
    $('#modal-feedback').css('display', 'none');
    $('body').removeClass('body-active');
    $('#modal-download').fadeOut(500);
  });
});
  //#modal-download
  let countShow = 0;
  function leaveFunction() {
    if (countShow == 0 && $('#modal-feedback').css('display') == 'none') {
      countShow+=1;
      $('.modal').addClass('modal-active');
      $('body').addClass('body-active');
      $('#modal-download').fadeIn(500);
    }
  }

//# sourceMappingURL=maps/main.js.map