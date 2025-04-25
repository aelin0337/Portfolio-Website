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

  $(document).ready(function(){
    $("#show").click(function(){
      $("p, footer").show();
    });
    $("#hide").click(function(){
      $("p, footer").hide();
    });
    
  });

  $(document).ready(function () {
    $('.service-card').on('click', function () {
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
