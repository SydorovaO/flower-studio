// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
$('.js-open-modal').click(function () {
  const modalName = $(this).attr('data-modal');

  const modal = $('.js-modal[data-modal="' + modalName + '"]');

  modal.addClass('is-show');
  $('.js-modal-overlay').addClass('is-show');

  $('.js-modal-close').click(function () {
    $(this).parent('.js-modal').removeClass('is-show');
    $('.js-modal-overlay').removeClass('is-show');
  });
  $('.js-modal-overlay').click(function () {
    $('.js-modal.is-show').removeClass('is-show');
    $(this).removeClass('is-show');
  });
});

function toggleBodyScroll() {
  if (document.body.style.overflow === 'hidden') {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
}
