// anomation of the card
$(document).ready(function () {
    $('.toggle-details').click(function () {
      const clickedButton = $(this);
      const currentCard = clickedButton.closest('.card');
      const thisDetails = currentCard.find('.card-details');

      $('.card-details').not(thisDetails).fadeOut(400);
      $('.toggle-details').not(clickedButton).text('Show Details');

      if (thisDetails.is(':visible')) {
        thisDetails.fadeOut(400);
        clickedButton.text('Show Details');
      } else {
        thisDetails.fadeIn(400);
        clickedButton.text('Hide Details');
      }
    });
  });

 // show and hide the text
  $(document).ready(function(){
    $("#show").click(function(){
      $("p, footer").show();
    });
    $("#hide").click(function(){
      $("p, footer").hide();
    });

  });

  // show a cards with audio
  $(document).ready(function () {

    const clickSound = new Audio('click.mp3');

    $('.service-card').on('click', function () {
      clickSound.currentTime = 0;
      clickSound.play();
      
      let title = $(this).data('title');
      let description = $(this).data('description');
      let price = $(this).data('price');

      $('#modalTitle').text(title);
      $('#modalDescription').text(description);
      $('#modalPrice').text(price);
      $('#serviceModal').fadeIn();
    });

    $('.modal-close').on('click', function () {
      $('#serviceModal').fadeOut();
    });

    $(window).on('click', function (e) {
      if ($(e.target).is('#serviceModal')) {
        $('#serviceModal').fadeOut();
      }
    });
  });
