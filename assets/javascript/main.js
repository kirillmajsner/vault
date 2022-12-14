$(function () {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.menu').toggleClass('opened');
    $('body').toggleClass('darkened');
  });

  $('.courses-shedule .course').on('click', function () {
    $(this).toggleClass('opened');
  });

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })

  $('.horizontal-scrolling-controls a').bind('click', function (event) {
    event.preventDefault();
    $('html, body').stop();
    const anchor = $(this).attr('href');

    moveToAnchor(anchor);

    $('.control').removeClass('active');
    $(this).addClass('active');
  });

  activateFirstItem();

  $('.certificate').on('click', function () {
    $(this).toggleClass('active');
  });

  $('.close-modal').on('click', function () {
    $(this).parents('.modal').toggleClass('opened');
  });

  $('.carousel-body').slick({
    nextArrow: $('.next-course'),
    dots: true,
    appendDots: '.slides-control',
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

const moveToAnchor = (anchor) => {
  const anchorNumber = anchor.match(/\d+/g).map(Number)[0];

  $('.horizontal-scrolling-content').stop().animate({
    scrollLeft: findAnchorPosition(anchorNumber)
  }, 1000);
}

const getContainerIndent = (container) => {
  const margin = parseInt(container.css('margin-left'));
  const padding = parseInt(container.css('padding-left'));

  return margin + padding;
}

const findAnchorPosition = (anchorNumber) => {
  const indent = getContainerIndent($('.horizontal-scrolling-container'));
  $('.scrolling-item').css('margin-right', indent);

  const itemFullWidth = $('.scrolling-item').width() + indent;

  return (anchorNumber - 1) * itemFullWidth;
}

const activateFirstItem = () => {
  // $('.horizontal-scrolling-controls .control:first-child').click();
  $('.horizontal-scrolling-controls .control:nth-child(3)').click();


}
