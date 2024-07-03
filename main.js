$(document).ready(function () {
  $(".input-field").focusout(function () {
    let inputValue = $(this).val();
    if (inputValue === "") {
      $(this).removeClass("has-value");
    } else {
      $(this).addClass("has-value");
    }
  });
});