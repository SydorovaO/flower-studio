$('.js-open-modal').click(function () {
  const modalName = $(this).attr('data-modal');
  const modal = $('.js-modal[data-modal="' + modalName + '"]');
  modal.addClass('is-show');
  $('.js-modal-overlay').addClass('is-show');
  togglePageScrolling();

  $('.js-modal-close').click(function () {
    $(this).parent('.js-modal').removeClass('is-show');
    $('.js-modal-overlay').removeClass('is-show');
    togglePageScrolling();
  });

  $('.js-modal-overlay').click(function () {
    $('.js-modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
    togglePageScrolling();
  });
});

function togglePageScrolling() {
  if ($('.js-modal-overlay').hasClass('is-show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
}
const modalThanks = document.querySelector('.modal-form-send');

// modalThanks.addEventListener('click', () => {
//   $('.js-modal[data-modal="submit"]').removeClass('is-show');
//   $('.js-modal-overlay').addClass('is-show');
// });
$('.js-open-modal[data-modal="thanks"]').click(function () {
  // Закрити модальне вікно 1
  $('.js-modal[data-modal="submit"]').removeClass('is-show');
  $('.js-modal-overlay').addClass('is-show');
  // Відкрити модальне вікно 3
  $('.js-modal[data-modal="thanks"]').addClass('is-show');
});
