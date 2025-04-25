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
  $("#toggleBox").click(function () {
    $(".hiddenContent").slideToggle();
  });
  $("#updateText").text("Text updated with jQuery!");



//4 part
$("#changeStyle").css("color", "purple");

$("#toggleBox").click(function () {
  $(".hiddenContent").slideToggle();
});

$("#updateText").text("Text updated with jQuery!");

$("#addItem").click(function () {
  $("#dynamicList").append("<li>New Item</li>");
});
$("#removeItem").click(function () {
  $("#dynamicList li:last").remove();
});
